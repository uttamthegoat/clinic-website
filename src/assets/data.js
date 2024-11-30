import org_Logo from "./images/logo/org_Logo_nobg.png";
import { doctorImages } from './images/doctors'
import { facilityImages } from './images/facility'

export const orgData = {
  name: "Jay Smiles",
  founder: {
    name: "Dr. JayShree Hegde",
    image: doctorImages.JayShree,
    description: "With over 32 years of experience in dental care, Dr. JayShreeHegde has established herself as a leading professional in modern dentistry. Her commitment to patient care and continuous learning has helped transform countless smiles."
  },
  description:
    "Jay Smiles is a one stop Dental centre for all your dental needs. It is crafted to render fine dentistry by specialists in all fields. The experienced staff here are trained to ensure you feel comfortable and relaxed. The services we render range from microscopic root canal treatments, tooth colored fillings, crowns and bridges, invisalign, orthodontic treatment, implants, gum therapy, geriatric and pediatric care. With advanced technology incorporated through state of the art equipments, we are able to render fine dentistry .",
  logo: org_Logo,
  email: "info@jaysmiles.in",
  phone: "+91 8147962712",
  address: " 2011, 2nd Floor, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560038, Above Mahesh Lunch Home",
  city: "Bengaluru",
  state: "Karnataka",
  facilityImages: facilityImages,
  socials: {
    facebook: "https://www.facebook.com/cliniccenter",
    twitter: "https://www.twitter.com/cliniccenter",
    instagram: "https://www.instagram.com/cliniccenter",
    linkedin: "https://www.linkedin.com/cliniccenter",
  },
  teamMembers : [
    {
      id: 1,
      name: "Dr. JayShree",
      image: doctorImages.JayShree,
      role: "Microendodontist, Smile Makeover expert",
      Specialization: ["General Dentistry", "Cosmetic Dentistry", "Orthodontics"],
      experience: "20+ years"
    },
    {
      id: 2,
      name: "Dr. Sandesh Karanth. K",
      image: doctorImages.SandeshKaranth,
      role: "Orthodontist",
      Specialization: ["Comprehensive orthodontic treatment for children and adults", "Advanced clear aligner therapy", "Cerifited Invisalign provider", "Surgical orthodontics", "Cleft lip and palate Orthodontics"],
      experience: "10+ years"
    },
    {
      id: 3,
      name: "Dr. Romir Navaneetham",
      image: doctorImages.RomirNavaneetham,
      role: "Oral Surgeon",
      Specialization: ["Comprehensive orthodontic treatment for children and adults", "Advanced clear aligner therapy", "Cerifited Invisalign provider", "Surgical orthodontics", "Cleft lip and palate Orthodontics"],
      experience: "10+ years"
    },
    {
      id: 4,
      name: "Dr. Janaki Shaw",
      image: doctorImages.RomirNavaneetham,
      role: "Orthodontist",
      Specialization: ["Comprehensive orthodontic treatment for children and adults", "Advanced clear aligner therapy", "Cerifited Invisalign provider", "Surgical orthodontics", "Cleft lip and palate Orthodontics"],
      experience: "5+ years"
    },
    {
      id: 5,
      name: "Our Team",
      image: doctorImages.team,
      // ... existing code ...
      description: [
        "Specialists who are well versed to resolve any issue you might face",
        "Co-ordinators who help you understand the treatment curated for you scheduling appointments at your convenience",
        "Assistants who make your needs and comfort their priority",
        "All without any judgement"
      ]
    }
  ],
  services: [
    {
      id: 1,
      title: "General Dentistry",
      description: "Comprehensive care including cleanings, fillings, and preventive treatments.",
      uid: "general"
    },
    {
      id: 2,
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with whitening, veneers, and other aesthetic procedures.",
      uid: "cosmetic"
    },
    {
      id: 3,
      title: "Orthodontics",
      description: "Straighten your teeth with braces or clear aligners for a perfect smile.",
      uid: "ortho"
    },
  ],
  hours: [
    "Mon - Sat",
    "10:00 AM - 01:30 PM",
    "02:30 PM - 07:00 PM"
  ],
  testimonials : Array(20 ).fill({
    name: "Kathenna Hegde",
    image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
    rating: 5,
    review: "Had a fantastic experience at Jay Smiles! The staff made me feel welcome, and Dr. Jayaratne explained every step of my treatment clearly. The advanced technology really made the process quick and painless. I'm thrilled with the results!"
  }),
  stats : [
    { value: "600+", label: "Patients served" },
    { value: "10+", label: "Years of Experience" },
    { value: "10+", label: "Services offered" },
    { value: "100%", label: "Client satisfaction" }
  ],
  timeSlots : [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM"
  ],
  doctorImages: doctorImages,
}

export const blogData = [
  {
    id: 1,
    title: "The Importance of Regular Dental Check-ups",
    date: "November 8, 2024",
    image: "/src/assets/images/facility/IMG_2472.jpg",
    link: "#dummy"
  },
  {
    id: 2,
    title: "The Importance of Regular Dental Check-ups",
    date: "November 8, 2024",
    image: "/src/assets/images/facility/IMG_2482.jpg",
    link: "#dummy"
  },
  {
    id: 3,
    title: "The Importance of Regular Dental Check-ups",
    date: "November 8, 2024",
    image: "/src/assets/images/facility/IMG_2483.jpg",
    link: "#dummy"
  },
  {
    id: 4,
    title: "The Importance of Regular Dental Check-ups",
    date: "November 8, 2024",
    image: "/src/assets/images/facility/IMG_2492.jpg",
    link: "#dummy"
  }
]
