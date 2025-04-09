// src/components/Form.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbzSL1fxSUOnJQCEzT7RfAwT6PW74TrTqE_g1oyPgXA9yHu8hV8Bkl_HH1a8yeXmWGR7yQ/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      toast.success("🎉 Successfully Registered!");
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      router.push("/thank-you");
    } else {
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto space-y-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.input
        className="w-full border border-gray-300 rounded px-4 py-2"
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        required
        whileFocus={{ scale: 1.02 }}
      />
      <motion.input
        className="w-full border border-gray-300 rounded px-4 py-2"
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        required
        whileFocus={{ scale: 1.02 }}
      />
      <motion.input
        className="w-full border border-gray-300 rounded px-4 py-2"
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        onChange={handleChange}
        required
        whileFocus={{ scale: 1.02 }}
      />
      <motion.textarea
        className="w-full border border-gray-300 rounded px-4 py-2"
        name="message"
        placeholder="Any message (optional)"
        onChange={handleChange}
        rows={4}
        whileFocus={{ scale: 1.02 }}
      />
      <motion.button
        type="submit"
        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition w-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Register Now
      </motion.button>
    </motion.form>
  );
}
