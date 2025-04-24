import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/mountains.jpg"
            alt="Scenic Montana mountains landscape serving as the website background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={90}
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
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/about" className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                About Me
              </Link>
              <Link href="#services" className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Services
              </Link>
              <Link href="/contact" className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
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
    </div>
  )
}

const services = [
  {
    title: "Equine Internal Medicine",
    description: "Expert consultation for respiratory disease, EIPH, neonatology, endocrine disorders, and GI conditions in horses."
  },
  {
    title: "Emergency & Critical Care",
    description: "Specialized care for emergency response, critical care management, pain management, and post-operative care."
  },
  {
    title: "Phone/Text Consults",
    description: "Remote consultation services for veterinarians and animal owners throughout Montana."
  },
  {
    title: "Chart Reviews",
    description: "Detailed review of medical records and treatment plans for optimal patient care."
  },
  {
    title: "Case Management",
    description: "Comprehensive case management for complex medical conditions in horses and large animals."
  },
  {
    title: "Professional Mentoring",
    description: "Guidance and support for veterinary professionals seeking to enhance their expertise."
  }
] 