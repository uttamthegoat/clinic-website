import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const whyChooseUsSlides = [
    {
      title: "State-of-the-Art Facilities",
      description:
        "Experience dental care in our modern, fully-equipped clinic with the latest technology.",
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069&auto=format&fit=crop",
    },
    {
      title: "Expert Team",
      description:
        "Our experienced professionals are committed to providing the highest quality dental care.",
      image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=1770&auto=format&fit=crop",
    },
    {
      title: "Comprehensive Care",
      description:
        "From routine checkups to advanced procedures, we offer complete dental care solutions.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1778&auto=format&fit=crop",
    },
  ];
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive dental care including preventive, restorative, and cosmetic services.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop"
    },
    {
      question: "What are your working hours?",
      answer: "We are open Monday to Saturday, 9:00 AM to 7:00 PM.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major dental insurance plans. Please contact us for specific details.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % whyChooseUsSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + whyChooseUsSlides.length) % whyChooseUsSlides.length);
  };

  return (
    <div className="min-h-screen bg-[#FFF1F3]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 mt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Where traditional values meet <span className="text-blue-600">modern</span> dentistry
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">90+</div>
            <p className="text-gray-600">Happy Patients</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
            <p className="text-gray-600">Dental Awards</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            The values we hold dear to our hearts
          </h2>
          <p className="text-gray-600 mb-8">
            We believe in providing exceptional dental care while maintaining the highest standards
            of professionalism and patient comfort.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
              alt="Modern Dental Care Facility"
              className="rounded-lg object-cover w-full h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1776&auto=format&fit=crop"
              alt="State-of-the-art Dental Equipment"
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Meet Our Founder</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4">Dr. Prof. Jayshree Hegde</h3>
              <p className="text-gray-600 mb-4">
                With over two decades of experience in dental care, Dr. Hegde has established herself
                as a leading professional in modern dentistry. Her commitment to patient care and
                continuous learning has helped transform countless smiles.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
              alt="Dr. Hegde"
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Empowering Care with Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsSlides.map((slide, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">{slide.title}</h3>
              <p className="text-gray-600 mb-4">{slide.description}</p>
              <img
                src={slide.image}
                alt={slide.title}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Slider Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Choose Us</h2>
        <div className="relative bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center">
            <button
              onClick={prevSlide}
              className="absolute left-4 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img
                  src={whyChooseUsSlides[currentSlide].image}
                  alt={whyChooseUsSlides[currentSlide].title}
                  className="rounded-lg object-cover w-full h-64"
                />
                <div>
                  <h3 className="text-xl font-bold mb-4">{whyChooseUsSlides[currentSlide].title}</h3>
                  <p className="text-gray-600">{whyChooseUsSlides[currentSlide].description}</p>
                </div>
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-4 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-center mt-4 gap-2">
            {whyChooseUsSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0">
                <button
                  className="w-full py-4 flex justify-between items-center text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && <p className="text-gray-600 mt-4">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
