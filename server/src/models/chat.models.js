import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["user", "assistant"],
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const chatSessionSchema = new mongoose.Schema(
    {
        sessionId: {
            type: String,
            required: true,
            unique: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null, // Allow anonymous sessions
        },
        title: {
            type: String,
            default: "New Chat",
        },
        messages: [chatMessageSchema],
        isActive: {
            type: Boolean,
            default: true,
        },
        metadata: {
            userAgent: String,
            ipAddress: String,
            totalTokensUsed: {
                type: Number,
                default: 0,
            },
        },
    },
    {
        timestamps: true,
    }
);

// Index for better query performance
// Note: sessionId index is automatically created due to unique: true
chatSessionSchema.index({ userId: 1, createdAt: -1 });
chatSessionSchema.index({ createdAt: -1 });

// Auto-delete old anonymous sessions after 7 days
chatSessionSchema.index(
    { createdAt: 1 },
    {
        expireAfterSeconds: 604800, // 7 days
        partialFilterExpression: { userId: null },
    }
);

// Virtual for message count
chatSessionSchema.virtual("messageCount").get(function () {
    return this.messages.length;
});

// Method to add message
chatSessionSchema.methods.addMessage = function (role, content) {
    this.messages.push({ role, content });

    // Auto-generate title from first user message
    if (this.messages.length === 2 && this.title === "New Chat") {
        this.title =
            content.substring(0, 50) + (content.length > 50 ? "..." : "");
    }

    return this.save();
};

// Method to get recent messages for context
chatSessionSchema.methods.getRecentMessages = function (limit = 10) {
    return this.messages.slice(-limit).map((msg) => ({
        role: msg.role,
        content: msg.content,
    }));
};

// Static method to create new session
chatSessionSchema.statics.createSession = function (sessionId, userId = null) {
    return this.create({
        sessionId,
        userId,
        messages: [],
    });
};

// Static method to cleanup old sessions
chatSessionSchema.statics.cleanupOldSessions = function () {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 30); // 30 days ago

    return this.deleteMany({
        createdAt: { $lt: cutoffDate },
        userId: null, // Only cleanup anonymous sessions
    });
};

// Static methods for ChatMessage functionality
chatMessageSchema.statics.createMessage = async function (
    sessionId,
    role,
    content
) {
    try {
        // Find the session and add the message
        const session = await ChatSession.findOne({ sessionId });

        if (!session) {
            throw new Error(`Chat session ${sessionId} not found`);
        }

        // Add message to session
        const newMessage = { role, content, timestamp: new Date() };
        session.messages.push(newMessage);

        // Auto-generate title from first user message
        if (
            session.messages.length === 2 &&
            session.title === "New Chat" &&
            role === "user"
        ) {
            session.title =
                content.substring(0, 50) + (content.length > 50 ? "..." : "");
        }

        await session.save();

        // Return the newly created message
        return session.messages[session.messages.length - 1];
    } catch (error) {
        throw new Error(`Failed to create message: ${error.message}`);
    }
};

chatMessageSchema.statics.getMessagesBySession = async function (
    sessionId,
    limit = null
) {
    try {
        const session = await ChatSession.findOne({ sessionId }).select(
            "messages"
        );

        if (!session) {
            return [];
        }

        let messages = session.messages;

        if (limit && limit > 0) {
            messages = messages.slice(-limit);
        }

        return messages.map((msg) => ({
            _id: msg._id,
            role: msg.role,
            content: msg.content,
            timestamp: msg.timestamp,
        }));
    } catch (error) {
        throw new Error(`Failed to get messages: ${error.message}`);
    }
};

// Add static method to delete messages by session
chatMessageSchema.statics.deleteMany = async function (query) {
    try {
        if (query.sessionId) {
            // Clear messages from the session
            const result = await ChatSession.updateOne(
                { sessionId: query.sessionId },
                { $set: { messages: [] } }
            );
            return result;
        }
        return { deletedCount: 0 };
    } catch (error) {
        throw new Error(`Failed to delete messages: ${error.message}`);
    }
};

const ChatSession = mongoose.model("ChatSession", chatSessionSchema);
const ChatMessage = mongoose.model("ChatMessage", chatMessageSchema);

export { ChatSession, ChatMessage };
