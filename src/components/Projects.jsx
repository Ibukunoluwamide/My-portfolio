import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;

  return (
    <section id="projects" className="bg-bg_light_primary py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <p
            className="subtitle max-w-2xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {Projects.subtitle}
          </p>
        </div>

        {/* PROJECT SLIDER */}
        <Swiper
          spaceBetween={60}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="pb-20"
        >
          {Projects.project_content.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 min-h-[420px]">

                {/* MEDIA AREA */}
                <div className="relative">
                  {/* MEDIA COUNT */}
                  <span className="absolute top-4 left-4 z-10 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {project.media.length} Media
                  </span>

                  {/* SWIPE HINT */}
                  <span className="absolute bottom-4 right-4 z-10 bg-white/80 text-xs px-3 py-1 rounded-full">
                    Swipe →
                  </span>

                  <Swiper
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="w-full h-[280px] md:h-[420px]"
                  >
                    {project.media.map((media, idx) => (
                      <SwiperSlide key={idx}>
                        {media.type === "image" ? (
                          <img
                            src={media.src}
                            alt={project.title}
                            className="w-full h-full"
                          />
                        ) : (
                          <video
                            src={media.src}
                            controls
                            muted
                            playsInline
                            className="w-full h-full bg-black"
                          />
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* CONTENT */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description.split("\n").map((line, idx) => (
                        <span key={idx} className={line.includes("Email") ? "font-bold" : ""}>
                          {line}<br />
                        </span>
                      ))}                    </p>

                    {/* STACK */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm rounded-full bg-bg_light_primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn px-6 py-3"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
