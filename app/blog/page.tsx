import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Tag, ArrowRight } from "lucide-react"
import AdBanner from "@/components/ad-banner"

export const metadata: Metadata = {
  title: "Blog - Language Services, Content Strategy & Industry Insights",
  description:
    "Insights, tips, and trends on language services, AI translation, content strategy, and global communication. Expert articles by Nofonex.",
  openGraph: {
    title: "Nofonex Blog | Language Services & Content Strategy Insights",
    description: "Expert articles on translation, AI, content strategy, and global communication.",
  },
}

// Blog Post Type
interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  tags: string[]
  image: string
  readTime: string
}

// Update the blogPosts array to include the new blog post at the beginning

const blogPosts: BlogPost[] = [
  {
    id: "7-days-of-becoming-a-blessing",
    title: "7 Days of Becoming a Blessing: A Bilingual Devotional for Professionals",
    excerpt:
      "A 7-day bilingual (EN/NL) devotional for Christian professionals navigating career change, entrepreneurship, and fear. Biblical stories meet real-life application.",
    date: "March 2, 2026",
    author: "Xenofon Martokarijo",
    category: "Devotional",
    tags: ["Devotional", "Faith & Work", "Career", "Bilingual"],
    image: "/placeholder.svg",
    readTime: "25 min read",
  },
  {
    id: "bridging-technical-expertise-creative-engagement",
    title: "Bridging Technical Expertise and Creative Engagement: Content Creation Strategies",
    excerpt:
      "Discover how to combine technical precision and creative engagement in your content strategy by learning from both IT and non-IT perspectives.",
    date: "April 28, 2024",
    author: "Xenofon Martokarijo",
    category: "Content Strategy",
    tags: ["Content Creation", "Technical Content", "Content Strategy"],
    image: "/global-connections-seo.png",
    readTime: "10 min read",
  },
  {
    id: "navigating-ai-revolution-remote-workers",
    title: "Navigating the AI Revolution: A Survival Guide for Remote Workers",
    excerpt:
      "Learn how remote workers can adapt and thrive amid the AI revolution with practical strategies for professional growth.",
    date: "April 10, 2024",
    author: "Xenofon Martokarijo",
    category: "Remote Work",
    tags: ["AI", "Remote Work", "Professional Development"],
    image: "/global-insights-ai.png",
    readTime: "12 min read",
  },
  {
    id: "effective-content-localization-strategies",
    title: "Effective Content Localization Strategies for Global Businesses",
    excerpt:
      "Discover key strategies for adapting your content to different markets while maintaining brand consistency and cultural relevance.",
    date: "May 15, 2024",
    author: "Xenofon Martokarijo",
    category: "Content Strategy",
    tags: ["Content Localization", "Global Marketing", "Cultural Adaptation"],
    image: "/global-language-network.png",
    readTime: "9 min read",
  },
  {
    id: "ai-translation-human-expertise",
    title: "AI Translation vs. Human Expertise: Finding the Right Balance",
    excerpt:
      "Explore how businesses can leverage both AI translation technology and human expertise to achieve optimal results in their multilingual content strategy.",
    date: "May 28, 2023",
    author: "Xenofon Martokarijo",
    category: "Translation",
    tags: ["AI Translation", "Human Translation", "Language Technology"],
    image: "/global-language-network.png",
    readTime: "7 min read",
  },
]

// Force static rendering for this page
export const dynamic = "force-static"

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Our Blog</h1>
            <p className="text-lg text-gray-600 mb-4">
              Insights, tips, and industry trends on language services, content creation, and global communication
              strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Top Ad Banner */}
      <div className="container mx-auto px-4 -mt-12 mb-12">
        <AdBanner size="large" className="bg-white" />
      </div>

      {/* Featured Post */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-6xl mb-4">✝️</p>
                <p className="text-2xl font-bold text-primary">7 Days of Becoming a Blessing</p>
                <p className="text-lg text-gray-600 mt-2">A Bilingual Devotional for Professionals</p>
                <p className="text-sm text-gray-500 mt-1 italic">Een Tweetalige Overdenking voor Professionals</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-secondary text-white text-sm font-medium rounded-full">
                Featured Post
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                7 Days of Becoming a Blessing: A Bilingual Devotional for Professionals
              </h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>March 2, 2026</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  <span>Xenofon Martokarijo</span>
                </div>
                <div className="flex items-center">
                  <Tag size={16} className="mr-1" />
                  <span>Devotional, Faith &amp; Work</span>
                </div>
              </div>
              <p className="text-gray-600 text-lg">
                A 7-day bilingual (English-Dutch) devotional for Christian professionals navigating career change,
                entrepreneurship, and fear. Six biblical stories. In-depth study. Real-life application.
              </p>
              <Link
                href="/blog/7-days-of-becoming-a-blessing"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                Read Devotional
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Ad Banner */}
      <div className="container mx-auto px-4 my-12">
        <AdBanner size="medium" className="bg-gray-50" />
      </div>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-secondary text-white text-sm font-medium rounded-full mb-4">
              Latest Articles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Recent Blog Posts</h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest insights and trends in language services and digital content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-56">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                    <span className="px-3 py-1 bg-primary/10 rounded-full">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center text-secondary font-medium hover:underline"
                    >
                      Read More <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors">
              More Articles Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Ad Banner */}
      <div className="container mx-auto px-4 my-12">
        <AdBanner size="large" className="bg-white" />
      </div>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-gray-200 mb-8">
              Get the latest insights and trends in language services and digital content delivered to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md focus:outline-none text-gray-800"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-300 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </>
  )
}
