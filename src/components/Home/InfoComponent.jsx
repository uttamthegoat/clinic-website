import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { blogData, orgData } from '../../assets/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './InfoComponent.css';

export default function InfoComponent() {
  return (
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
              Creating the perfect smile has never been this easy
            </h1>
            <p className="text-gray-600 mb-8">
              At {orgData.name}, we prioritize your oral health with personalized, cutting-edge care.
            </p>
            <Link to="/book" className="bg-white text-[#FFB5B5] border-2 border-[#FFB5B5] rounded-full px-8 py-3 hover:bg-[#FFB5B5] hover:text-white transition-colors duration-300 text-xl font-semibold">
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
              At {orgData.name}, we prioritize your oral health with personalized, cutting-edge care.
            </p>
            <Link to="/services" className="bg-white text-[#FFB5B5] border-2 border-[#FFB5B5] rounded-full px-8 py-3 hover:bg-[#FFB5B5] hover:text-white transition-colors duration-300 text-xl font-semibold">
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
            At Jay Smiles, we&apos;re dedicated to delivering compassionate and personalized dental care for you and your loved ones. Experience our commitment to your oral health today.
          </p>
          <Link to="/book" className="bg-[#FFB5B5] text-white rounded-full px-8 py-3 hover:bg-[#ff9b9b] transition-colors duration-300">
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
              src="https://watermark.lovepik.com/photo/20211204/large/lovepik-female-dentist-and-dental-nurse-picture_501526139.jpg"
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
              At <span className="font-bold">{orgData.name}</span>, we are passionate about delivering exceptional dental care with a focus on compassion and expertise. Our dedicated team is committed to patient-centered treatment, ensuring that every individual receives personalized care tailored to their specific needs. We strive to create a welcoming environment where your comfort and health are our top priorities.
            </p>
            <Link to="/about" className="bg-[#FFB5B5] text-white rounded-full px-8 py-3 hover:bg-[#ff9b9b] transition-colors duration-300">
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
          <Link to="/blog" className="bg-[#FFB5B5] text-white rounded-full px-6 py-2 hover:bg-[#ff9b9b] transition-colors duration-300">
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
              }
            }}
            className="py-8 px-4"
          >
            {blogData.map((item) => (
              <SwiperSlide key={item.id} className='py-3 px-5'>
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
                      className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 shadow-md hover:bg-gray-100 transition-colors duration-300"
                    >
                      <span className="text-xl">
                          <FontAwesomeIcon icon={faExternalLink} />
                      </span>
                    </Link>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.section>
    </div>
  )
}
