import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';

const steps = [
  {
    number: 1,
    title: 'Initial Consultation',
    description: 'We understand your property registration needs and provide you with a customized plan.',
  },
  {
    number: 2,
    title: 'Document Collection',
    description: 'Our team helps you gather all necessary documents for the registration process.',
  },
  {
    number: 3,
    title: 'Verification & Processing',
    description: 'We verify all documents and process them as per legal requirements.',
  },
  {
    number: 4,
    title: 'Registration Completion',
    description: 'We complete the registration process and hand over all registered documents to you.',
  },
];

export default function HowItWorks() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">
              Our streamlined process makes property registration simple and hassle-free
            </p>
          </div>
        </AnimatedTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="relative">
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80"
              alt="Process"
              className="rounded-lg shadow-xl image-scale"
              width="1296"
              height="864"
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center font-semibold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
              <Link
                to="/contact"
                className="button-hover inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
              >
                Get Started Now
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}