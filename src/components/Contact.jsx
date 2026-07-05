import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold mb-8">
              Let's Work Together
            </h3>

            <p className="text-gray-600 leading-8 mb-10">
              I'm always interested in internships,
              freelance opportunities, software engineering
              roles, and AI-related projects. Feel free
              to contact me anytime.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <FaEnvelope className="text-blue-600 text-2xl" />

                <span>
                  sadia672005@gmail.com
                </span>

              </div>

              <div className="flex items-center gap-4">

                <FaGithub className="text-blue-600 text-2xl" />

                <a
                  href="https://github.com/Sadia4521"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  github.com/Sadia4521
                </a>

              </div>

              <div className="flex items-center gap-4">

                <FaLinkedin className="text-blue-600 text-2xl" />

                <a
                  href="https://www.linkedin.com/in/sadia-software-engineer/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  LinkedIn Profile
                </a>

              </div>

              <div className="flex items-center gap-4">

                <FaMapMarkerAlt className="text-blue-600 text-2xl" />

                <span>
                  Islamabad, Pakistan
                </span>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <form className="bg-gray-50 rounded-2xl shadow-lg p-8">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-4 mb-5 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-4 mb-5 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg p-4 mb-5 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full border rounded-lg p-4 mb-6 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}