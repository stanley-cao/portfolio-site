import { FaEnvelope, FaDiscord, FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";

export default function Contacts() {
  return (
    <section className="flex flex-col justify-center items-center px-6 md:px-20 py-12 text-gray-300 ">
      <div className="max-w-4xl w-full text-left space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-purple-400 text-3xl md:text-4xl font-bold mb-1">/contacts</h1>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-gray-300 leading-relaxed text-base md:text-lg">
          I love to build new things and chat with new people. If you have a project,
          idea, or just want to say hi — feel free to reach out! I’ll do my best to respond.
        </p>

        {/* Contact boxes */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Support box 
          <div className="flex-1 border border-gray-700 p-5 rounded-md hover:border-purple-500 transition">
            <h2 className="text-white text-lg md:text-xl font-semibold mb-2">Support me here</h2>
            <p className="text-gray-400 text-sm md:text-base">4159500120690030</p>
          </div>*/}

          {/* Message box */}
          <div className="w-full max-w-md border border-gray-700 p-5 rounded-md hover:border-purple-500 transition">
            <h2 className="text-white text-lg md:text-xl font-semibold mb-2">Message me here</h2>
            <div className="flex flex-col gap-2 text-sm md:text-base">
              <p className="flex items-center gap-2">
                <FaLinkedin className="text-purple-400 text-lg" /> Stanley Cao
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-purple-400 text-lg" /> stanleycao24@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-purple-400 text-xl md:text-2xl font-bold mb-3">#all-media</h3>
          <div className="flex items-center gap-6 text-gray-400 text-2xl">
            <a href="https://github.com/stanleycao24" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/stanleycao24" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              <FaLinkedin />
            </a>
            <a href="mailto:stanleycao24@gmail.com" className="hover:text-purple-400 transition">
              <FaEnvelope />
            </a>
            <a href="https://open.spotify.com/user/1otrs3dn3ctgfhj1bdflj0e6t?si=cb3e7cc875034471" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              <FaSpotify />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}