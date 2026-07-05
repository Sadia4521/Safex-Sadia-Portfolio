export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold text-blue-600">
          Sadia
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">

          <li><a href="#about">About</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#experience">Experience</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

      </div>

    </nav>
  );
}