import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Send,
  Bot,
  User,
  X,
  Minimize2,
  Maximize2,
} from "lucide-react";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-scroll to show the beginning of new messages
  const scrollToNewMessage = () => {
    // Only scroll when there are messages and we're not at the very beginning
    if (messages.length > 0) {
      const messagesContainer = messagesEndRef.current?.parentElement;
      if (messagesContainer) {
        // Get the last message element
        const lastMessageIndex = messages.length - 1;
        const lastMessageElement = messagesContainer.children[lastMessageIndex];

        if (lastMessageElement) {
          // Scroll to show the beginning of the last message with some padding
          lastMessageElement.scrollIntoView({
            behavior: "smooth",
            block: "start", // This ensures we scroll to the top of the message
          });
        }
      }
    }
  };

  useEffect(() => {
    // Only auto-scroll when a new message is added and it's from the assistant
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      // Scroll when assistant responds or when user sends a message
      if (lastMessage.role === "assistant" || lastMessage.role === "user") {
        setTimeout(() => scrollToNewMessage(), 100); // Small delay to ensure DOM is updated
      }
    }
  }, [messages]);

  // Initialize chat session
  const initializeSession = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/ai/chat/session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setSessionId(data.data.sessionId);
        // Add welcome message
        setMessages([
          {
            id: Date.now(),
            role: "assistant",
            content: `Hello! I'm Margdarshak AI, your career guidance assistant. I'm here to help you with:

• Career advice and guidance
• Educational pathways
• Skill development recommendations
• Interview preparation tips
• Resume building advice
• Industry insights

How can I assist you today?`,
            timestamp: new Date(),
          },
        ]);
      }
    } catch (error) {
      console.error("Failed to initialize chat session:", error);
      // Add error message
      setMessages([
        {
          id: Date.now(),
          role: "assistant",
          content:
            "Sorry, I'm currently unavailable. The AI service might not be configured yet.",
          timestamp: new Date(),
          isError: true,
        },
      ]);
    }
  };

  // Send message
  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/ai/chat/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId,
            message: inputMessage,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        const aiMessage = {
          id: Date.now() + 1,
          role: "assistant",
          content: data.data.message,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "I apologize, but I'm having trouble processing your request right now. Please try again in a moment.",
        timestamp: new Date(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  // Handle enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Open chat
  const openChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
    if (!sessionId) {
      initializeSession();
    }
    // Focus input after opening
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Floating chat button
  if (!isOpen) {
    return (
      <button
        onClick={openChat}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center text-white"
        style={{
          zIndex: 9999,
          background:
            "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 transition-all duration-300 ${
        isMinimized ? "w-80 h-16" : "w-96 h-[600px]"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div
        className="h-full rounded-xl shadow-2xl flex flex-col overflow-hidden border"
        style={{
          backgroundColor: "var(--color-bg)",
          borderColor: "rgba(var(--color-primary-rgb), 0.3)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 text-white border-b"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
            borderBottomColor: "rgba(var(--color-primary-rgb), 0.3)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Margdarshak AI</h3>
              <p className="text-xs opacity-80">Career Guidance Assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4" />
              ) : (
                <Minimize2 className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
              style={{
                backgroundColor: "rgba(var(--color-primary-rgb), 0.05)",
              }}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                      }}
                    >
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-lg ${
                      message.role === "user"
                        ? "text-white rounded-br-none"
                        : "rounded-bl-none border"
                    } ${
                      message.isError
                        ? "border border-red-300 bg-red-50 dark:bg-red-900/20"
                        : ""
                    }`}
                    style={{
                      ...(message.role === "user"
                        ? {
                            background:
                              "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                          }
                        : {
                            backgroundColor: "var(--color-bg)",
                            color: "var(--color-text)",
                            borderColor: "rgba(var(--color-primary-rgb), 0.2)",
                          }),
                    }}
                  >
                    <p className="text-sm whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>

                  {message.role === "user" && (
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-accent), var(--color-primary))",
                      }}
                    >
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                    }}
                  >
                    <Bot className="w-4 h-4" />
                  </div>
                  <div
                    className="px-4 py-2 rounded-lg rounded-bl-none border"
                    style={{
                      backgroundColor: "var(--color-bg)",
                      borderColor: "rgba(var(--color-primary-rgb), 0.2)",
                    }}
                  >
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: "var(--color-primary)" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{
                          backgroundColor: "var(--color-primary)",
                          animationDelay: "0.15s",
                        }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{
                          backgroundColor: "var(--color-primary)",
                          animationDelay: "0.3s",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className="p-4 border-t"
              style={{
                backgroundColor: "var(--color-bg)",
                borderTopColor: "rgba(var(--color-primary-rgb), 0.2)",
              }}
            >
              <div className="flex gap-2">
                <textarea
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about careers, education, skills..."
                  className="flex-1 resize-none border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 transition-colors"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    color: "var(--color-text)",
                    borderColor: "rgba(var(--color-primary-rgb), 0.3)",
                    "--tw-ring-color": "var(--color-primary)",
                  }}
                  rows={1}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="p-2 text-white rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  style={{
                    background:
                      isLoading || !inputMessage.trim()
                        ? "rgba(var(--color-primary-rgb), 0.5)"
                        : "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                  }}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;
