import { FaGithub } from "react-icons/fa";

export default function FeaturedProject() {

  return (

    <section
      className="py-24 bg-gray-50"
    >

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-14">

          Featured Project

        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h3 className="text-3xl font-bold">

            SafeX Candidate Management Portal

          </h3>

          <p className="mt-6 text-gray-600 leading-8">

            A modern React dashboard developed during my Frontend
            Development Internship at SafeX Solutions.

            The system includes Candidate Directory,
            Group & Leader View,
            Weekly Task Tracker,
            reusable components,
            responsive layouts,
            routing,
            and clean UI.

          </p>

          <div className="flex flex-wrap gap-3 mt-8">

            <span className="bg-blue-100 px-4 py-2 rounded-full">

              React

            </span>

            <span className="bg-blue-100 px-4 py-2 rounded-full">

              Tailwind CSS

            </span>

            <span className="bg-blue-100 px-4 py-2 rounded-full">

              React Router

            </span>

            <span className="bg-blue-100 px-4 py-2 rounded-full">

              Responsive UI

            </span>

          </div>

          <a

            href="https://github.com/Sadia4521/SafeX-Candidate-Management-Portal"

            target="_blank"

            rel="noreferrer"

            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl mt-10 hover:bg-gray-800 transition"

          >

            <FaGithub />

            View Source Code

          </a>

        </div>

      </div>

    </section>

  );

}