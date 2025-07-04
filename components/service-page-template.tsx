import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import type { ServicePageProps } from "@/types/service-page"

export interface RelatedService {
  title: string
  description: string
  link: string
}

interface ServicePageTemplateProps extends ServicePageProps {
  relatedServices?: RelatedService[]
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  icon: Icon,
  imageSrc,
  imageAlt,
  features,
  process,
  serviceTypes,
  ctaTitle,
  ctaDescription,
  relatedServices,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center max-w-3xl mx-auto">
            <h1>{title}</h1>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className={`order-2 lg:order-1 ${process.length % 2 === 0 ? "" : "lg:order-2"}`}>
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                className="rounded-lg shadow-lg"
                width={600}
                height={500}
              />
            </div>
            <div className={`space-y-6 order-1 ${process.length % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
              <div className="badge badge-secondary">Professional {title}</div>
              <h2>{subtitle}</h2>
              <div className="text-gray-600 space-y-4">
                {description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="space-y-4 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
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
            <h2>Comprehensive {title} Solutions</h2>
            <p>Expert {title.toLowerCase()} services tailored to your specific needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {serviceTypes.map((service, index) => {
              const ServiceIcon = service.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <ServiceIcon className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-secondary">Our Process</div>
            <h2>How Our {title} Process Works</h2>
            <p>A systematic approach designed to deliver exceptional results</p>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            {process.length <= 4 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {process.map((step) => (
                  <div key={step.step} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative pl-8 border-l-2 border-primary space-y-12">
                {process.map((step) => (
                  <div key={step.step} className="relative">
                    <div className="absolute left-[-17px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="section-header">
              <div className="badge badge-secondary">Explore More</div>
              <h2>Related Services</h2>
              <p>Discover other services that complement {title.toLowerCase()}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {relatedServices.map((service, index) => (
                <Link key={index} href={service.link} className="block">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-secondary font-medium">
                      <span>Learn more</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{ctaTitle}</h2>
            <p className="text-xl text-gray-200 mb-8">{ctaDescription}</p>
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
