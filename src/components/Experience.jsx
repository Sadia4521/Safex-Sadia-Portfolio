export default function Experience() {

  const experiences = [

    {

      title:
        "Frontend Development Intern",

      company:
        "SafeX Solutions",

      duration:
        "2026 - Present",

      description:
        "Building responsive React dashboards and contributing to the SafeX Intern Management Portal."

    },

    {

      title:
        "Junior Ecommerce Manager",

      company:
        "Makhdom Rugs",

      duration:
        "2025 - Present",

      description:
        "Managing eCommerce store operations, product listings, inventory updates, order processing, customer support, and optimizing the online shopping experience."
    },

    {

      title:
        "C/C++ Intern",

      company:
        "Codveda Technologies",

      duration:
        "2024",

      description:
        "Worked on C/C++ programming tasks and software development fundamentals."

    }

  ];

  return (

    <section
      id="experience"
      className="py-24 bg-gray-50"
    >

      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-14">

          Experience

        </h2>

        <div className="space-y-8">

          {experiences.map((exp, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8"
            >

              <h3 className="text-2xl font-bold">

                {exp.title}

              </h3>

              <p className="text-blue-600 font-semibold mt-2">

                {exp.company}

              </p>

              <p className="text-gray-500">

                {exp.duration}

              </p>

              <p className="mt-5 text-gray-600 leading-8">

                {exp.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}