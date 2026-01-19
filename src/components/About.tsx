import React from 'react';
import AnimatedSection from './AnimatedSection';
import CoreValues from './CoreValues'; // Assuming CoreValues component exists
import AnimatedTitle from './AnimatedTitle';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const stats = [
  { label: 'Years Experience', value: 20, prefix: '', suffix: '+' },
  { label: 'Happy Clients', value: 15000, prefix: '', suffix: '+' },
  { label: 'Stamp Duty Contribution', value: 100, prefix: '₹', suffix: '+ Cr' },
  { label: 'Expert Staff', value: 30, prefix: '', suffix: '+' },
];

// Updated client data structure with corrected names, URLs, and actual logo filenames
const clients = [
  { name: 'adani realty', url: 'https://www.adanirealty.com/', logo: '/client_co_logo/adani-realty.jpg' }, // Corrected logo path
  { name: 'the house of abhinadani Lodha', url: 'https://hoabl.com/', logo: '/client_co_logo/hoabl.jpg' }, // Corrected logo path
  { name: 'piramal', url: 'https://www.piramal.com/', logo: '/client_co_logo/piramal-new.png' }, // Corrected logo path
  { name: 'praradise group', url: 'https://www.paradisegroup.co.in/', logo: '/client_co_logo/paradise-group.png' }, // Corrected logo path
  { name: 'DP WORLD', url: 'https://www.dpworld.com/', logo: '/client_co_logo/dp-world.png' }, // Corrected logo path
  { name: 'jwr LOGISTAIC pvt .LTD', url: 'https://jwrlogic.com/', logo: '/client_co_logo/jwr.png' }, // Corrected logo path
  { name: 'jm MAHATRE INRFA PVT LTD', url: 'https://g.co/kgs/RoX3AdZ', logo: '/client_co_logo/jm-mhatre.png' }, // Corrected logo path
  { name: 'thakur infra projects', url: 'https://www.thakurinfraprojects.in', logo: '/client_co_logo/thakuripl.png' }, // Corrected logo path
  { name: 'Wellwisher', url: 'https://wellwishergroup.in/real-estate/', logo: '/client_co_logo/wellwisher.png' }, // Corrected logo path
  { name: 'Axis bank', url: 'https://www.axisbank.com/', logo: '/client_co_logo/Axis-bank.png' }, // Corrected logo path
  { name: 'Kamdhenu', url: 'https://kamdhenurealities.in/projects.html', logo: '/client_co_logo/kamdhenu-reality.png' }, // Corrected logo path
  { name: 'Raheja Universal', url: 'https://www.rahejauniversal.com/residential-projects', logo: '/client_co_logo/raheja-universal.png' }, // Corrected logo path
  { name: 'Priyal Group', url: 'https://priyalgroup.in/projects.php#past', logo: '/client_co_logo/priyal-group.png' }, // Corrected logo path
  { name: 'Kedar Buildcon', url: 'https://kedarbuildcon.com/projects/', logo: '/client_co_logo/kedar-buildcon.png' }, // Corrected logo path
  { name: 'JMM Homes', url: 'https://housing.com/in/buy/projects/page/289305-panvel-central-by-j-m-m-homes-in-panvel', logo: '/client_co_logo/jmm-homes.png' }, // Corrected logo path
  { name: 'saiyogi', url: 'https://www.saiyogisairesidency.com/', logo: '/client_co_logo/saiyogi.png' }, // Corrected logo path
  { name: 'superb group', url: 'https://superbgroup.co/', logo: '/client_co_logo/superb-group.png' }, // Corrected logo path
  { name: 'Ashiana Group', url: 'https://www.ashianagroup.net/', logo: '/client_co_logo/ashiana-group.png' }, // Corrected logo path
  { name: 'Safron Park', url: 'https://www.saffronpark.co.in/Completed_Projects.html', logo: '/client_co_logo/safron-park.png' }, // Corrected logo path (assuming 'safron' is correct)
  { name: 'Vastu Shilp', url: 'https://www.vastushilpassociates.com/Projects', logo: '/client_co_logo/vastu-shilp.png' }, // Corrected logo path
  { name: 'vastu Infra', url: 'https://vastuinfra.com/', logo: '/client_co_logo/vastu-infra.png' }, // Corrected logo path (Assuming this is the correct logo, not shown in image)
  { name: 'Tescon Green', url: 'https://www.tescongreen.com/ongoing-projects.php', logo: '/client_co_logo/Tescon.png' }, // Corrected logo path
  { name: 'jnpt port', url: 'https://www.jnport.gov.in/', logo: '/client_co_logo/jnpt-port.png' }, // Corrected logo path
  { name: 'indian rail', url: 'https://www.indianrail.gov.in/', logo: '/client_co_logo/indian-rail.png' }, // Corrected logo path
  { name: 'Choice Buildcon', url: 'https://choicegroup.co/all-projects', logo: '/client_co_logo/choice-group.png' }, // Corrected logo path
  { name: 'Today Group', url: 'https://www.todayglobal.in/completed-projects.php', logo: '/client_co_logo/today-group.png' }, // Corrected logo path
  { name: 'axis finance', url: 'https://www.axisfinance.in/', logo: '/client_co_logo/Axis-finance.png' }, // Corrected logo path
  { name: 'Revanta Groups', url: 'https://www.revantagroup.com/projects', logo: '/client_co_logo/revanta-group.png' }, // Corrected logo path
  { name: 'Devkrupa Enterprises', url: 'https://devkrupaenterprises.com/completed_project.php', logo: '/client_co_logo/devkrupa.png' }, // Corrected logo path
  { name: 'Lodha group', url: 'https://www.lodhagroup.com/', logo: '/client_co_logo/lodha-group.png' }, // Corrected logo path
  { name: 'Mahanagar Gas', url: 'https://www.mahanagargas.com/', logo: '/client_co_logo/mahanagar-gas.png' }, // Corrected logo path
  { name: 'Mass Insignia', url: 'https://www.massinsignia.com/', logo: '/client_co_logo/mass-insignia.png' }, // Corrected logo path
  { name: 'Metro Group', url: 'https://www.metrogroupindia.com/projects/residential/ongoing-projects.html', logo: '/client_co_logo/metro-group.png' }, // Corrected logo path
  { name: 'Satyam Devlopers', url: 'https://www.satyamdevelopers.com/projects.html', logo: '/client_co_logo/satyam-developers.png' }, // Corrected logo path
  { name: 'kanga', url: 'http://www.kangacompany.com/aboutus.html', logo: '/client_co_logo/kanga.png' }, // Corrected logo path
  { name: 'Vidhik legit', url: 'https://vidhiklegit.com/index.html', logo: '/client_co_logo/vidhik-legit.png' }, // Corrected logo path
  { name: 'law point', url: 'https://lawpointindia.com/', logo: '/client_co_logo/lawpoint.png' }, // Corrected logo path
  { name: 'Wadhva Group', url: 'https://www.thewadhwagroup.com/', logo: '/client_co_logo/wadhva-group.png' }, // Corrected logo path
];

