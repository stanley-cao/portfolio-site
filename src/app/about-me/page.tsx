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
                I’m a Computer Science student from Western University. I
                enjoy building things and learning about new technologies.
                I’m passionate about web development, data analytics, and UI/UX
                design. In my free time, I love gaming, watching anime, and
                exploring new places.
            </p>
          </div>
        </section>
  
        {/* Experience Section */}
        <section className="max-w-4xl w-full mt-10">
        <h2 className="text-2xl font-bold text-purple-300 mb-8">#recent-experience</h2>

        <div className="space-y-6">
            <div className="border border-gray-600 rounded-lg p-5 hover:border-purple-400 transition">
            <h3 className="text-lg font-semibold text-white">
                Software Engineer Intern – Western University (Earth Sciences)
            </h3>
            <p className="text-gray-400 text-sm">May 2025 – Aug 2025 | London, ON</p>
            <p className="text-gray-300 mt-2">
                Built responsive web pages and dynamic components using Angular and PostgreSQL.
            </p>
            </div>

            <div className="border border-gray-600 rounded-lg p-5 hover:border-purple-400 transition">
            <h3 className="text-lg font-semibold text-white">
                Software Engineer Intern – Wouessi Inc
            </h3>
            <p className="text-gray-400 text-sm">Feb 2025 – Apr 2025 | Toronto, ON</p>
            <p className="text-gray-300 mt-2">
                Developed reusable React components and improved interactive data displays.
            </p>
            </div>

            <div className="border border-gray-600 rounded-lg p-5 hover:border-purple-400 transition">
            <h3 className="text-lg font-semibold text-white">
                Data Analyst Intern – Johnson & Johnson
            </h3>
            <p className="text-gray-400 text-sm">May 2024 – Aug 2024 | Toronto, ON</p>
            <p className="text-gray-300 mt-2">
                Automated Tableau dashboards and built Python models for data analytics.
            </p>
            </div>

            <div className="border border-gray-600 rounded-lg p-5 hover:border-purple-400 transition">
            <h3 className="text-lg font-semibold text-white">
                Software Engineer Intern – Prabbis Consulting
            </h3>
            <p className="text-gray-400 text-sm">Mar 2024 – May 2024 | Halifax, NS</p>
            <p className="text-gray-300 mt-2">
                Migrated core pages to Next.js, improving site performance and accessibility.
            </p>
            </div>
        </div>
        </section>
        
        {/* Skills Section */}
        <section className="max-w-4xl w-full mt-10">
        <h2 className="text-2xl font-bold text-purple-300 mb-8">#skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="border border-gray-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Languages</h3>
            <p>Python, Java, C/C++, JavaScript, TypeScript, HTML, CSS</p>
            </div>

            <div className="border border-gray-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Frameworks & Libraries</h3>
            <p>React, Next.js, Angular, Node.js, Prisma</p>
            </div>

            <div className="border border-gray-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Databases</h3>
            <p>PostgreSQL, SQL</p>
            </div>

            <div className="border border-gray-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Tools & Platforms</h3>
            <p>Git, Docker, Heroku, Figma, Tableau</p>
            </div>

            <div className="border border-gray-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Concepts & Methodologies</h3>
            <p>Agile Development, CI/CD, UI/UX Design</p>
            </div>

            <div className="border border-gray-600 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">Other</h3>
            <p>Systems Programming, Object-Oriented Design, Data Visualization</p>
            </div>
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