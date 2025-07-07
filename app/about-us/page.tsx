import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Target, Award, Clock, Globe } from "lucide-react"

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Nofonex</h1>
            <p className="text-lg text-gray-600">
              We are a specialized team of language and digital content experts dedicated to providing exceptional
              English-Dutch translation and content services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our Story"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="badge badge-secondary">Our Story</div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">From Vision to Reality</h2>
              <p className="text-gray-600">
                Founded in 2014, Xenofon Martokarijo began as a freelance language professional in Suriname, starting
                with straightforward tasks like transcription and annotation work for international clients.
              </p>
              <p className="text-gray-600">
                Over the years, the scope of work naturally evolved toward more sophisticated language projects—
                language quality assurance, subtitling, and creative writing assignments. While occasionally
                collaborating with local team members for specific language projects, the focus remained on maintaining
                the flexibility and personal touch that defines freelance work.
              </p>
              <p className="text-gray-600">
                Nowadays, while adapting to the changes in the digital world with AI taking over more translation jobs, 
                we are expanding our services to include digital content production, such as e-books, illustrated works, 
                and music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our mission</h3>
              <p className="text-gray-600">
                To help businesses and individuals communicate effectively across languages by providing personalized,
                high-quality language services and project support.
              </p>
              <p className="text-gray-600 mt-4">
                Whether it's complex language quality assurance, creative writing, or practical project management, we
                focus on delivering solutions that truly serve each client's unique needs with the attention to detail
                that only personal service can provide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our vision</h3>
              <p className="text-gray-600">
                To continue growing as a versatile language professional while exploring new creative frontiers in
                content production, building something meaningful with our family along the way.
              </p>
              <p className="text-gray-600 mt-4">
                We envision expanding from traditional language services into original content creation—developing
                e-books, illustrated works, and music that can reach audiences while maintaining the personal touch and
                quality that defines our approach to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-secondary mb-2">Our Values</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Drives Our Work</h2>
            <p className="text-gray-600">
              These core values have guided our journey from simple transcription work to complex language projects and
              now into creative content exploration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Continuous Learning</h3>
              <p className="text-gray-600">
                Every project teaches us something new. From basic transcription to complex language quality assurance,
                we continuously refine our skills and apply what we learn to deliver better results for each client.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Reliable Delivery</h3>
              <p className="text-gray-600">
                As a freelancer, our reputation depends on meeting deadlines and delivering quality work consistently. We
                respect our clients' timelines and communicate clearly throughout every project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Cultural Bridge-Building</h3>
              <p className="text-gray-600">
                Working mostly between English and Dutch contexts, we understand that effective communication goes 
                beyond literal translation—it's about making messages feel natural and appropriate in each cultural
                setting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Thoughtful Adaptation</h3>
              <p className="text-gray-600">
                We embrace new tools and approaches that genuinely improve our work, from AI assistance in language tasks
                to exploring creative content production with our family—always with purpose, not just for novelty.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Personal Attention</h3>
              <p className="text-gray-600">
                Working directly with clients means we can offer the kind of personalized service and attention to detail
                that larger operations often can't provide. Your project gets our full focus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Honest Communication</h3>
              <p className="text-gray-600">
                We believe in transparent communication about timelines, capabilities, and costs. If we can't do something
                or need to collaborate with others, we'll tell you upfront rather than overpromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-secondary mb-2">Our Team</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet the Team</h2>
            <p className="text-gray-600">
              Our specialized team combines linguistic expertise with technological innovation to deliver exceptional
              results for our clients.
            </p>
          </div>

          {/* First row - Team Members 1 & 2 */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=128&width=128" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Xenofon Martokarijo</h3>
              <p className="text-secondary font-medium mb-2">Founder & Director</p>
              <p className="text-gray-600 text-sm">
                With extensive experience in linguistics and entrepreneurship, Xenofon established Nofonex Online
                Services to bridge language gaps in the digital world. His expertise in English-Dutch translation and
                content creation forms the foundation of our specialized services.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=128&width=128" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Suraya Martokarijo-Batenburg</h3>
              <p className="text-secondary font-medium mb-2">Content Director</p>
              <p className="text-gray-600 text-sm">
                Suraya brings valuable insight to our content creation process, specializing in developing engaging
                materials for diverse audiences. Her expertise in visual creativity ensures our content to maintain 
                cultural authenticity and attraction.
              </p>
            </div>
          </div>

          {/* Second row - Team Members 3, 4 & 5 */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=128&width=128" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Quinxen Martokarijo</h3>
              <p className="text-secondary font-medium mb-2">Creative Assistant</p>
              <p className="text-gray-600 text-sm">
                Quinxen contributes to our visual content development, bringing a fresh perspective to our creative
                projects. His developing skills in digital illustration complement our content creation services.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=128&width=128" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Xenaya Martokarijo</h3>
              <p className="text-secondary font-medium mb-2">Production Assistant</p>
              <p className="text-gray-600 text-sm">
                Xenaya assists with our production processes, helping to coordinate project workflows and implement
                innovative tools that enhance our content development capabilities.
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=128&width=128" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Yaixelina Martokarijo</h3>
              <p className="text-secondary font-medium mb-2">Quality Assurance Assistant</p>
              <p className="text-gray-600 text-sm">
                Yaixelina contributes to our quality assurance process, providing valuable feedback that helps ensure
                our deliverables meet the highest standards of clarity and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Collaborative Approach</h2>
              <p className="text-gray-200 mb-6">
                While our core team specializes in English-Dutch language services, we leverage advanced AI technologies
                and collaborate with specialized partners when projects require additional language pairs or expertise.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">English-Dutch Specialization</h3>
                    <p className="text-gray-200">
                      Our team provides expert native-level translation between English and Dutch
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">AI-Enhanced Capabilities</h3>
                    <p className="text-gray-200">
                      We utilize advanced AI technologies to support additional language pairs
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">Remote Collaboration</h3>
                    <p className="text-gray-200">
                      Our digital-first approach enables efficient remote work and collaboration at competitive rates
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">Continuous Innovation</h3>
                    <p className="text-gray-200">
                      We constantly explore new technologies to enhance our service offerings
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our Collaborative Approach"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="bg-primary/5 rounded-lg p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Work With Us?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's discuss how our language and digital content solutions can help your business reach new audiences
                and achieve your global objectives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/get-started" className="btn btn-primary">
                  Get Started
                </Link>
                <Link href="/#contact" className="btn btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
