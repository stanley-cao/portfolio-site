import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-6 px-6 md:px-16 text-sm text-gray-500 flex flex-col items-center justify-center gap-4 text-center">
      <div>
        <p className="font-medium text-gray-300">Stanley</p>
        <p className="text-gray-500">stanleycao24@gmail.com</p>
        <p>Designer and Developer</p>
      </div>

      <div className="flex gap-6 items-center">
        <a href="mailto:stanleycao24@gmail.com">
          <Image src="/icons/Email.svg" alt="Email" width={40} height={40} />
        </a>
        <a href="https://www.linkedin.com/in/stanley-cao/" target="_blank">
          <Image src="/icons/Linkedin.svg" alt="LinkedIn" width={40} height={40} />
        </a>
        <a href="https://github.com/stanley-cao" target="_blank">
          <Image src="/icons/Github.svg" alt="Github" width={40} height={40} />
        </a>
      </div>
    </footer>
  );
}

{/* border-t border-gray-800 */}