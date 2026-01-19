import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('contact_us_button')}
              </Link>
              <Link 
                to="/services" 
                className="inline-block border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >
                {t('explore_services_button')}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-lg shadow-xl image-scale absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[200px]">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">
                <AnimatedCounter end={50000} suffix="+" duration={3500} /> 
              </h3>
              <p className="text-gray-600">{t('documents_registered_text')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import AnimatedTitle from './AnimatedTitle';
import RateHikesPopup from './RateHikesPopup';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="relative bg-white pt-24 pb-16">
      <RateHikesPopup />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <AnimatedTitle>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title_part1')}{' '}
                <span className="text-primary-teal">{t('hero_title_part2')}</span>
                <br />
                {t('hero_title_part3')}{' '}
                <span className="text-primary-red">{t('hero_title_part4')}</span>
              </h1>
            </AnimatedTitle>
            <p className="text-gray-600 mb-8">
              {t('hero_description')}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-teal shadow-md hover:shadow-lg"
              >