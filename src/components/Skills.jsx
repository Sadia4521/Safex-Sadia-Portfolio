export default function Skills() {

  const skills = [

    "HTML",

    "CSS",

    "JavaScript",

    "React",

    "Tailwind CSS",

    "Python",

    "SQL",

    "Git",

    "GitHub",

    "VS Code",

    "Figma",

    "C++"

  ];

  return (

    <section
      id="skills"
      className="py-24"
    >

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-14">

          Skills

        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {skills.map((skill) => (

            <div
              key={skill}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition"
            >

              <h3 className="font-semibold">

                {skill}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}