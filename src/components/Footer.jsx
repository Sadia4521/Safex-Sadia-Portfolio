import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h2 className="text-2xl font-bold">
              Sadia
            </h2>

            <p className="text-gray-400 mt-2">
              Software Engineer • Frontend Developer • AI Enthusiast
            </p>

          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/Sadia4521"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sadia-software-engineer/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <hr className="my-8 border-slate-700" />

        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Sadia. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}