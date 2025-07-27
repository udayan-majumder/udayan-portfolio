"use client";

import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
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

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
              >
                Hello, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {personalInfo.name}
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
              >
                {personalInfo.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
              >
                {personalInfo.bio}
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex space-x-4"
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
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  )
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Contact Me</span>
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-gray-900 rounded-lg shadow-2xl p-6 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <div className="space-y-2 text-gray-300">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span> = {"{"}
                </div>
                <div className="ml-4">
                  <span className="text-green-400">name:</span>{" "}
                  <span className="text-yellow-400">
                    '{personalInfo.name}',
                  </span>
                </div>
                <div className="ml-4">
                  <span className="text-green-400">title:</span>{" "}
                  <span className="text-yellow-400">
                    '{personalInfo.title}',
                  </span>
                </div>
                <div className="ml-4">
                  <span className="text-green-400">location:</span>{" "}
                  <span className="text-yellow-400">
                    '{personalInfo.location}',
                  </span>
                </div>
                <div className="ml-4">
                  <span className="text-green-400">skills:</span> [
                </div>
                <div className="ml-8 text-yellow-400">
                  'PERN Stack', 'React', 'Next.js', 'PostgreSQL'
                </div>
                <div className="ml-4">],</div>
                <div className="ml-4">
                  <span className="text-green-400">passion:</span>{" "}
                  <span className="text-yellow-400">
                    'Building efficient, user-centric solutions'
                  </span>
                </div>
                <div>{"}"};</div>
                <div className="mt-4">
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-blue-400">getInTouch</span>() {"{"}
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-yellow-400">
                    'Let\'s build something great together!'
                  </span>
                  ;
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
