import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-12 px-4 bg-transparent min-h-screen " id="skill">
      <div className="text-center mb-10" data-aos="fade-down">
        <h2 className="text-3xl font-bold text-gray-800">My Skills</h2>
        <p className="text-gray-600">Technologies I work with</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="text-6xl">{skill.icon}</div>
            <p className="text-lg font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
