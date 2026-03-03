import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Target, Award, Clock, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Our Story, Mission & Team",
  description:
    "Meet the Nofonex team. Founded in 2014 in Suriname, we specialize in English-Dutch language services and digital content production for global businesses.",
  openGraph: {
    title: "About Nofonex | Our Story, Mission & Team",
    description: "Founded in 2014, specializing in English-Dutch language services and digital content production.",
  },
}

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Nofonex</h1>
            <p className="text-lg text-gray-600">
              A freelance language services practice based in Suriname, specializing in English-Dutch translation
              and digital content production — with occasional help from the family.
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
                src="/images/our-story.jpg"
                alt="The Nofonex story - from freelance translation to digital content production"
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

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-secondary mb-2">Who We Are</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">The People Behind Nofonex</h2>
            <p className="text-gray-600">
              Nofonex is primarily a freelance operation. The work is done by one person, with occasional help
              from family members who pitch in alongside their own occupations.
            </p>
          </div>

          {/* Founder */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/images/xenofon-martokarijo.jpg" alt="Xenofon Martokarijo - Freelance Language Professional" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Xenofon Martokarijo</h3>
              <p className="text-secondary font-medium mb-3">Freelance Language Professional &amp; Founder</p>
              <p className="text-gray-600 text-sm max-w-lg mx-auto">
                Xenofon runs Nofonex as a freelance language services practice from Suriname. With years of experience
                in English-Dutch translation, MTPE, subtitling, and content writing, he handles the day-to-day work
                — from client communication and project delivery to website management and content creation.
              </p>
            </div>
          </div>

          {/* Family helpers */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-primary text-center mb-6">Family Support</h3>
            <p className="text-gray-600 text-center mb-8 text-sm">
              When time allows, family members lend a hand with specific tasks alongside their main occupations
              — school, household, and other commitments come first.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                  <Image src="/images/team-1.jpg" alt="Suraya Martokarijo-Batenburg" fill className="object-cover" />
                </div>
                <h4 className="text-sm font-semibold text-primary">Suraya</h4>
                <p className="text-gray-500 text-xs">Occasional creative input</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                  <Image src="/images/team-2.jpg" alt="Quinxen Martokarijo" fill className="object-cover" />
                </div>
                <h4 className="text-sm font-semibold text-primary">Quinxen</h4>
                <p className="text-gray-500 text-xs">Helps with illustrations</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                  <Image src="/images/team-3.jpg" alt="Xenaya Martokarijo" fill className="object-cover" />
                </div>
                <h4 className="text-sm font-semibold text-primary">Xenaya</h4>
                <p className="text-gray-500 text-xs">Assists with small tasks</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                  <Image src="/images/team-4.jpg" alt="Yaixelina Martokarijo" fill className="object-cover" />
                </div>
                <h4 className="text-sm font-semibold text-primary">Yaixelina</h4>
                <p className="text-gray-500 text-xs">Gives feedback on content</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How We Work</h2>
              <p className="text-gray-200 mb-6">
                As a freelance operation, we keep things simple and personal. You work directly with the person
                doing the work — no account managers, no layers of bureaucracy. For projects that need additional
                language pairs or expertise, we collaborate with trusted partners.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">English-Dutch Specialization</h3>
                    <p className="text-gray-200">
                      Native-level translation, editing, and content creation between English and Dutch
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">AI-Assisted Workflows</h3>
                    <p className="text-gray-200">
                      Using AI tools to work more efficiently while maintaining human quality control
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">Direct Communication</h3>
                    <p className="text-gray-200">
                      You deal directly with the freelancer — clear, honest, and efficient
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">Competitive Rates</h3>
                    <p className="text-gray-200">
                      Low overhead means fair pricing without compromising on quality
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/#contact" className="btn bg-white text-primary hover:bg-gray-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Image
                src="/images/join-team.jpg"
                alt="Nofonex freelance approach to language services"
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
