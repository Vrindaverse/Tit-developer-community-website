import { motion } from "framer-motion";

const LearnMore = () => {
  return (
    <section className="relative py-32 bg-[#020c1b] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-left">
        <motion.h1
          className="text-5xl font-bold text-blue-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          TIT Developer Community
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-light max-w-4xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          The TIT Developer Community is an exclusive group for talented programmers selected through a rigorous DSA-based programming competition. Members can specialize in any field within computer science, while non-members are welcome to participate in our competitions, hackathons, and workshops. Exclusive mentorship is provided to community members to help them excel in their chosen domains.
        </motion.p>

        <div className="mt-16">
          <motion.h2
            className="text-4xl font-semibold text-red-400 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {[
              { question: "How can I join the TIT Developer Community?", answer: "You can join by competing in our DSA-based programming competition. Only selected members become part of the community and can choose their specialization in CS." },
              { question: "Do I need prior experience to join?", answer: "While prior programming knowledge helps, anyone willing to learn and compete in our selection process can apply." },
              { question: "Can non-members participate in events?", answer: "Yes! Non-members can take part in hackathons, competitions, and workshops organized by the community." },
              { question: "Who receives mentorship?", answer: "Mentorship is exclusively provided to community members to guide them in their chosen specialization." },
              { question: "What kind of events does the community organize?", answer: "We host hackathons, coding competitions, speaker sessions, and hands-on workshops covering various tech fields." },
              { question: "Is there any membership fee?", answer: "No, becoming a member of the community is completely free. You just need to qualify through our selection process." },
              { question: "What technologies can I learn in the community?", answer: "Members can explore various fields like Web Development, AI/ML, Blockchain, Cybersecurity, and more based on their interest." },
              { question: "How often are events conducted?", answer: "The community organizes events regularly, including monthly coding contests, quarterly hackathons, and bi-weekly knowledge-sharing sessions." },
              { question: "How do I stay updated about upcoming events?", answer: "Follow our community announcements on social media or check our official platform for updates." }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white/10 rounded-lg shadow-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-blue-300 mb-2">{faq.question}</h3>
                <p className="text-lg text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
