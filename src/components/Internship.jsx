import { FaLaptopCode, FaReact, FaUsers } from "react-icons/fa";

export default function Internship() {
  return (
    <section
      id="internship"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-6">
          Frontend Development Internship
        </h2>

        <p className="text-center text-gray-500 text-lg mb-16">
          SafeX Solutions
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-white shadow-xl rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-6">
              Internship Details
            </h3>

            <div className="space-y-4">

              <p>
                <strong>Company:</strong> SafeX Solutions
              </p>

              <p>
                <strong>Role:</strong> Frontend Development Intern
              </p>

              <p>
                <strong>Technology:</strong> React, Tailwind CSS
              </p>

              <p>
                <strong>Status:</strong> Ongoing
              </p>

            </div>

          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-6">
              Responsibilities
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <FaReact className="text-2xl text-blue-600 mt-1"/>

                <p>
                  Developed modern React components using reusable architecture.
                </p>

              </div>

              <div className="flex gap-4">

                <FaLaptopCode className="text-2xl text-blue-600 mt-1"/>

                <p>
                  Built responsive dashboard interfaces using Tailwind CSS.
                </p>

              </div>

              <div className="flex gap-4">

                <FaUsers className="text-2xl text-blue-600 mt-1"/>

                <p>
                  Designed Candidate Directory, Group View and Weekly Task Tracker.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}