import Image from "next/image";
import { projects } from "@/lib/projects";

export default function WorksPage() {
  return (
    <main className="px-6 md:px-12 py-10 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
          /projects
        </h1>
        <p className="text-gray-400 mb-8">List of my projects</p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-300 mb-4">
          #complete-projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-md overflow-hidden bg-[#121212] hover:border-purple-600 transition"
            >
              {proj.image && (
                <div className="relative aspect-[5/3] w-full overflow-hidden bg-[#111]">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              <div className="p-2.5 md:p-3 flex flex-col gap-1">
                <p className="text-[10px] text-purple-400 uppercase tracking-wide">
                  {proj.tech.join(" • ")}
                </p>

                <h3 className="text-sm md:text-base font-semibold text-gray-100">
                  {proj.title}
                </h3>

                <p className="text-gray-400 text-xs leading-snug">
                  {proj.description}
                </p>

                <div className="flex gap-1.5 mt-2">
                  {proj.liveURL && (
                    <a
                      href={proj.liveURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] border border-purple-500 px-2 py-0.5 rounded hover:bg-purple-500 hover:text-black transition"
                    >
                      Live ↗
                    </a>
                  )}
                  {proj.githubURL && (
                    <a
                      href={proj.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] border border-purple-500 px-2 py-0.5 rounded hover:bg-purple-500 hover:text-black transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}