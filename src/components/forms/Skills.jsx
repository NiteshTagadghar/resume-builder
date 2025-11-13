import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSkills } from "../../features/userDataSlice";
import { useNavigate } from "react-router-dom";

function Skills() {
  const [techSkills, setTechSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "TailwindCSS",
    "Node.js",
    "MongoDB",
  ]);

  const tools = [
    "VS Code",
    "Git & GitHub",
    "Postman",
    "Figma",
    "Vercel",
    "Netlify",];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Adaptability",
    "Creativity",
  ];

  const [newSkill, setNewSkill] = useState("");

  const dispatch = useDispatch()

  const navigate = useNavigate()

  function handleChange(e) {
    setNewSkill(e.target.value);
  }

  function handleAddSkill(e) {
    e.preventDefault();
    if (newSkill.trim() === "") return;

    const skillExists = techSkills.some(
      (skill) => skill.toLowerCase() === newSkill.toLowerCase()
    );

    if (!skillExists) {
      setTechSkills((prev) => [...prev, newSkill]);
    }

    dispatch(updateSkills(techSkills))

    navigate("/download-resume")

    setNewSkill("");
  }


  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Technical Skills */}
        <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-green-600">
            Technical Skills
          </h3>

          <form onSubmit={handleAddSkill} className="mb-4 flex gap-2">
            <input
              type="text"
              value={newSkill}
              onChange={handleChange}
              placeholder="Enter new skill"
              className="flex-1 bg-gray-100 text-gray-900 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Add
            </button>
          </form>

          <ul className="flex flex-wrap gap-2">
            {techSkills.map((skill) => (
              <li
                key={skill}
                className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Tools</h3>
          <ul className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li
                key={tool}
                className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">
            Soft Skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <li
                key={skill}
                className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
