const Termscon = () => {
  // Generate 38 bubbles with random properties
  const bubbleColors = [
    'var(--color-primary, #A259FF)',
    'var(--color-accent, #7B2CBF)',
    'var(--color-secondary, #9D4EDD)'
  ];
  const bubbles = Array.from({ length: 38 }).map((_, i) => {
    const size = Math.floor(Math.random() * 60) + 60; // 60px to 120px
    const top = Math.random() * 90; // 0% to 90%
    const left = Math.random() * 90; // 0% to 90%
    const color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
    const duration = Math.floor(Math.random() * 20) + 18; // 18s to 38s
    const keyframe = `bubbleMove${(i % 8) + 1}`;
    const opacity = 0.08 + Math.random() * 0.12; // 0.08 to 0.2
    return (
      <div
        key={i}
        className="bubble-animation absolute rounded-full pointer-events-none"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `radial-gradient(circle at 50% 50%, ${color} 60%, transparent 100%)`,
          top: `${top}%`,
          left: `${left}%`,
          opacity,
          animation: `${keyframe} ${duration}s linear infinite`,
          zIndex: 30 // above content box
        }}
      />
    );
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FFEEFF] text-[#2C2C2C] dark:bg-black dark:text-[#FFEEFF] font-inter p-4 flex items-center justify-center">
      {/* Animated Bubbles - now above the main content and denser */}
      <div className="absolute inset-0 w-full h-full z-30 pointer-events-none">
        {bubbles}
      </div>
      <style>{`
        @keyframes bubbleMove1 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(40vh) translateX(20vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove2 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30vh) translateX(-30vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove3 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20vh) translateX(25vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove4 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(30vh) translateX(-15vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove5 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25vh) translateX(10vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove6 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15vh) translateX(-20vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove7 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10vh) translateX(30vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove8 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20vh) translateX(-10vw); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
      {/* Top Right Circle */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-purple-400/30 to-purple-600/40 rounded-full opacity-40"></div>
      {/* Bottom Left Circle */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-purple-300/25 to-purple-500/35 rounded-full opacity-40"></div>

      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#A259FF]/15 rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#A259FF]/15 rounded-full -z-10"></div>

      {/* Main content container for the terms and conditions */}
      <div className="max-w-4xl w-full mx-auto p-6 md:p-8 lg:p-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl relative z-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#A259FF] dark:text-[#9D4EDD]">
          Terms and Conditions
        </h1>

        {/* Introduction Paragraph */}
        <p className="mb-6 text-base sm:text-lg text-center">
          Welcome to MargDarshak! These terms and conditions outline the rules
          and regulations for the use of MargDarshak Website
        </p>

        {/* Section 1: Acceptance of Terms */}
        <section className="mb-8">
          {/* Secondary color in light mode: rgb(157, 78, 221) -> #9D4EDD */}
          {/* Secondary color in dark mode: rgb(123, 44, 191) -> #7B2CBF */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#9D4EDD] dark:text-[#7B2CBF]">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use MargDarshak if you do not agree
            to take all of the terms and conditions stated on this page.
          </p>
          <p>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            website and compliant to the Company’s terms and conditions. "The
            Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
            "Party", "Parties", or "Us", refers to both the Client and
            ourselves.
          </p>
        </section>

        {/* Section 2: Services Offered */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#9D4EDD] dark:text-[#7B2CBF]">
            2. Services Offered
          </h2>
          <p className="mb-4">
            MargDarshak provides counseling and mentorship services designed to
            guide individuals through various aspects of personal and
            professional development. Our services include, but are not limited
            to, one-on-one counseling sessions, group mentorship programs,
            workshops, and resource sharing.
          </p>
          <p>
            While we strive to provide valuable guidance, our services are not a
            substitute for professional medical, legal, or financial advice.
            Users are encouraged to seek independent professional advice when
            necessary.
          </p>
        </section>

        {/* Section 3: User Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#9D4EDD] dark:text-[#7B2CBF]">
            3. User Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              You agree to use MargDarshak's services for lawful purposes only
              and in a way that does not infringe the rights of, restrict or
              inhibit anyone else's use and enjoyment of this website.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of any
              account information, including your password, and for all
              activities that occur under your account.
            </li>
            <li>
              You agree to provide accurate, current, and complete information
              during the registration process and to update such information to
              keep it accurate, current, and complete.
            </li>
            <li>
              Any advice or information received from MargDarshak
              mentors/counselors should be considered as guidance and not as
              definitive solutions. The ultimate decision and responsibility for
              actions taken based on this guidance lie solely with the user.
            </li>
          </ul>
        </section>

        {/* Section 4: Intellectual Property Rights */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#9D4EDD] dark:text-[#7B2CBF]">
            4. Intellectual Property Rights
          </h2>
          <p className="mb-4">
            Unless otherwise stated, MargDarshak and/or its licensors own the
            intellectual property rights for all material on MargDarshak. All
            intellectual property rights are reserved. You may access this from
            MargDarshak for your own personal use subjected to restrictions set
            in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Republish material from MargDarshak</li>
            <li>Sell, rent or sub-license material from MargDarshak</li>
            <li>Reproduce, duplicate or copy material from MargDarshak</li>
            <li>Redistribute content from MargDarshak</li>
          </ul>
        </section>

        {/* Section 5: Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#9D4EDD] dark:text-[#7B2CBF]">
            5. Limitation of Liability
          </h2>
          <p className="mb-4">
            In no event shall MargDarshak, nor any of its officers, directors
            and employees, be held liable for anything arising out of or in any
            way connected with your use of this Website whether such liability
            is under contract. MargDarshak, including its officers, directors
            and employees shall not be held liable for any indirect,
            consequential or special liability arising out of or in any way
            related to your use of this Website.
          </p>
        </section>

        {/* Section 6: Disclaimer */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#9D4EDD] dark:text-[#7B2CBF]">
            6. Disclaimer
          </h2>
          <p className="mb-4">
            The information on this website is provided "as is," with all
            faults, and MargDarshak expresses no representations or warranties,
            of any kind related to this website or the materials contained on
            this website.
          </p>
          <p>
            Nothing contained on this Website shall be interpreted as advising
            you.
          </p>
        </section>

        {/* Section 7: Indemnification */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#9D4EDD] dark:text-[#7B2CBF]">
            7. Indemnification
          </h2>
          <p className="mb-4">
            You hereby indemnify to the fullest extent MargDarshak from and
            against any and/or all liabilities, costs, demands, causes of
            action, damages and expenses arising in any way related to your
            breach of any of the provisions of these Terms.
          </p>
        </section>

        {/* Section 8: Severability */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#9D4EDD] dark:text-[#7B2CBF]">
            8. Severability
          </h2>
          <p className="mb-4">
            If any provision of these Terms is found to be invalid under any
            applicable law, such provisions shall be deleted without affecting
            the remaining provisions herein.
          </p>
        </section>

        {/* Section 9: Variation of Terms */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#9D4EDD] dark:text-[#7B2CBF]">
            9. Variation of Terms
          </h2>
          <p className="mb-4">
            MargDarshak is permitted to revise these Terms at any time as it
            sees fit, and by using this Website you are expected to review these
            Terms on a regular basis.
          </p>
        </section>

        {/* Section 10: Assignment */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#9D4EDD] dark:text-[#7B2CBF]">
            10. Assignment
          </h2>
          <p className="mb-4">
            The MargDarshak is allowed to assign, transfer, and subcontract its
            rights and/or obligations under these Terms without any
            notification. However, you are not allowed to assign, transfer, or
            subcontract any of your rights and/or obligations under these Terms.
          </p>
        </section>

        {/* Section 11: Entire Agreement */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#9D4EDD] dark:text-[#7B2CBF]">
            11. Entire Agreement
          </h2>
          <p className="mb-4">
            These Terms constitute the entire agreement between MargDarshak and
            you in relation to your use of this Website, and supersede all prior
            agreements and understandings.
          </p>
        </section>

        {/* Section 12: Governing Law & Jurisdiction */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#9D4EDD] dark:text-[#7B2CBF]">
            12. Governing Law & Jurisdiction
          </h2>
          <p className="mb-4">
            These Terms will be governed by and interpreted in accordance with
            the laws of [Your Country/State], and you submit to the
            non-exclusive jurisdiction of the state and federal courts located
            in [Your Country/State] for the resolution of any disputes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Termscon;
