import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(var(--background-rgb))]">
      {/* Hero Section */}
      <section className="relative min-h-[600px] text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/mountains.jpg"
            alt="Scenic Montana mountains landscape serving as the website background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjQ4OEQ4LjE1REVHS1NTW1xfXkVnaWVsbW1u/2wBDARUXFx4aHR4eHW1BLUJtbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        </div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-white mb-6 text-5xl md:text-6xl lg:text-7xl font-bold">
              Dr. Jenifer Gold
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              Equine Internal Medicine & Emergency/Critical Care Specialist
            </p>
            <p className="text-lg mb-2 text-white/80">
              DVM, Diplomate ACVIM (Large Animal), Diplomate ACVECC (Large Animal)
            </p>
            <p className="text-lg mb-8 text-white/80">
              Providing exceptional care for horses and large animals in Montana.
            </p>
            <Link 
              href="#contact"
              className="btn btn-accent"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Dr. Gold</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/dr-gold-caring.JPG"
                  alt="Dr. Gold providing care to a horse, demonstrating her expertise in equine medicine"
                  fill
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjQ4OEQ4LjE1REVHS1NTW1xfXkVnaWVsbW1u/2wBDARUXFx4aHR4eHW5OLk5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  Dr. Gold graduated Magna Cum Laude from Washington State University/Oregon State University in 2002. She completed a rotating internship in equine medicine and surgery at Mid-Atlantic Equine Medical Center in 2003, followed by a 3-year residency in Large Animal Internal Medicine at Cornell University, becoming a Diplomate of the American College of Veterinary Internal Medicine in 2007.
                </p>
                <p className="text-gray-700 mb-4">
                  After two years in private practice, she served as a clinical assistant professor at Texas A&M University's Department of Large Animal Clinical Sciences, where she completed a 2-year fellowship in Emergency Medicine and Critical Care, becoming a Diplomate of the American College of Veterinary Emergency and Critical Care-Large Animal.
                </p>
                <p className="text-gray-700 mb-4">
                  Dr. Gold's career includes positions at the Dubai Equine Hospital (2011/2012), Colorado State University, Chaparral Medical Center, and Washington State University, where she was an associate professor in Large Animal Medicine from 2015-2022. Most recently, she worked at Wisconsin Equine Clinic and Hospital for 2.75 years before returning to Montana to establish her large animal consulting business.
                </p>
                <p className="text-gray-700 mb-4">
                  Throughout her career, Dr. Gold has focused on research in equine neonatology and sepsis, actively participating in the Havemeyer Septic Foal Project. Her research interests include pain management, with studies on gabapentin in horses and acetaminophen in neonatal foals, as well as exercise-induced pulmonary hemorrhage in barrel racing and racehorses.
                </p>
                <p className="text-gray-700">
                  Dr. Gold has dedicated her career to mentoring students and young veterinarians, assisting colleagues with challenging cases across all large animal species. She looks forward to continuing to support veterinarians with their cases through her consulting practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-gradient-to-b from-white via-[rgb(var(--background-rgb))] to-[rgb(var(--background-alt-rgb))]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Areas of Expertise</h2>
            <p className="text-gray-600 text-lg">
              Specialized care for horses and all large animals, including cattle, camelids, and small ruminants.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group">
              <h3 className="text-primary mb-4">Equine Internal Medicine</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Neonatology</li>
                <li>Respiratory Disease</li>
                <li>Equine Asthma</li>
                <li>EIPH</li>
                <li>Endocrine Disorders</li>
                <li>GI Conditions</li>
              </ul>
            </div>
            <div className="card group">
              <h3 className="text-primary mb-4">Emergency & Critical Care</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Emergency Response</li>
                <li>Critical Care Management</li>
                <li>Pain Management</li>
                <li>Intensive Monitoring</li>
                <li>Post-operative Care</li>
                <li>Sepsis Treatment</li>
              </ul>
            </div>
            <div className="card group">
              <h3 className="text-primary mb-4">Large Animal Medicine</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Cattle</li>
                <li>Camelids (Alpacas & Llamas)</li>
                <li>Small Ruminants</li>
                <li>Internal Medicine</li>
                <li>Emergency Care</li>
                <li>Herd Health Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-24 bg-[rgb(var(--background-rgb))]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Consultation Services</h2>
            <p className="text-gray-600 text-lg">
              Professional consultation services for veterinarians and animal owners
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Phone/Text Consult */}
            <div className="card group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-primary text-xl font-semibold mb-2">Phone/Text Consult</h3>
                  <p className="text-gray-600 mb-2">Quick consultation via phone or text</p>
                  <p className="text-primary font-semibold">Starting at $50</p>
                </div>
              </div>
              <Link href="#contact" className="btn btn-outline w-full">
                Contact for Details
              </Link>
            </div>

            {/* Chart Review */}
            <div className="card group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-primary text-xl font-semibold mb-2">Chart Review</h3>
                  <p className="text-gray-600 mb-2">Brief to in-depth options available</p>
                  <p className="text-primary font-semibold">$50-150</p>
                </div>
              </div>
              <Link href="#contact" className="btn btn-outline w-full">
                Contact for Details
              </Link>
            </div>

            {/* Brief Consult */}
            <div className="card group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-primary text-xl font-semibold mb-2">Brief Consult</h3>
                  <p className="text-gray-600 mb-2">Targeting one aspect of a case</p>
                  <p className="text-primary font-semibold">$50</p>
                </div>
              </div>
              <Link href="#contact" className="btn btn-outline w-full">
                Book Now
              </Link>
            </div>

            {/* Comprehensive Case Consult */}
            <div className="card group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-primary text-xl font-semibold mb-2">Comprehensive Case Consult</h3>
                  <p className="text-gray-600 mb-2">Includes detailed report and follow-up</p>
                  <p className="text-primary font-semibold">$150</p>
                </div>
              </div>
              <Link href="#contact" className="btn btn-outline w-full">
                Book Now
              </Link>
            </div>

            {/* Biosecurity Consult */}
            <div className="card group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-primary text-xl font-semibold mb-2">Biosecurity Consult</h3>
                  <p className="text-gray-600 mb-2">Develop farm-specific protocols for managing infectious diseases</p>
                  <p className="text-primary font-semibold">$250</p>
                </div>
              </div>
              <Link href="#contact" className="btn btn-outline w-full">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white shadow-lg">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Contact</h2>
            <p className="text-gray-600 text-lg">
              Get in touch for consultations or emergency care services.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 