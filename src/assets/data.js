import org_Logo from "./org_Logo_nobg.png";

export const orgData = {
  name: "Jay Smiles",
  description:
    "Providing exceptional healthcare services with a focus on patient comfort and advanced medical technology.",
  logo: org_Logo,
  email: "info@cliniccenter.com",
  phone: "(123) 456-7890",
  address: " 2011, 2nd Floor, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560038, Above Mahesh Lunch Home",
  city: "Bengaluru",
  state: "Karnataka",
  socials: {
    facebook: "https://www.facebook.com/cliniccenter",
    twitter: "https://www.twitter.com/cliniccenter",
    instagram: "https://www.instagram.com/cliniccenter",
    linkedin: "https://www.linkedin.com/cliniccenter",
  },
  teamMembers : Array(10).fill({
    name: "Tony Ferguson",
    image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
    role: "Dental Surgeon"
  }),
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
    {
      day: "Monday",
      hours: "8:00 AM - 5:00 PM",
    },
    {
      day: "Tuesday",
      hours: "8:00 AM - 7:00 PM",
    },
    {
      day: "Wednesday",
      hours: "8:00 AM - 5:00 PM",
    },
    {
      day: "Thursday",
      hours: "8:00 AM - 5:00 PM",
    },
    {
      day: "Friday",
      hours: "8:00 AM - 12:00 PM",
    },
    {
      day: "Saturday & Sunday",
      hours: "Closed",
    },
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
  ]
};

export const blogData = [
  {
    id: 1,
    title: "The Importance of Regular Dental Check-ups",
    date: "November 8, 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbq1LRx2Q9367z14M4pAlDVpdghQJ2TAV6IQ&s",
    link: "#dummy"
  },
  {
    id: 2,
    title: "The Importance of Regular Dental Check-ups",
    date: "November 8, 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbq1LRx2Q9367z14M4pAlDVpdghQJ2TAV6IQ&s",
    link: "#dummy"
  },
  {
    id: 3,
    title: "The Importance of Regular Dental Check-ups",
    date: "November 8, 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbq1LRx2Q9367z14M4pAlDVpdghQJ2TAV6IQ&s",
    link: "#dummy"
  },
  {
    id: 4,
    title: "The Importance of Regular Dental Check-ups",
    date: "November 8, 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbq1LRx2Q9367z14M4pAlDVpdghQJ2TAV6IQ&s",
    link: "#dummy"
  }
]
