import Image from "next/image";
import { projects } from "@/lib/projects";

export default function WorksPage() {
  return (
    <main className="px-6 md:px-16 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
        /projects
      </h1>
      <p className="text-gray-400 mb-10">List of my projects</p>

      <h2 className="text-xl font-semibold text-gray-300 mb-6">#complete-projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-md overflow-hidden bg-[#121212] hover:shadow-lg hover:border-purple-600 transition"
          >
            {proj.image && (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-[#111]">
                <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-contain"
                />
                </div>
            )}

            <div className="p-4 flex flex-col gap-2">
              <p className="text-xs text-purple-400 uppercase">
                {proj.tech.join(" • ")}
              </p>

              <h3 className="text-lg font-semibold text-gray-100">
                {proj.title}
              </h3>

              <p className="text-gray-400 text-sm">{proj.description}</p>

              <div className="flex gap-3 mt-3">
                {proj.liveURL && (
                  <a
                    href={proj.liveURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm border border-purple-500 px-3 py-1 rounded hover:bg-purple-500 hover:text-black transition"
                  >
                    Live ↗
                  </a>
                )}
                {proj.githubURL && (
                  <a
                    href={proj.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm border border-purple-500 px-3 py-1 rounded hover:bg-purple-500 hover:text-black transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}