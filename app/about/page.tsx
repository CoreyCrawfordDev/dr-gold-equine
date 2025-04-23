import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
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
                <h1 className="text-4xl font-bold mb-4">About Dr. Jenifer Gold</h1>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-semibold">DVM, Diplomate ACVIM (Large Animal)</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="font-semibold">Diplomate ACVECC (Large Animal)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Career */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Education & Career</h2>
            <div className="space-y-6">
              <p className="text-gray-700">
                Dr. Gold graduated Magna Cum Laude from Washington State University/Oregon State University in 2002. She completed a rotating internship in equine medicine and surgery at Mid-Atlantic Equine Medical Center in 2003, followed by a 3-year residency in Large Animal Internal Medicine at Cornell University, becoming a Diplomate of the American College of Veterinary Internal Medicine in 2007.
              </p>
              <p className="text-gray-700">
                After two years in private practice, she served as a clinical assistant professor at Texas A&M University's Department of Large Animal Clinical Sciences, where she completed a 2-year fellowship in Emergency Medicine and Critical Care, becoming a Diplomate of the American College of Veterinary Emergency and Critical Care-Large Animal.
              </p>
              <p className="text-gray-700">
                Dr. Gold's career includes positions at the Dubai Equine Hospital (2011/2012), Colorado State University, Chaparral Medical Center, and Washington State University, where she was an associate professor in Large Animal Medicine from 2015-2022. Most recently, she worked at Wisconsin Equine Clinic and Hospital for 2.75 years before returning to Montana to establish her large animal consulting business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Research & Expertise</h2>
            <div className="space-y-6">
              <p className="text-gray-700">
                Throughout her career, Dr. Gold has focused on research in equine neonatology and sepsis, actively participating in the Havemeyer Septic Foal Project. Her research interests include pain management, with studies on gabapentin in horses and acetaminophen in neonatal foals, as well as exercise-induced pulmonary hemorrhage in barrel racing and racehorses.
              </p>
              <p className="text-gray-700">
                Dr. Gold has dedicated her career to mentoring students and young veterinarians, assisting colleagues with challenging cases across all large animal species. She looks forward to continuing to support veterinarians with their cases through her consulting practice.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Research Focus Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Equine Neonatology</li>
                  <li>• Sepsis Management</li>
                  <li>• Pain Management Protocols</li>
                  <li>• Exercise-Induced Pulmonary Hemorrhage</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Professional Activities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Academic Research</li>
                  <li>• Clinical Education</li>
                  <li>• Veterinary Mentorship</li>
                  <li>• Professional Consulting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Work with Dr. Gold</h2>
            <p className="text-gray-600 text-lg mb-8">
              Benefit from years of expertise in large animal medicine and critical care
            </p>
            <Link href="/contact" className="btn btn-primary">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 