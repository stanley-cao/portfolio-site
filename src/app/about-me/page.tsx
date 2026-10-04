import { education, experience, skills } from "@/lib/experience";

export default function AboutMe() {
    return (
      <main className="min-h-screen text-gray-300 flex flex-col items-center py-5 px-6">
        {/* About Section */}
        <section className="max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-purple-300 mb-8">/about-me</h1>
          <p className="text-sm text-gray-400 mb-10">Who am I?</p>
  
          <div className="space-y-4">
            <p>Hello, I’m Stanley!</p>
            <p>
                I’m an MSc Applied Computing student at the University of Toronto,
                specializing in Artificial Intelligence, and a Software Engineer Intern
                on the travel team at Super.com. I graduated from Western University
                in Computer Science. I enjoy building things and learning about new
                technologies, and I’m passionate about web development, machine learning,
                data analytics, and UI/UX design. In my free time, I love gaming,
                watching anime, and exploring new places.
            </p>
          </div>
        </section>
  
        {/* Education Section */}
        <section className="max-w-4xl w-full mt-10">
          <h2 className="text-2xl font-bold text-purple-300 mb-8">#education</h2>

          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.school} className="border border-gray-600 rounded-lg p-5 hover:border-purple-400 transition">
                <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
                <p className="text-gray-400 text-sm">{edu.degree} | {edu.dates}</p>
                {edu.detail && <p className="text-gray-300 mt-2 text-sm">Coursework: {edu.detail}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-4xl w-full mt-10">
          <h2 className="text-2xl font-bold text-purple-300 mb-8">#recent-experience</h2>

          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.company} className="border border-gray-600 rounded-lg p-5 hover:border-purple-400 transition">
                <h3 className="text-lg font-semibold text-white">
                  {exp.role} – {exp.company}
                </h3>
                <p className="text-gray-400 text-sm">{exp.dates} | {exp.location}</p>
                <p className="text-gray-300 mt-2">{exp.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-4xl w-full mt-10">
          <h2 className="text-2xl font-bold text-purple-300 mb-8">#skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            {skills.map((group) => (
              <div key={group.title} className="border border-gray-600 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">{group.title}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="max-w-4xl w-full mt-10">
          <h2 className="text-2xl font-bold text-purple-300 mb-8">#my-fun-facts</h2>
  
          <div className="flex flex-wrap gap-3">
            {[
              "My favourite season is Summer",
              "I enjoy video gaming in my free time",
              "My favorite food is sushi",
              "I've been to Japan and South Korea",
              "I enjoy being physically active and playing volleyball",
              "I listen to k-pop and pop music",
              "I love watching movies and anime",
            ].map((fact, i) => (
              <span
                key={i}
                className="border border-gray-600 rounded-lg px-3 py-1 text-sm text-gray-300 hover:border-purple-400 transition"
              >
                {fact}
              </span>
            ))}
          </div>
        </section>
      </main>
    );
  }