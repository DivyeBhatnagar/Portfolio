import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  github?: string;
  tech?: readonly string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  github,
  tech,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg border border-[#7042f833] bg-[#0c0728]/60 backdrop-blur-md transition-all duration-300 hover:border-[#7042f88b] hover:shadow-[0_0_20px_rgba(112,66,248,0.2)] hover:-translate-y-2 flex flex-col h-full">
      <div className="w-full relative overflow-hidden group">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0728] to-transparent opacity-80" />
      </div>

      <div className="relative p-6 flex flex-col flex-1">
        <h1 className="text-2xl font-bold text-white mb-3">{title}</h1>
        <p className="mt-2 text-gray-300 leading-relaxed flex-1">{description}</p>

        {tech && (
          <div className="flex flex-wrap gap-2 mt-4 mb-6">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/20 text-cyan-300 border border-purple-500/30"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 mt-auto">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub className="h-5 w-5" /> Source
            </Link>
          )}
          {link && link !== "#" && (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
            >
              <FaExternalLinkAlt className="h-4 w-4" /> Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