const processSteps = {
  online: [
    'Client contacts Om Estate Services',
    'Documents are collected from the client',
    'Internal processing includes verification, stamp duty payment, and challan entry',
    'Registration is scheduled with the client',
    'On registration day, our field employee assists the client at the office',
    'The registered document is dispatched to the client'
  ],
  offline: [
    'Documents are received',
    'Registration process begins with verification',
    'Documents are submitted at the IGR office',
    'Necessary approvals are secured',
    'Paperwork and compliance checks are completed',
    'Ownership token creation and final registration are carried out efficiently'
  ]
};

export default function About() {
  const { t } = useTranslation(); // Initialize useTranslation

  const translatedStats = stats.map(stat => ({
    ...stat,
    label: t(`stats_${stat.label.toLowerCase().replace(/ /g, '_')}`)
  }));

  const translatedProcessSteps = {
    online: processSteps.online.map((step, index) => t(`process_online_step_${index + 1}`)),
    offline: processSteps.offline.map((step, index) => t(`process_offline_step_${index + 1}`))
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedTitle>
            <h1 className="text-4xl font-bold mb-6">{t('about_hero_title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {t('about_hero_description')}
            </p>
          </AnimatedTitle>
        </div>
      </div>

      {/* Stats Section */}
      <AnimatedSection>
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {translatedStats.map((stat) => (
                <div key={stat.label} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-primary-teal mb-2">
                    <AnimatedCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={3500}
                    />
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Vision & Mission */}
      <AnimatedSection>
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('vision_mission_title')}</h2>
                <p className="text-gray-600 mb-8">
                  {t('vision_mission_description')}
                </p>
                <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4">{t('our_motto_title')}</h3>
                  <p className="text-gray-600 italic">
                    {t('our_motto_description')}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">{t('edge_title')}</h3>
                  <p className="text-gray-600">
                    {t('edge_description')}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">{t('industry_expertise_title')}</h3>
                  <p className="text-gray-600">
                    {t('industry_expertise_description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection>
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('how_we_work_title')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Online Process */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">{t('online_process_title')}</h3>
                <div className="space-y-4">
                  {translatedProcessSteps.online.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-primary-teal/10 text-primary-teal rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offline Process */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">{t('offline_process_title')}</h3>
                <div className="space-y-4">
                  {translatedProcessSteps.offline.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-primary-teal/10 text-primary-teal rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Key Differentiators */}
      <AnimatedSection>
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('key_differentiators_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{t('differentiator1_title')}</h3>
                <p className="text-gray-600">{t('differentiator1_description')}</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{t('differentiator2_title')}</h3>
                <p className="text-gray-600">{t('differentiator2_description')}</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{t('differentiator3_title')}</h3>
                <p className="text-gray-600">{t('differentiator3_description')}</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Values Section */}
      <CoreValues />

      {/* Client Logos Section */}
      <AnimatedSection>
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('our_esteemed_clients_title')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
              {clients.map((client) => (
                <a key={client.name} href={client.url} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img src={client.logo} alt={client.name} className="max-h-16 w-auto object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}