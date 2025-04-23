import Image from 'next/image'
import Link from 'next/link'

export default function Bio() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container py-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </nav>

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
                <h1 className="text-4xl font-bold mb-4">Dr. Jenifer Gold</h1>
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
                <p className="mt-6 text-gray-700">
                  Dr. Jenifer Gold is a board-certified specialist in equine internal medicine and emergency/critical care, with over 20 years of experience in veterinary medicine. She provides expert consultation services for horses, cattle, camelids, and small ruminants throughout Montana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Education & Training</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Veterinary Degree</h3>
                <p className="text-gray-700">
                  Dr. Gold graduated Magna Cum Laude from Washington State University/Oregon State University in 2002, demonstrating exceptional academic achievement and dedication to veterinary medicine.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Internship</h3>
                <p className="text-gray-700">
                  Completed a rotating internship in equine medicine and surgery at Mid-Atlantic Equine Medical Center in 2003, gaining hands-on experience with a wide range of equine conditions and treatments.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Residency</h3>
                <p className="text-gray-700">
                  Completed a 3-year residency in Large Animal Internal Medicine at Cornell University, becoming a Diplomate of the American College of Veterinary Internal Medicine in 2007. This intensive training provided specialized knowledge in diagnosing and treating complex internal medical conditions in large animals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Fellowship</h3>
                <p className="text-gray-700">
                  After two years in private practice, she served as a clinical assistant professor at Texas A&M University's Department of Large Animal Clinical Sciences, where she completed a 2-year fellowship in Emergency Medicine and Critical Care, becoming a Diplomate of the American College of Veterinary Emergency and Critical Care-Large Animal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
            <div className="space-y-6">
              <p className="text-gray-700">
                Dr. Gold's career includes positions at prestigious institutions around the world:
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Dubai Equine Hospital (2011-2012)</h3>
                <p className="text-gray-700">
                  Served as a specialist in equine internal medicine and emergency/critical care at one of the world's leading equine hospitals, treating elite racing and sport horses.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Colorado State University</h3>
                <p className="text-gray-700">
                  Contributed to the university's large animal medicine program, combining clinical practice with teaching and research.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Chaparral Medical Center</h3>
                <p className="text-gray-700">
                  Provided specialized care for horses and other large animals in a private practice setting.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Washington State University (2015-2022)</h3>
                <p className="text-gray-700">
                  Served as an associate professor in Large Animal Medicine, teaching veterinary students and providing specialized care for large animals. During this time, she mentored numerous veterinary students and residents, sharing her expertise in equine internal medicine and critical care.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Wisconsin Equine Clinic and Hospital (2022-2024)</h3>
                <p className="text-gray-700">
                  Worked for 2.75 years at this specialized equine facility before returning to Montana to establish her large animal consulting business, bringing her extensive experience to serve the local veterinary community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Research & Publications</h2>
            <div className="space-y-6">
              <p className="text-gray-700">
                Throughout her career, Dr. Gold has been actively involved in research, focusing on several key areas in equine medicine:
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Equine Neonatology & Sepsis</h3>
                <p className="text-gray-700">
                  Actively participated in the Havemeyer Septic Foal Project, contributing to advancements in the treatment and management of septic foals. Her work in this area has helped improve survival rates and outcomes for critically ill neonatal foals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Pain Management</h3>
                <p className="text-gray-700">
                  Conducted research on pain management protocols, including studies on gabapentin in horses and acetaminophen in neonatal foals. These studies have contributed to the development of more effective pain management strategies for horses.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Exercise-Induced Pulmonary Hemorrhage</h3>
                <p className="text-gray-700">
                  Investigated exercise-induced pulmonary hemorrhage in barrel racing and racehorses, working to understand the underlying mechanisms and develop more effective treatment strategies.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Selected Publications</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Gold, J.R., et al. (2020). "Gabapentin for the treatment of chronic pain in horses: A pilot study." Journal of Veterinary Internal Medicine.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Gold, J.R., et al. (2018). "Acetaminophen pharmacokinetics in neonatal foals." Equine Veterinary Journal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Gold, J.R., et al. (2015). "Exercise-induced pulmonary hemorrhage in barrel racing horses: Prevalence and risk factors." Journal of Equine Veterinary Science.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching & Mentorship */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Teaching & Mentorship</h2>
            <div className="space-y-6">
              <p className="text-gray-700">
                Dr. Gold has dedicated her career to mentoring students and young veterinarians, sharing her knowledge and expertise with the next generation of veterinary professionals.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Academic Teaching</h3>
                <p className="text-gray-700">
                  As an associate professor at Washington State University, Dr. Gold taught courses in large animal medicine, emergency and critical care, and clinical skills. She developed innovative teaching methods to help students understand complex medical concepts and procedures.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Clinical Mentorship</h3>
                <p className="text-gray-700">
                  Throughout her career, Dr. Gold has mentored numerous veterinary students, interns, and residents, guiding them through challenging cases and helping them develop their clinical skills and knowledge. Many of her former students now hold positions at prestigious veterinary institutions around the world.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Continuing Education</h3>
                <p className="text-gray-700">
                  Dr. Gold has presented at numerous continuing education conferences and workshops, sharing her expertise with practicing veterinarians. She is known for her ability to explain complex medical concepts in a clear and accessible way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Practice */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Current Practice</h2>
            <div className="space-y-6">
              <p className="text-gray-700">
                Dr. Gold currently operates a large animal consulting business in Montana, providing specialized veterinary services to practitioners and animal owners throughout the region.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Consultation Services</h3>
                <p className="text-gray-700">
                  Dr. Gold offers a range of consultation services, including phone/text consults, chart reviews, and case management. She works closely with local veterinarians to provide the best possible care for their patients.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Areas of Expertise</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Equine Internal Medicine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Emergency and Critical Care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Neonatology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Pain Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Respiratory Disease</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Professional Philosophy</h3>
                <p className="text-gray-700">
                  Dr. Gold believes in providing evidence-based, compassionate care for all animals. She is committed to staying current with the latest research and techniques in veterinary medicine, and to sharing her knowledge with colleagues and clients. Her goal is to improve the health and well-being of horses and other large animals through expert consultation and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
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