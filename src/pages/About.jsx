/* eslint-disable react/prop-types */
import { useState } from 'react'
import { ChevronDown, ChevronUp, Smile, Clock, MapPin, Phone } from 'lucide-react'
import { orgData } from '../assets/data'

export default function AboutPage() {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-primary-light-bkgrnd">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary-dark-text mb-8 text-center">About Our Dental Practice</h1>
        
        <section className="bg-secondary-light-bkgrnd rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-primary-dark-text mb-4">Welcome to {orgData.name}</h2>
          <p className="text-secondary-dark-text mb-6">
            At our practice, {"we're"} dedicated to providing comprehensive dental care for your entire family. 
            Our team of experienced professionals is committed to ensuring your comfort and delivering 
            exceptional results in a warm, welcoming environment.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={<Smile className="w-8 h-8 text-buttons-blue" />} title="Patient-Centered Care">
              Your comfort and satisfaction are our top priorities.
            </FeatureCard>
            <FeatureCard icon={<Clock className="w-8 h-8 text-buttons-green" />} title="Convenient Hours">
              We offer flexible scheduling to fit your busy life.
            </FeatureCard>
            <FeatureCard icon={<MapPin className="w-8 h-8 text-buttons-yellow" />} title="Easy to Find">
              Conveniently located in the heart of our community.
            </FeatureCard>
          </div>
        </section>

        <section className="bg-secondary-light-bkgrnd rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-primary-dark-text mb-6">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {orgData.doctors.map((doctor) => (
              <TeamMember
                key={doctor.id}
                name={doctor.name}
                role={doctor.specialty}
                bio={doctor.bio}
              />
            ))}
          </div>
        </section>

        <section className="bg-secondary-light-bkgrnd rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-primary-dark-text mb-6">Our Services</h2>
          <div className="space-y-4">
            {orgData.services.map((service) => (
              <ExpandableService
                key={service.id}
                title={service.title}
                description={service.description}
                expanded={expandedSection === service.uid}
                onClick={() => toggleSection(service.uid)}
              />
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-primary-dark-text mb-4">Ready to Schedule Your Visit?</h3>
          <p className="text-secondary-dark-text mb-6">We&apos;re here to answer your questions and book your appointment.</p>
          <a
            href={`tel:${orgData.phone}`}
            className="inline-flex items-center px-6 py-3 bg-buttons-blue hover:bg-buttons-blue-hover text-primary-light-text font-semibold rounded-lg transition duration-300"
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
    <div className="bg-tertiary-light-bkgrnd rounded-lg p-6 flex flex-col items-center text-center hover:bg-secondary-light-bkgrnd transition-colors duration-300">
      {icon}
      <h3 className="text-xl font-semibold text-primary-dark-text mt-4 mb-2">{title}</h3>
      <p className="text-secondary-dark-text">{children}</p>
    </div>
  )
}

function TeamMember({ name, role, bio }) {
  return (
    <div className="bg-tertiary-light-bkgrnd rounded-lg p-6 hover:bg-secondary-light-bkgrnd transition-colors duration-300">
      <h3 className="text-xl font-semibold text-primary-dark-text mb-2">{name}</h3>
      <p className="text-buttons-blue font-medium mb-4">{role}</p>
      <p className="text-secondary-dark-text">{bio}</p>
    </div>
  )
}

function ExpandableService({ title, description, expanded, onClick }) {
  return (
    <div className="border border-tertiary-light-bkgrnd rounded-lg">
      <button
        className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-tertiary-light-bkgrnd transition-colors duration-300"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-primary-dark-text">{title}</span>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-buttons-blue" />
        ) : (
          <ChevronDown className="w-5 h-5 text-buttons-blue" />
        )}
      </button>
      {expanded && (
        <div className="px-6 py-4 bg-tertiary-light-bkgrnd">
          <p className="text-secondary-dark-text">{description}</p>
        </div>
      )}
    </div>
  )
}