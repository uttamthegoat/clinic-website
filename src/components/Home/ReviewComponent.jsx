/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useRef } from "react";
import { orgData } from "../../assets/data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const workSteps = [
  "Consultation",
  "Care Implementation",
  "Customized care plan",
];

export default function ReviewComponent() {
  const { teamMembers, testimonials, stats } = orgData;
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCustomPagination = () => {
    const totalSlides = testimonials.length;
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
            ${i === activeIndex ? 'bg-[#FFB5B5] scale-125' : 'bg-[#FFB5B5] opacity-50'}`}
          onClick={() => {
            swiperRef.current.swiper.slideTo(i);
          }}
        />
      );
    }
    
    return bullets;
  };

  // Create a ref for the Swiper
  const swiperRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-4 py-16 md:px-8"
        id="doctors"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Meet our dedicated <span className="text-[#FFB5B5]">team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
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
        </div>
      </motion.section>

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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    {Array(5).fill(null).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#FFB5B5]"
                        fill="#FFB5B5"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 md:p-14">{testimonial.review}</p>
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
          color: #FFB5B5;
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .testimonial-swiper .swiper-button-next,
          .testimonial-swiper .swiper-button-prev {
            display: none;  /* Hides arrows completely on mobile */
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
            {stats.map((stat, index) => (
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
            you&apos;ve always wanted. Experience our attention to compassionate
            and expert care today.
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
                {orgData.city}, <span className="text-[#4A2B29]">{orgData.state}</span>
              </h3>
              
              {/* <p className="text-gray-600 mb-8">
                {orgData.description}
              </p> */}
              
              <div className="space-y-3 text-[#4A2B29]">
                <div className="flex items-start">
                  <span className="block">
                    {orgData.address}<br />
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
  );
}



const ImageWithDynamicClass = ({ src, alt }) => {
  const [isWider, setIsWider] = useState(true);
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
      className={isWider ? "w-full h-auto block mx-auto" : "h-full w-auto block mx-auto rounded-lg"}
    />
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
        <ImageWithDynamicClass
          src={member.image}
          alt={member.name}
        />
      </div>
      <p className="font-medium mt-3">{member.name}</p>
      <p className="text-gray-600 text-sm">{member.role}</p>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -270, scale: 0.95 }}
            animate={{ opacity: 1, y: -270  , scale: 1 }}
            exit={{ opacity: 0, y: -270, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 left-[10%] md:left-3/4 transform -translate-x-1/2 mt-2 w-72 bg-[#fff0f0] rounded-lg shadow-xl p-4"
          >
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-600 mb-2">Experience: {member.experience}</p>
              <div className="mb-2">
                <p className="font-medium mb-1">Specializations:</p>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {member.Specialization.map((spec, index) => (
                    <li key={index} className="mb-1">{spec}</li>
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