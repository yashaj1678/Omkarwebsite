import { Building2, Calculator, FileText, ShieldCheck, ArrowRight, Download } from 'lucide-react';
import { useState } from 'react';

const valuationServices = [
  {
    icon: Building2,
    title: 'Property Valuation',
    description: 'Accurate assessment of residential and commercial properties based on current market conditions, location, and property characteristics.',
  },
  {
    icon: Calculator,
    title: 'Market Valuation Calculator',
    description: 'Comprehensive market analysis to determine fair market value, including comparable sales and market trends.',
    areas: [
      { name: 'Market Rate Valuation', link: 'https://valuation.igrmaharashtra.gov.in/EVALUATION/' },
    ]
  },
  {
    icon: FileText,
    title: 'Ready Reckoner Rates',
    description: 'Please find the ready reckoner rates have been revised effective from 1st April 2025',
    areas: [
      { name: 'Hike Rates for Maharashtra 2025', link: '/docs/Rate-hikes.pdf' },
      { name: 'Panvel', link: '/docs/Ready-reckoner-rates-panvel.pdf' },
      { name: 'Thane', link: '/docs/Ready-reckoner-rates-thane.pdf' },
      { name: 'Guidelines for Ready Reckoner Rates', link: '/docs/RR-Guidelines.pdf' },
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Certified Valuers',
    description: 'Our team of certified property valuers ensures accurate and reliable valuations that meet industry standards.',
  },
];

export default function Valuation() {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Property Valuation Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Get accurate and reliable property valuations from our team of certified experts. We provide comprehensive valuation services for residential and commercial properties.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valuationServices.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <service.icon className="w-8 h-8 text-primary-teal" />
                <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
              </div>
              <p className="text-gray-600">{service.description}</p>
              {service.areas && (
                <div className="mt-4">
                  <button
                    onClick={() => setExpandedArea(expandedArea === service.title ? null : service.title)}
                    className="inline-flex items-center gap-2 text-primary-teal hover:text-primary-red transition-colors duration-200"
                  >
                    <span>Click here for new rates</span>
                    <ArrowRight className={`w-4 h-4 transform transition-transform ${expandedArea === service.title ? 'rotate-90' : ''}`} />
                  </button>
                  {expandedArea === service.title && (
                    <div className="mt-4 space-y-2">
                      {service.areas.map((area) => (
                        <a
                          key={area.name}
                          href={area.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 hover:text-primary-teal transition-colors duration-200"
                        >
                          <Download className="w-4 h-4" />
                          <span>{area.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Get Your Property Valued</h2>
          <div className="prose text-gray-600">
            <p className="mb-4">
              Our valuation services are essential for:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Property sales and purchases</li>
              <li>Mortgage applications</li>
              <li>Rent Process</li>
              <li>Legal proceedings</li>
            </ul>
            <p>
              Contact us today to schedule a property valuation or learn more about our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 