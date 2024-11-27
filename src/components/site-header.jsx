import Link from "next/link"
import Image from "next/image"
 
export function SiteHeader() {
  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="w-full bg-[#FF69B4] py-2 px-4 text-white text-center">
        <p className="text-sm md:text-base font-medium">
          Now open at Lakeside! Accepting new patients today!
        </p>
      </div>
      
      {/* Main Header */}
      <div className="w-full bg-[#4A4A4A] text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left Side */}
          <div className="flex items-center gap-2">
            <Link href="tel:972-346-1100" className="flex items-center gap-2 hover:text-gray-200">
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
            </Link>
          </div>
          
          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          
          {/* Right Side */}
          <Link
            href="/book"
            className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-[#4A4A4A] transition-colors text-sm uppercase tracking-wider"
          >
            Book Appointment Online
          </Link>
        </div>
      </div>
      
      {/* Certification Badges */}
      <div className="absolute left-4 top-20 z-10 flex flex-col gap-2">
        <div className="w-16 h-16 bg-white rounded-full p-2 shadow-lg">
          <Image
            src="/bbb-logo.png"
            alt="BBB Accredited Business"
            width={60}
            height={60}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-16 h-16 bg-white rounded-full p-2 shadow-lg">
          <Image
            src="/yapi-logo.png"
            alt="YAPI Certified"
            width={60}
            height={60}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

