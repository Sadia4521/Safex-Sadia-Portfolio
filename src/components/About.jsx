export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-14">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-3xl font-semibold mb-6">
              Software Engineer &
              Frontend Developer
            </h3>

            <p className="text-gray-600 leading-8 mb-6">

              I'm Sadia, a Software Engineering
              student passionate about building modern,
              responsive and user-friendly web applications.

            </p>

            <p className="text-gray-600 leading-8">

              I enjoy solving real-world problems using
              React, JavaScript, AI, and modern web
              technologies. Currently, I am working as a
              Frontend Development Intern at SafeX Solutions.

            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="space-y-5">

              <div className="flex justify-between">
                <span className="font-semibold">
                  Name
                </span>

                <span>
                    Sadia
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">
                  Degree
                </span>

                <span>
                  BS Software Engineering
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">
                  University
                </span>

                <span>
                  NUML Islamabad
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">
                  Country
                </span>

                <span>
                  Pakistan
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">
                  Email
                </span>

                <span>
                  sadia672005@gmail.com
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}