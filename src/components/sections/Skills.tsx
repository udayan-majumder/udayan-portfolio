"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

type SkillCategory = "frontend" | "backend" | "database" | "devops" | "other";

export default function Skills() {
  const categories: { value: SkillCategory; label: string; color: string }[] = [
    {
      value: "frontend",
      label: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: "backend",
      label: "Backend Development",
      color: "from-purple-500 to-pink-500",
    },
    {
      value: "database",
      label: "Database & Storage",
      color: "from-green-500 to-emerald-500",
    },
    {
      value: "devops",
      label: "DevOps & Tools",
      color: "from-orange-500 to-red-500",
    },
  ];

  const getSkillsByCategory = (category: SkillCategory) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical expertise spans across various technologies and tools
            that I use to build modern web applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.value);

            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.label}
                  </h3>
                  <div
                    className={`w-24 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}
                  ></div>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="space-y-4">
                        {/* Skill Header */}
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </h4>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                delay: skillIndex * 0.1,
                                duration: 1.5,
                                ease: "easeOut",
                              }}
                              viewport={{ once: true }}
                              className={`h-3 rounded-full bg-gradient-to-r ${category.color}`}
                            />
                          </div>
                        </div>

                        {/* Skill Level Indicator */}
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>Beginner</span>
                          <span>Intermediate</span>
                          <span>Advanced</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Other Skills & Tools
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills
              .filter((skill) => skill.category === "other")
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-2xl font-bold text-gray-400 dark:text-gray-500 mb-2">
                    {skill.icon || "⚡"}
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Always Learning & Growing</h3>
          <p className="text-blue-100 max-w-2xl mx-auto">
            I'm constantly expanding my skill set and staying up-to-date with
            the latest technologies and best practices in web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
