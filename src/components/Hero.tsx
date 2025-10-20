import AsciiArt from "@/components/AsciiArt";

export default function Hero() {
    return (
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-16 py-16 md:py-10"
      >
        {/* Left side */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            <span className="text-gray-300 block">Stanley Cao</span>
            <span className="text-purple-400">designer,</span>
            <span className="text-purple-400"> developer,</span> and{" "}
            <span className="text-purple-400">foodie.</span>
          </h1>
  
          <p className="text-gray-400 mb-8">
            I am a Computer Science student currently seeking new graduate opportunities in Software Engineering.
            I love building (and occasionally designing) fun digital experiences.
          </p>
  
          <a 
            href="/StanleyCao_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-purple-500 px-6 py-2 text-purple-400 hover:bg-purple-500 hover:text-black transition"> 
            Resume
          </a>
        </div>
  
        {/* Right side */}
        <AsciiArt />
      </section>
    );
  }