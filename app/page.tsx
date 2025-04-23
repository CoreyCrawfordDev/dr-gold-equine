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
              Expert Veterinary Consultation Services
            </p>
            <p className="text-lg mb-2 text-white/80">
              DVM, Diplomate ACVIM (Large Animal), Diplomate ACVECC (Large Animal)
            </p>
            <p className="text-lg mb-8 text-white/80">
              Specialized care for horses and large animals through professional consultation
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="#services" className="btn btn-accent">
                View Services
              </Link>
              <Link href="/contact" className="btn btn-outline-white">
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Services</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive veterinary consultation services for practitioners and animal owners
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Equine Internal Medicine */}
            <div className="card group hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Equine Internal Medicine</h3>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Respiratory Disease & EIPH</li>
                  <li>• Neonatology</li>
                  <li>• Endocrine Disorders</li>
                  <li>• GI Conditions</li>
                </ul>
                <Link href="/services#equine" className="text-primary hover:text-primary-dark font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Emergency & Critical Care */}
            <div className="card group hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Emergency & Critical Care</h3>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Emergency Response</li>
                  <li>• Critical Care Management</li>
                  <li>• Pain Management</li>
                  <li>• Post-operative Care</li>
                </ul>
                <Link href="/services#emergency" className="text-primary hover:text-primary-dark font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Consultation Services */}
            <div className="card group hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Consultation Options</h3>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Phone/Text Consults</li>
                  <li>• Chart Reviews</li>
                  <li>• Case Management</li>
                  <li>• Professional Mentoring</li>
                </ul>
                <Link href="/services#consultation" className="text-primary hover:text-primary-dark font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Schedule a consultation or reach out with any questions about our services
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
} 