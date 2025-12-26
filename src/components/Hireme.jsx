import { content } from "../Content";
import { FiSend } from "react-icons/fi"; 

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className=" text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="title text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle text-xl md:text-2xl mb-6" data-aos="fade-down" data-aos-delay="150">
          {Hireme.subtitle}
        </h4>

        <p className="text-gray-200 leading-7 mb-10" data-aos="fade-up" data-aos-delay="300">
          {Hireme.para}
        </p>

        <a href="mailto:olamidealao22@gmail.com" data-aos="zoom-in" data-aos-delay="450">
          <button className="btn flex items-center justify-center gap-2 bg-white text-dark_primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all shadow-lg">
            {Hireme.btnText} <FiSend size={20} />
          </button>
        </a>

        {/* Optional abstract background */}
      </div>
    </section>
  );
};

export default Hireme;
