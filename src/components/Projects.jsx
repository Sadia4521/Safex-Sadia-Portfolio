const projects = [

  {
    title: "SafeX Candidate Management Portal",
    tech: "React • Tailwind CSS",
    description: "Frontend internship project with dashboard modules."
  },

  {
    title: "TenderHub",
    tech: "Software Engineering",
    description: "Tender Management Platform."
  },

  {
    title: "Heart Disease Prediction",
    tech: "Machine Learning",
    description: "Classification model using healthcare dataset."
  },

  {
    title: "Spam Detection System",
    tech: "Machine Learning",
    description: "Spam email detection using classification."
  },

  {
    title: "Travel Website",
    tech: "HTML • CSS • JavaScript",
    description: "Responsive travel landing page."
  },

  {
    title: "Portfolio Website",
    tech: "React",
    description: "Modern personal portfolio."
  }

];

export default function Projects() {

  return (

    <section
      id="projects"
      className="py-24"
    >

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">

          Projects

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project,index)=>(

            <div

              key={index}

              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition"

            >

              <h3 className="text-2xl font-bold">

                {project.title}

              </h3>

              <p className="text-blue-600 mt-3">

                {project.tech}

              </p>

              <p className="mt-5 text-gray-600 leading-7">

                {project.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}