"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import ConfettiExplosion to avoid server-side errors
const ConfettiExplosion = dynamic(() => import("react-confetti-explosion"), {
  ssr: false,
});

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
      <motion.h1
        className="text-4xl font-bold mb-4 text-green-600"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Thank You for Registering! 🎉
      </motion.h1>

      <motion.p
        className="text-gray-700 mb-6 text-lg max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Your spot for the masterclass has been successfully reserved. We look
        forward to seeing you there!
      </motion.p>

      <ConfettiExplosion force={0.6} duration={3000} particleCount={150} width={1600} />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/">
          <span className="inline-block mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 cursor-pointer">
            Back to Home
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
