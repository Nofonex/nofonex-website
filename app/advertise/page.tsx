import Link from "next/link"

export default function AdvertisePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Advertise With Us</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            Thank you for your interest in advertising on the Nofonex blog. Our platform reaches a global audience of
            language professionals, content creators, and businesses interested in international communication.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Our Audience</h2>

          <div className="grid md:grid-cols-3 gap-8 my-8">
            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-gray-600">Monthly Visitors</div>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">65%</div>
              <div className="text-gray-600">Industry Professionals</div>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">42</div>
              <div className="text-gray-600">Countries Represented</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Ad Placement Options</h2>

          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Top Banner (970x250)</h3>
              <p className="mb-4">
                Premium placement at the top of blog pages, highly visible to all visitors. Ideal for brand awareness
                campaigns.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">$750/month</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  Inquire Now
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">In-Content Banner (728x90)</h3>
              <p className="mb-4">
                Placed within article content for high engagement. Great for product promotions and special offers.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">$500/month</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  Inquire Now
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Sidebar Banner (300x600)</h3>
              <p className="mb-4">
                Persistent visibility as users scroll through content. Effective for lead generation campaigns.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">$400/month</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Monetization Options</h2>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">1. Direct Ad Sales</h3>
            <p>
              For maximum control and revenue, we recommend selling ad space directly to relevant businesses in your
              industry. This approach allows you to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Set your own rates based on your audience value</li>
              <li>Build relationships with advertisers in your niche</li>
              <li>Maintain full control over ad content and placement</li>
              <li>Keep 100% of the advertising revenue</li>
            </ul>

            <h3 className="text-2xl font-semibold">2. Ad Networks</h3>
            <p>
              Ad networks like Google AdSense, Media.net, or Ezoic offer a simpler way to monetize your blog with less
              manual effort:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Easy implementation with minimal technical knowledge</li>
              <li>Automatic ad placement and optimization</li>
              <li>Access to a large pool of advertisers</li>
              <li>Payment handling and advertiser relationships managed by the network</li>
            </ul>

            <h3 className="text-2xl font-semibold">3. Affiliate Marketing</h3>
            <p>Complement your ad strategy with affiliate partnerships by promoting relevant products and services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Earn commissions on sales or leads you generate</li>
              <li>Integrate naturally with your content through product reviews and recommendations</li>
              <li>Partner with companies like Amazon Associates, ShareASale, or industry-specific programs</li>
            </ul>

            <h3 className="text-2xl font-semibold">4. Sponsored Content</h3>
            <p>Collaborate with brands to create valuable content that promotes their products or services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sponsored blog posts, reviews, or case studies</li>
              <li>Higher revenue potential than display advertising</li>
              <li>More engaging for your audience when done authentically</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">Getting Started</h2>

          <p>Ready to monetize your blog? Here are the steps to get started:</p>

          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Analyze your traffic:</strong> Use Google Analytics to understand your audience demographics,
              traffic sources, and engagement metrics.
            </li>
            <li>
              <strong>Choose your monetization strategy:</strong> Based on your traffic volume and niche, select the
              approach that makes the most sense for your blog.
            </li>
            <li>
              <strong>Set up ad placements:</strong> Identify strategic locations on your blog for ad placement that
              balance visibility with user experience.
            </li>
            <li>
              <strong>Create an advertising media kit:</strong> Document your audience demographics, traffic statistics,
              and ad options for potential direct advertisers.
            </li>
            <li>
              <strong>Monitor and optimize:</strong> Regularly review performance metrics and adjust your strategy to
              maximize revenue while maintaining a positive user experience.
            </li>
          </ol>

          <div className="bg-primary/10 p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold mb-4">Contact Our Advertising Team</h3>
            <p className="mb-6">
              Interested in advertising on our blog or need help setting up your own monetization strategy? Our team is
              here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
