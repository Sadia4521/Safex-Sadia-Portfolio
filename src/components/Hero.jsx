import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-8">

        <div>

          <p className="text-blue-600 font-semibold">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mt-3">
            Sadia
          </h1>

          <h2 className="text-3xl text-gray-600 mt-4">
            Software Engineer
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Passionate Frontend Developer, AI Enthusiast,
            and currently working as a Frontend Development
            Intern at SafeX Solutions.
          </p>

          <div className="flex gap-5 mt-10">
            <a
              href="https://github.com/Sadia4521"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="/Sadia-Frontend.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">

          <img
            src={profile}
            alt="profile"
            className="w-[420px] rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}