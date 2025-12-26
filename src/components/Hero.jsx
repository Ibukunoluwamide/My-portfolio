import { content } from "../Content";
import { FiArrowRight, FiMail } from "react-icons/fi";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">

        {/* Rotated Name Background */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA] text-4xl md:text-5xl font-bold">
            {hero.firstName} <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* Left Column: Text + CTA + Stats */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            {hero.title}
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-gray-600 max-w-xl">
            Build modern, scalable web applications and backend systems using
            Laravel, React, Node.js, MongoDB, and MySQL.
          </p>


{/* CTA Buttons */}
<div className="flex flex-col md:flex-row justify-start md:justify-between mt-6 gap-4">
  {/* View Projects Button */}
  <a href="#projects">
    <button className="btn flex items-center gap-2 px-6 py-3 bg-[#81a7ee] text-white rounded-xl shadow-lg hover:bg-[#187bcd] hover:scale-105 transition-all">
      View Projects <FiArrowRight size={20} />
    </button>
  </a>

  {/* Contact Me Button */}
  <a href="mailto:olamidealao22@gmail.com">
    <button className="btn flex items-center gap-2  px-6 py-3 rounded-xl shadow-lg  hover:scale-105 transition-all">
      Contact Me <FiMail size={20} />
    </button>
  </a>
</div>


          {/* Stats / Achievements */}
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((item, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5 ${i === 1 && "flex-row-reverse text-right"}`}
              >
                <h3 className="text-2xl font-bold text-primary">{item.count}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="md:h-[37rem] h-96 flex justify-center items-center">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="Olamide Portfolio Hero"
            className="h-full md:h-[37rem] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
