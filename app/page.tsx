import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Dr. Gold consulting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dr. Jenifer Gold
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Organizational Development & Leadership Consulting
          </p>
          <Link 
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
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
    title: "Organizational Development",
    description: "Transform your organization through strategic planning, process improvement, and cultural enhancement."
  },
  {
    title: "Leadership Consulting",
    description: "Develop effective leadership skills and strategies to drive organizational success."
  },
  {
    title: "Team Building",
    description: "Build high-performing teams through targeted interventions and development programs."
  }
] 