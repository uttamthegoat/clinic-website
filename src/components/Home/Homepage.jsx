/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { orgData, blogData } from "../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./InfoComponent.css";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

export default function LandingPage() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState({
    technology: false,
    laser: false,
    care: false,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);

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

  const renderCustomPagination = () => {
    const totalSlides = orgData.testimonials.length;
    const bullets = [];

    // Calculate start and end indices for visible bullets
    let start = Math.max(0, activeIndex - 3);
    let end = Math.min(totalSlides - 1, activeIndex + 3);

    // Adjust start and end to always show 7 bullets if possible
    if (end - start < 6) {
      if (start === 0) {
        end = Math.min(6, totalSlides - 1);
      } else if (end === totalSlides - 1) {
        start = Math.max(0, totalSlides - 7);
      }
    }

    for (let i = start; i <= end; i++) {
      bullets.push(
        <span
          key={i}
          className={`cursor-pointer w-2 h-2 rounded-full mx-1 transition-all duration-300
            ${
              i === activeIndex
                ? "bg-[#FFB5B5] scale-125"
                : "bg-[#FFB5B5] opacity-50"
            }`}
          onClick={() => {
            swiperRef.current.swiper.slideTo(i);
          }}
        />
      );
    }

    return bullets;
  };

  // Add refs and useInView hooks for each section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const problemsRef = useRef(null);
  const problemsInView = useInView(problemsRef, { once: true });

  const whyChooseRef = useRef(null);
  const whyChooseInView = useInView(whyChooseRef, { once: true });

  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true });

  const workSteps = [
    "Consultation",
    "Care Implementation",
    "Customized care plan",
  ];

  return (
    <>
      {/* Top Banner Section */}
      <div className="w-full relative z-50 mt-[100px]">
        {/* Pink Announcement Banner */}
        <div className="w-full bg-[#FF69B4] py-2 px-4 text-white text-center">
          <p className="text-sm md:text-base font-medium">
          Now opened at Indira Nagar, 100 feet road. Accepting new Patients!
          </p>
        </div>
        
        {/* Dark Gray Navigation Bar */}
        <div className="w-full bg-[#4A4A4A] text-white px-4 py-3">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Phone Number */}
            <div className="flex items-center gap-2">
              <a href="tel:972-346-1100" className="flex items-center gap-2 hover:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                972-346-1100
              </a>
            </div>

            {/* Book Appointment Button */}
            <button
              onClick={() => navigate("/book")}
              className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-[#4A4A4A] transition-colors text-sm uppercase tracking-wider"
            >
              Book Appointment Online
            </button>
          </div>
        </div>
      </div>

      {/* Rest of your existing code starts here */}
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

        {/* Meet our Founder Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-4 py-16 md:py-24 bg-gradient-to-b from-white to-[#FFF5F5]"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Meet our <span className="text-[#FFB5B5]">Founder</span>
              </h2>
              <div className="w-24 h-1 bg-[#FFB5B5] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#FFB5B5]"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#FFB5B5]"></div>
                  <img
                    src={orgData.doctorImages.JayShree}
                    alt="Dr. Jayshree Hegde Anil"
                    className="w-full rounded-2xl shadow-2xl relative z-10"
                  />
                  <div className="absolute -bottom-6 right-6 bg-white py-2 px-4 rounded-lg shadow-xl z-20">
                    <p className="text-[#FFB5B5] font-semibold">25+ Years Experience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Dr. Jayshree Hegde Anil
                  </h3>
                  <p className="text-[#FFB5B5] font-medium text-lg">
                    Conservative Dentistry & Endodontics Specialist
                  </p>
                  
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Dr. Jayshree Hegde Anil is an accomplished dentist with over 25 years of experience in the field of Conservative Dentistry and Endodontics. She has a BDS degree from the Government Dental College, Bangalore, and an MDS degree with specialization in Conservative Dentistry & Endodontics.
                    </p>
                    
                    <p>
                      Dr. Hegde Anil Started her academic career in 1996, in the department of Conservative Dentistry and Endodontics at The Oxford Dental College, Bangalore. She was promoted to be the Head of her department in 2009. During this time, she published over 30 articles and led 48 research projects. In 2013, she transitioned to clinical practice as the Clinical Director at Ridgetop Dental International, Bangalore, before founding her own practice, Jaysmiles, in 2024.
                    </p>

                    <div className="grid grid-cols-2 gap-4 my-6">
                      <div className="text-center p-4 bg-white rounded-lg shadow-md">
                        <p className="text-[#FFB5B5] text-2xl font-bold">300+</p>
                        <p className="text-sm text-gray-600">Global Lectures</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-md">
                        <p className="text-[#FFB5B5] text-2xl font-bold">2</p>
                        <p className="text-sm text-gray-600">Published Books</p>
                      </div>
                    </div>

                    <p>
                      Dr. Hegde Anil is a key opinion leader for two major international dental companies and has delivered over 300 lectures globally. She is the author of two textbooks on Endodontics, published in 2007 and 2020. She holds a Diplomate in Microscopic Endodontics and Restorative Dentistry and has trained many clinicians in these advanced techniques.
                    </p>

                    <p>
                      Throughout her career, Dr. Hegde Anil has gained extensive hands-on knowledge and experience across various areas of dentistry, including tooth-colored restorations, crown and bridge work, full mouth rehabilitation, and microscopic endodontics.
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/book")}
                  className="bg-[#FFB5B5] text-white px-8 py-3 rounded-full hover:bg-[#ff9b9b] transition-colors mt-8 flex items-center gap-2"
                >
                  Book an Appointment
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          ref={featuresRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
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

        {/* Team Section */}
        <div>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 py-16 md:px-8"
            id="doctors"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Meet our dedicated <span className="text-[#FFB5B5]">team</span>
              </h2>
              {/* Regular team members */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {orgData.teamMembers.slice(0, -1).map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <TeamMemberCard member={member} />
                  </motion.div>
                ))}
              </div>

              {/* Our Team section in new row */}
              <div className="mt-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <TeamCard
                    member={orgData.teamMembers[orgData.teamMembers.length - 1]}
                    showDescription={true}
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Common Dental Problems */}
        <motion.section
          ref={problemsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            problemsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
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
          animate={
            whyChooseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
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
                      <p className="text-gray-600">
                        <span className="text-lg font-semibold block">
                          Advanced Technology
                        </span>
                        Using cutting edge dental technology for optimal
                        results.
                      </p>
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
                            Our dental practice utilizes advanced technology to
                            provide the highest level of care. From digital
                            X-rays and 3D imaging to laser treatments and
                            same-day crowns, we use the latest tools to enhance
                            accuracy, reduce discomfort, and speed up your
                            treatment. With these innovations, we ensure more
                            precise diagnoses, faster recovery times, and a more
                            comfortable experience for every patient.
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
                      <p className="text-gray-600">
                        <span className="text-lg font-semibold block">
                          Laser Dentistry
                        </span>
                        Precise and comfortable treatment using laser
                        technology.
                      </p>
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
                            We use state-of-the-art dental lasers to perform
                            your procedures and provide you with higher-quality
                            care. Our lasers help us ensure that your care is
                            faster and more comfortable as well as less
                            invasive. Lasers also help speed up the healing
                            process in restorative procedures such as root
                            canals so that you can return to your regular
                            activities sooner.
                          </p>
                          <ul className="list-disc list-inside text-gray-600 ps-2">
                            <li>Crown Lengthening</li>
                            <li>Frenectomy</li>
                            <li>LANAP® Laser Gum Treatment</li>
                            <li>NightLase®, SnoreLase & Smoothlase™</li>
                          </ul>
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
                      <p className="text-gray-600">
                        <span className="text-lg font-semibold block">
                          Comprehensive Care
                        </span>
                        Complete dental care under one roof.
                      </p>
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
                            At our dental office, we provide complete dental
                            care under one roof. Prioritizing kindness,
                            compassion, and your well-being, we provide
                            personalized care in a comfortable, stress-free
                            environment and only recommend treatments that are
                            essential for your dental health. Our goal is to
                            build trust and ensure you receive the right care,
                            with no unnecessary procedures or upselling—just
                            honest, high-quality dentistry tailored to your
                            needs.
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
      </div>
      {/* 2nd section */}
      <div className="bg-white">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                We care
              </h1>
              <p className="text-gray-600 mb-8">
                Transform your smile with a customized Smile Makeover at our
                dental office! Whether you&apos;re looking to brighten your
                teeth, correct imperfections, or achieve a completely new look,
                we offer a range of advanced treatments designed to enhance your
                smile and boost your confidence. Our experienced team uses the
                latest techniques in cosmetic dentistry, including teeth
                whitening, veneers, crowns, and Invisalign, to create a smile
                that&apos;s both beautiful and natural.
                <br />
                We&apos;ll work closely with you to understand your goals and
                design a personalized plan that fits your unique needs. With a
                Smile Makeover, you can achieve the radiant, flawless smile
                you&apos;ve always dreamed of—comfortable, affordable, and
                tailored just for you. Let us help you put your best smile
                forward! Schedule your consultation today.
              </p>
              <Link
                to="/book"
                className="bg-white text-[#FFB5B5] border-2 border-[#FFB5B5] rounded-full px-8 py-3 hover:bg-[#FFB5B5] hover:text-white transition-colors duration-300 text-xl font-semibold"
              >
                Book an Appointment
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                loading="lazy"
                src="https://www.shutterstock.com/image-photo/happy-black-man-checks-cell-600nw-2225948601.jpg"
                alt="Dental Care"
                className="rounded-full w-full max-w-md mx-auto"
              />
              {/* <div className="absolute -top-4 right-1/4 bg-white rounded-full p-2 shadow-lg">
        <span className="text-2xl font-bold">6</span>
      </div>
      <div className="absolute top-1/4 -right-4 bg-white rounded-full p-2 shadow-lg">
        <span className="text-sm font-bold">Book</span>
      </div>
      <div className="absolute bottom-1/4 -left-4 bg-white rounded-full p-2 shadow-lg">
        <span className="text-sm font-bold">Pay</span>
      </div> */}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-yellow-400 rounded-full aspect-square flex items-center justify-center p-12"
            >
              <img
                src="https://tottondental.co.uk/wp-content/uploads/2021/04/Vacuum-Formed-Retainer1.jpg"
                alt="Invisalign"
                className="w-1/2"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We offer a wide array of services
                <br />
                from Invisalign to veneers
              </h2>
              <p className="text-gray-600 mb-8">
                At {orgData.name}, we prioritize your oral health with
                personalized, cutting-edge care.
              </p>
              <Link
                to="/services"
                className="bg-white text-[#FFB5B5] border-2 border-[#FFB5B5] rounded-full px-8 py-3 hover:bg-[#FFB5B5] hover:text-white transition-colors duration-300 text-xl font-semibold"
              >
                Checkout our Services
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFF5F5] py-16 px-4 sm:px-6 lg:px-8 my-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Exceptional Dental Care
            </h2>
            <p className="text-gray-600 mb-8">
              At Jay Smiles, we&apos;re dedicated to delivering compassionate
              and personalized dental care for you and your loved ones.
              Experience our commitment to your oral health today.
            </p>
            <Link
              to="/book"
              className="bg-[#FFB5B5] text-white rounded-full px-8 py-3 hover:bg-[#ff9b9b] transition-colors duration-300"
            >
              Get started
            </Link>
          </div>
        </motion.section>

        {/* About Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={orgData.facilityImages.facility1}
                alt="Dental Staff 1"
                className="rounded-2xl w-full"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbq1LRx2Q9367z14M4pAlDVpdghQJ2TAV6IQ&s"
                alt="Dental Staff 2"
                className="rounded-2xl w-full mt-8"
              />
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-4">
                <span className="text-2xl font-bold">10+</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-[#FFB5B5]">About</span> {orgData.name}
              </h2>
              <p className="text-gray-600 mb-8">
                At <span className="font-bold">{orgData.name}</span>, we are
                passionate about delivering exceptional dental care with a focus
                on compassion and expertise. Our dedicated team is committed to
                patient-centered treatment, ensuring that every individual
                receives personalized care tailored to their specific needs. We
                strive to create a welcoming environment where your comfort and
                health are our top priorities.
              </p>
              <Link
                to="/about"
                className="bg-[#FFB5B5] text-white rounded-full px-8 py-3 hover:bg-[#ff9b9b] transition-colors duration-300"
              >
                Learn more
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Blog Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 py-[80px] sm:px-6 lg:px-8"
          id="blogs"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-[#FFB5B5]">Discover</span> blog insights
            </h2>
            <Link
              to="/blog"
              className="bg-[#FFB5B5] text-white rounded-full px-6 py-2 hover:bg-[#ff9b9b] transition-colors duration-300"
            >
              View all Blogs
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative md:p-12"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              className="py-8 px-4"
            >
              {blogData.map((item) => (
                <SwiperSlide key={item.id} className="py-3 px-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg group h-full bg-white">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={`Blog ${item.id}`}
                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <Link
                        to={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 bg-black rounded-full px-2 py-1 shadow-md transition-colors duration-300"
                      >
                        <span className="text-xl">
                          <FontAwesomeIcon
                            icon={faExternalLink}
                            className="text-white invert"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.section>
      </div>
      {/* 3rd section */}
      <div className="min-h-screen bg-[#ffffff]">
        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-4 py-16 md:px-8"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What our clients say
            </h2>
            <div className="relative bg-white rounded-xl p-6 shadow-lg">
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="testimonial-swiper"
              >
                {orgData.testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="p-4">
                      <div className="flex items-center mb-4">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-[#FFB5B5]"
                              fill="#FFB5B5"
                            />
                          ))}
                      </div>
                      <p className="text-gray-600 mb-4 md:p-14">
                        {testimonial.review}
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <p className="font-medium">{testimonial.name}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex justify-center items-center mt-4 space-x-2">
                {renderCustomPagination()}
              </div>
            </div>
          </div>
          <style jsx global>{`
            .testimonial-swiper .swiper-button-next,
            .testimonial-swiper .swiper-button-prev {
              color: #ffb5b5;
            }

            /* Mobile styles */
            @media (max-width: 768px) {
              .testimonial-swiper .swiper-button-next,
              .testimonial-swiper .swiper-button-prev {
                display: none; /* Hides arrows completely on mobile */
              }
            }
          `}</style>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-4 py-16 md:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {orgData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-[#FFB5B5] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact and Work Process Section */}
        <section className="px-4 py-16 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">
                Let us <span className="text-[#FFB5B5]">Help You</span>
              </h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFB5B5]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Contact number"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFB5B5]"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Description"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFB5B5]"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#FFB5B5] text-white py-2 rounded-lg hover:bg-[#ff9b9b] transition-colors"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>

            {/* Work Process */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">
                How we <span className="text-[#FFB5B5]">work</span>
              </h2>
              <div className="space-y-4">
                {workSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-1 h-8 bg-[#FFB5B5] rounded-full" />
                    <p className="text-lg">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-4 py-16 md:px-8 text-center"
        >
          <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Community of Smiles
            </h2>
            <p className="text-gray-600 mb-8">
              At {orgData.name}, we&apos;re here to help you achieve the smile
              you&apos;ve always wanted. Experience our attention to
              compassionate and expert care today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFB5B5] text-white px-8 py-3 rounded-full hover:bg-[#ff9b9b] transition-colors"
            >
              Get started
            </motion.button>
          </div>
        </motion.section>

        {/* Clinic Location */}
        <section className="px-4 py-16 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-8 text-[#4A2B29]"
            >
              Visit our <span className="text-[#FFB5B5]">Clinic</span>
            </motion.h2>

            <div className="flex flex-col gap-6 md:relative mb-20">
              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden h-[300px] md:h-[500px]"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${orgData.facilityImages.facility3})`,
                  }}
                />
              </motion.div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative md:absolute md:right-8 md:top-[20%] md:-translate-y-1/2 bg-white rounded-3xl p-8 w-full md:w-auto md:max-w-md shadow-lg"
              >
                <h3 className="text-2xl text-[#FFB5B5] font-medium mb-4">
                  {orgData.city},{" "}
                  <span className="text-[#4A2B29]">{orgData.state}</span>
                </h3>

                {/* <p className="text-gray-600 mb-8">
                {orgData.description}
              </p> */}

                <div className="space-y-3 text-[#4A2B29]">
                  <div className="flex items-start">
                    <span className="block">
                      {orgData.address}
                      <br />
                      {orgData.area}
                    </span>
                  </div>
                  <p>{orgData.phone}</p>
                  <p>{orgData.email}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const ImageWithDynamicClass = ({ src, alt }) => {
  const [isWider, setIsWider] = useState(false);
  const imgRef = useRef(null);

  const handleLoad = () => {
    if (imgRef.current) {
      setIsWider(imgRef.current.naturalWidth > imgRef.current.naturalHeight);
    }
  };

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onLoad={handleLoad}
      className={
        isWider ? "w-full h-auto" : "h-full w-auto block mx-auto rounded-lg"
      }
    />
  );
};

const TeamCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="text-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[500px] md:h-[550px]  rounded-lg">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-auto block mx-auto"
        />
      </div>
      <p className="font-medium mt-3">{member.name}</p>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -270, scale: 0.95 }}
            animate={{ opacity: 1, y: -270, scale: 1 }}
            exit={{ opacity: 0, y: -270, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 left-[10%] md:left-3/4 transform -translate-x-1/2 mt-2 h-9/12 bg-[#fff0f0] rounded-lg shadow-xl p-4"
          >
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
              <div className="mb-2">
                <p className="font-medium mb-1">Specializations:</p>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {member.description.map((spec, index) => (
                    <li key={index} className="mb-1">
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TeamMemberCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="text-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-60 w-60 md:h-56 md:w-56 mx-auto overflow-hidden rounded-lg">
        <ImageWithDynamicClass src={member.image} alt={member.name} />
      </div>
      <p className="font-medium mt-3">{member.name}</p>
      <p className="text-gray-600 text-sm">{member.role}</p>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -270, scale: 0.95 }}
            animate={{ opacity: 1, y: -270, scale: 1 }}
            exit={{ opacity: 0, y: -270, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 left-[10%] md:left-3/4 transform -translate-x-1/2 mt-2 w-72 bg-[#fff0f0] rounded-lg shadow-xl p-4"
          >
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-600 mb-2">
                Experience: {member.experience}
              </p>
              <div className="mb-2">
                <p className="font-medium mb-1">Specializations:</p>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {member.Specialization.map((spec, index) => (
                    <li key={index} className="mb-1">
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
