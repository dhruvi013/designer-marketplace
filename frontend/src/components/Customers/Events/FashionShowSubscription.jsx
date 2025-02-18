import { useState } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function FashionShowSubscription() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Subscribed successfully with ${email}`);
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-[90vh] p-4"
      initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly down
      whileInView={{ opacity: 1, y: 0 }} // When in view: visible and in normal position
      viewport={{ once: true }} // Trigger animation once when the section enters the view
      transition={{ duration: 0.8 }} // Smooth transition duration
    >
      <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-10 rounded-3xl text-center shadow-lg max-w-4xl w-full flex flex-col justify-center" style={{ minHeight: '400px' }}>
        <div className="flex justify-center mb-4">
          <Mail className="text-purple-600 w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold">Stay Updated on Fashion Shows & Participate!</h2>
        <p className="text-gray-600 mt-2">
          Be the first to know about upcoming fashion events, exclusive runway shows, and opportunities to participate.
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-5 rounded-3xl border border-gray-300 w-70 h-14"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-black text-white px-6 py-2 rounded-3xl"
            onClick={handleSubscribe}
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
