import { SyncAlt, Verified, HeadsetMic } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function PoliciesSection() {
  const policies = [
    {
      icon: <SyncAlt fontSize="large" />,
      title: "Easy Exchange Policy",
      description: "We offer hassle-free exchange policy",
    },
    {
      icon: <Verified fontSize="large" />,
      title: "7 Days Return Policy",
      description: "We provide 7 days free return policy",
    },
    {
      icon: <HeadsetMic fontSize="large" />,
      title: "Best Customer Support",
      description: "We provide 24/7 customer support",
    },
  ];

  return (
    <motion.section
      className="py-12 px-6 mt-20 mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-center gap-20 text-center">
        {policies.map((policy, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation for each policy item
          >
            <div className="text-black">{policy.icon}</div>
            <h3 className="text-lg font-semibold">{policy.title}</h3>
            <p className="text-gray-500">{policy.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
