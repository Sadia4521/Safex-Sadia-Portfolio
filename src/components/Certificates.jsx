import {
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

const certificates = [
  {
    title: "Professional Communication & Email Writing",
    issuer: "Training Program",
    year: "2024",
    link: "https://www.linkedin.com/in/sadia-software-engineer/details/certifications/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNABvcXdtRvSYTGE9axYzAQ%3D%3D",
  },
  {
    title: "Frontend Web Development",
    issuer: "Self Learning",
    year: "2025",
    link: "https://www.linkedin.com/in/sadia-software-engineer/details/certifications/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNABvcXdtRvSYTGE9axYzAQ%3D%3D",
  },
  {
    title: "React.js Development",
    issuer: "Self Learning",
    year: "2025",
    link: "https://www.linkedin.com/in/sadia-software-engineer/details/certifications/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNABvcXdtRvSYTGE9axYzAQ%3D%3D",
  },
  {
    title: "SafeX Solutions Frontend Internship",
    issuer: "SafeX Solutions",
    year: "2026",
    link: "https://www.linkedin.com/in/sadia-software-engineer/details/certifications/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNABvcXdtRvSYTGE9axYzAQ%3D%3D",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-20 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((certificate, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <FaCertificate className="text-4xl text-blue-600 mb-5" />

              <h3 className="text-xl font-bold">
                {certificate.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {certificate.issuer}
              </p>

              <p className="text-sm text-gray-400 mt-1">
                {certificate.year}
              </p>

              <a
                href={certificate.link}
                className="inline-flex items-center gap-2 mt-5 text-blue-600 font-semibold hover:text-blue-800"
              >
                View Certificate

                <FaExternalLinkAlt size={12} />
              </a>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}