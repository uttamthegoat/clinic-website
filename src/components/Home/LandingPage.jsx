/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { orgData } from "../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState({
    technology: false,
    laser: false,
    care: false,
  });

  const toggleAccordion = (key) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const dentalProblems = [
    {
      title: "Teeth Whitening",
      image:
        "https://content.jdmagicbox.com/comp/def_content/default-dentists/default-dentists-1.jpg",
      type: "image",
    },
    {
      title: "Braces Installation",
      icon: "⚙️",
      type: "icon",
      description: [
        "Restore your dental health with advanced techniques and personalized solutions.",
        "Achieve a perfectly aligned smile with comfortable and effective braces.",
        "Boost your confidence with a straighter, healthier smile.",
      ],
    },
    {
      title: "Dental Implants",
      image:
        "https://pvpd.com/wp-content/uploads/2023/02/Different-types-of-braces-are-used-in-orthodontics.jpg",
      type: "image",
    },
    {
      title: "Root Canal Treatment",
      image:
        "https://healthysmilesdentalclinics.com/wp-content/uploads/2023/04/Root-canal-treatment-is-good-or-bad.png",
      type: "image",
    },
    {
      title: "Gum Disease Treatment",
      icon: "🦷",
      type: "icon",
      description: [
        "Prevent and treat gum diseases with our advanced periodontal care.",
        "Maintain healthy gums for a strong foundation for your teeth.",
        "Improve your overall oral health with our comprehensive approach.",
      ],
    },
  ];

  const CustomPrevArrow = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="custom-arrow custom-prev"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const CustomNextArrow = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="custom-arrow custom-next"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Add refs and useInView hooks for each section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const problemsRef = useRef(null);
  const problemsInView = useInView(problemsRef, { once: true });

  const whyChooseRef = useRef(null);
  const whyChooseInView = useInView(whyChooseRef, { once: true });

  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true });

  return (
    <div className="bg-[#FFF5F5]">
      {/* Hero Section with Video Background */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-screen"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={orgData.facilityImages.header} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dentistry with a <span className="text-[#FFB5B5]">smile</span>
            </h1>
            <motion.button
              onClick={() => navigate("/book")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-[#FFB5B5] px-6 py-3 text-white hover:bg-[#ff9b9b]"
            >
              Book an Appointment
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, y: 50 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <h3 className="text-3xl font-bold text-[#FFB5B5] mb-2">600+</h3>
              <p className="text-gray-600">Patients Served</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <h3 className="text-3xl font-bold text-[#FFB5B5] mb-2">10+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <h3 className="text-3xl font-bold text-[#FFB5B5] mb-2">10+</h3>
              <p className="text-gray-600">Services Offered</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <h3 className="text-3xl font-bold text-[#FFB5B5] mb-2">100%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Common Dental Problems */}
      <motion.section
        ref={problemsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={problemsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-12 md:px-8 md:py-20"
        id="common-dental-problems"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services <span className="text-[#FFB5B5]">We Provide</span>
          </h2>
          <p className="text-gray-600 mb-12">
            Bringing <span className="text-[#FFB5B5]">confidence</span>, one
            smile at a time.
          </p>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper"
            >
              {dentalProblems.map((problem, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg h-[400px] relative"
                  >
                    {problem.type === "image" ? (
                      <>
                        <img
                          loading="lazy"
                          src={problem.image}
                          alt={problem.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                          <h3 className="text-2xl font-semibold mb-2 text-center text-white">
                            {problem.title}
                          </h3>
                        </div>
                        <motion.a
                          href="#"
                          whileHover={{ scale: 1.05 }}
                          className="text-[#FFB5B5] hover:underline absolute bottom-6 left-6"
                        >
                          Learn More
                        </motion.a>
                      </>
                    ) : (
                      <div className="bg-[#FFF0F0] h-full p-6 flex flex-col items-center justify-center text-center">
                        <div className="bg-[#4A2B29] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                          <span className="text-white text-3xl">
                            {problem.icon}
                          </span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">
                          {problem.title}
                        </h3>
                        <ul className="space-y-2 mb-6">
                          {problem.description.map((item, idx) => (
                            <li key={idx} className="text-sm">
                              • {item}
                            </li>
                          ))}
                        </ul>
                        <motion.a
                          href="#"
                          whileHover={{ scale: 1.05 }}
                          className="text-[#FFB5B5] hover:underline absolute bottom-6 left-6"
                        >
                          Learn More
                        </motion.a>
                      </div>
                    )}
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer ml-4">
              <CustomPrevArrow />
            </div>
            <div className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer mr-4">
              <CustomNextArrow />
            </div>
          </div>
        </div>
        <style jsx global>{`
          .swiper-pagination-bullet {
            background-color: #ffb5b5;
          }
          .swiper-pagination-bullet-active {
            background-color: #ff9b9b;
          }
          .custom-arrow {
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease;
          }
          .custom-arrow:hover {
            background-color: rgba(255, 255, 255, 1);
          }
        `}</style>
      </motion.section>

      {/* Why Choose Section */}
      <motion.section
        ref={whyChooseRef}
        initial={{ opacity: 0, y: 50 }}
        animate={whyChooseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-12 md:px-8 md:py-20 bg-white"
        id="why-choose-us"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why choose{" "}
                <span className="text-[#FFB5B5]">{orgData.name}</span>
              </h2>

              {/* Accordion Items */}
              <div className="space-y-4">
                {/* Advanced Technology */}
                <div className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleAccordion("technology")}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <span className="text-lg font-semibold">
                      Professional Expertise
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen.technology ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen.technology && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-600 mt-2">
                          Your care is our priority, which is why all treatments
                          are exclusively handled by highly qualified MDS
                          specialists. With their advanced expertise, you can
                          trust that you’re receiving the highest standard of
                          professional dental care. Your smile deserves nothing
                          less than the best!
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Laser Dentistry */}
                <div className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleAccordion("laser")}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <span className="text-lg font-semibold">
                      Advanced Technology
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen.laser ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen.laser && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-600 mt-2">
                          Our clinic is outfitted with cutting-edge dental
                          technology to ensure precise and efficient treatments.
                          With the support of cutting-edge dental technology, we
                          deliver precise, effective, and comfortable
                          treatments. We stay at the forefront of advancements
                          in dental care to provide the highest level of comfort
                          and results.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Comprehensive Care */}
                <div className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleAccordion("care")}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <span className="text-lg font-semibold">
                      Comprehensive Care
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen.care ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen.care && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-600 mt-2">
                          Each treatment plan is tailored to meet your unique
                          needs, ensuring personalized care and optimal
                          outcomes. Our commitment to excellence ensures you
                          receive the best care at every step of your dental
                          journey.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 relative"
            >
              <img
                loading="lazy"
                src={orgData.facilityImages.facility2}
                alt="Dental Care"
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Doctor Profile Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-16 md:py-24 bg-white"
        id="doctors"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/3"
            >
              <div className="relative">
                <img
                  src={orgData.doctorImages.jayShree}
                  alt="Dr. Jayshree Hegde Anil"
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#FFB5B5] rounded-lg p-4 shadow-lg">
                  <p className="text-white font-semibold">25+ Years Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:w-2/3"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet <span className="text-[#FFB5B5]">Dr. Jayshree Hegde Anil</span>
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Dr. Jayshree Hegde Anil is an accomplished dentist with over 25 years of experience in Conservative Dentistry and Endodontics. She holds a BDS degree from the Government Dental College, Bangalore, and an MDS degree specializing in Conservative Dentistry & Endodontics.
                </p>
                
                <p>
                  Starting her academic career in 1996 at The Oxford Dental College, Bangalore, she rose to become the Head of Conservative Dentistry and Endodontics in 2009. Her impressive portfolio includes over 30 published articles and leadership of 48 research projects. In 2013, she transitioned to clinical practice as Clinical Director at Ridgetop Dental International, before establishing Jaysmiles in 2024.
                </p>

                <p>
                  As a key opinion leader for major international dental companies, she has delivered over 300 lectures globally and authored two textbooks on Endodontics. Her expertise in microscopic endodontics and restorative dentistry is recognized through her Diplomate status and her role in training numerous clinicians.
                </p>

                <div className="border-l-4 border-[#FFB5B5] pl-4 mt-6">
                  <p className="italic">
                    "Throughout my career, I've remained passionate about providing the highest level of care in tooth-colored restorations, crown and bridge work, full mouth rehabilitation, and microscopic endodontics."
                  </p>
                </div>
              </div>

              <motion.button
                onClick={() => navigate("/book")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 rounded-full bg-[#FFB5B5] px-8 py-3 text-white hover:bg-[#ff9b9b] transition-colors"
              >
                Book an Appointment
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
