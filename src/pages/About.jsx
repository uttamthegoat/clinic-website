import { useState } from 'react'
import { ChevronDown, ChevronUp, Smile, Clock, MapPin, Phone } from 'lucide-react'

export default function AboutPage() {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">About Our Dental Practice</h1>
        
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Welcome to Our Jay Smiles</h2>
          <p className="text-gray-700 mb-6">
            At our practice, we're dedicated to providing comprehensive dental care for your entire family. 
            Our team of experienced professionals is committed to ensuring your comfort and delivering 
            exceptional results in a warm, welcoming environment.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={<Smile className="w-8 h-8 text-blue-500" />} title="Patient-Centered Care">
              Your comfort and satisfaction are our top priorities.
            </FeatureCard>
            <FeatureCard icon={<Clock className="w-8 h-8 text-blue-500" />} title="Convenient Hours">
              We offer flexible scheduling to fit your busy life.
            </FeatureCard>
            <FeatureCard icon={<MapPin className="w-8 h-8 text-blue-500" />} title="Easy to Find">
              Conveniently located in the heart of our community.
            </FeatureCard>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TeamMember
              name="Dr. Emily Johnson"
              role="Lead Dentist"
              bio="Dr. Johnson brings over 15 years of experience in family dentistry, specializing in cosmetic procedures and pediatric care."
            />
            <TeamMember
              name="Dr. Michael Lee"
              role="Orthodontist"
              bio="With a passion for creating beautiful smiles, Dr. Lee offers the latest in orthodontic treatments for patients of all ages."
            />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Services</h2>
          <div className="space-y-4">
            <ExpandableService
              title="General Dentistry"
              description="Comprehensive care including cleanings, fillings, and preventive treatments."
              expanded={expandedSection === 'general'}
              onClick={() => toggleSection('general')}
            />
            <ExpandableService
              title="Cosmetic Dentistry"
              description="Enhance your smile with whitening, veneers, and other aesthetic procedures."
              expanded={expandedSection === 'cosmetic'}
              onClick={() => toggleSection('cosmetic')}
            />
            <ExpandableService
              title="Orthodontics"
              description="Straighten your teeth with braces or clear aligners for a perfect smile."
              expanded={expandedSection === 'ortho'}
              onClick={() => toggleSection('ortho')}
            />
          </div>
        </section>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Ready to Schedule Your Visit?</h3>
          <p className="text-gray-700 mb-6">We're here to answer your questions and book your appointment.</p>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Us Today
          </a>
        </div>
      </main>
    </div>
  )
}

function FeatureCard({ icon, title, children }) {
  return (
    <div className="bg-blue-100 rounded-lg p-6 flex flex-col items-center text-center">
      {icon}
      <h3 className="text-xl font-semibold text-blue-800 mt-4 mb-2">{title}</h3>
      <p className="text-gray-700">{children}</p>
    </div>
  )
}

function TeamMember({ name, role, bio }) {
  return (
    <div className="bg-blue-100 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{name}</h3>
      <p className="text-blue-600 font-medium mb-4">{role}</p>
      <p className="text-gray-700">{bio}</p>
    </div>
  )
}

function ExpandableService({ title, description, expanded, onClick }) {
  return (
    <div className="border border-blue-200 rounded-lg">
      <button
        className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-blue-700">{title}</span>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-blue-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-500" />
        )}
      </button>
      {expanded && (
        <div className="px-6 py-4 bg-blue-50">
          <p className="text-gray-700">{description}</p>
        </div>
      )}
    </div>
  )
}