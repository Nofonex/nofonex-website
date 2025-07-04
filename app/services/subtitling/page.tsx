import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Film } from "lucide-react"

export default function SubtitlingServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center max-w-3xl mx-auto">
            <h1>Subtitling Services</h1>
            <p className="text-xl text-gray-600">
              Professional subtitling services for videos, films, and multimedia content in multiple languages.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Subtitling Services"
                className="rounded-lg shadow-lg"
                width={600}
                height={500}
              />
            </div>
            <div className="space-y-6">
              <div className="badge badge-secondary">Professional Subtitling</div>
              <h2>Expand Your Video's Global Reach</h2>
              <p className="text-gray-600">
                In today's digital world, video content is king. But language barriers can limit your reach. Our
                professional subtitling services help you break through these barriers, making your videos accessible to
                audiences worldwide.
              </p>
              <p className="text-gray-600">
                We provide accurate, culturally appropriate subtitles that are perfectly synchronized with your video
                content. Whether you're producing films, corporate videos, e-learning materials, or social media
                content, our subtitling services will help you connect with global audiences.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Accurate Translation</h3>
                    <p className="text-gray-600">
                      Subtitles that accurately convey the meaning of the original content
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Perfect Timing</h3>
                    <p className="text-gray-600">Precisely synchronized subtitles that appear at the right moment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold">Multiple Formats</h3>
                    <p className="text-gray-600">Support for all major subtitle formats and video platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Types */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-secondary">Our Services</div>
            <h2>Comprehensive Subtitling Solutions</h2>
            <p>Tailored subtitling services for various types of video content</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Film className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Film & TV Subtitling</h3>
              <p className="text-gray-600">
                Professional subtitling for films, TV shows, and documentaries with attention to cultural nuances and
                context.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Film className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Corporate Videos</h3>
              <p className="text-gray-600">
                Subtitling for training videos, promotional content, and internal communications to reach international
                teams and clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Film className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-Learning Content</h3>
              <p className="text-gray-600">
                Accurate subtitling for educational videos and courses, ensuring clear understanding of complex
                concepts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Film className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Videos</h3>
              <p className="text-gray-600">
                Quick-turnaround subtitling for social media content, optimized for engagement and accessibility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Film className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Closed Captions</h3>
              <p className="text-gray-600">
                Accessibility-focused captioning that includes descriptions of sounds and music for hearing-impaired
                viewers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Film className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">SDH Subtitling</h3>
              <p className="text-gray-600">
                Subtitles for the deaf and hard of hearing, including important non-dialogue audio cues and speaker
                identification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-secondary">Our Process</div>
            <h2>The Subtitling Process</h2>
            <p>How we create accurate, high-quality subtitles for your videos</p>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Transcription</h3>
                </div>
                <p className="text-gray-600">
                  We create an accurate transcript of the audio content, capturing all dialogue and relevant audio cues.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Translation</h3>
                </div>
                <p className="text-gray-600">
                  If needed, we translate the transcript into the target language(s), ensuring cultural appropriateness.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">Timing & Synchronization</h3>
                </div>
                <p className="text-gray-600">
                  We time each subtitle to appear at the right moment, ensuring perfect synchronization with the audio.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold">Quality Review</h3>
                </div>
                <p className="text-gray-600">
                  Our quality assurance team reviews the subtitles for accuracy, timing, and readability before
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Subtitle Your Videos?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Make your video content accessible to global audiences with our professional subtitling services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-started" className="btn bg-secondary text-white hover:bg-secondary-dark">
                Get Started
              </Link>
              <Link href="/#contact" className="btn bg-white text-primary hover:bg-gray-100">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
