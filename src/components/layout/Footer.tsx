"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: personalInfo.socialLinks.github, label: "GitHub" },
    {
      icon: Linkedin,
      href: personalInfo.socialLinks.linkedin,
      label: "LinkedIn",
    },
    { icon: Twitter, href: personalInfo.socialLinks.twitter, label: "Twitter" },
    {
      icon: Facebook,
      href: personalInfo.socialLinks.facebook,
      label: "Facebook",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400">
              © {new Date().getFullYear()} UDAYAN MAJUMDER. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map(
              (social, index) =>
                social.href && (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                )
            )}
          </motion.div>

          {/* Scroll to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200 text-white"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <div className="text-center text-sm text-gray-500">
            <p>
              Made with ❤️ by UDAYAN MAJUMDER |
              <a
                href="https://github.com/udayanmajumder/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                View Source
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
