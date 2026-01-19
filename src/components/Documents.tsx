import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const documents = [
  {
    category: 'Sale Related Documents',
    items: [
      { name: 'Simple Mortgage', format: 'DOC', url: '/docs/simple-mortgage.doc' },
      { name: 'Agreement of Assignment', format: 'DOC', url: '/docs/agreement-of-assignment.doc' },
      { name: 'General Power of Attorney', format: 'DOC', url: '/docs/general-power-of-attorney.doc' },
      { name: 'Special Power of Attorney', format: 'DOC', url: '/docs/special-power-of-attorney.doc' },
      { name: 'Sale Deed (Agricultural Land)', format: 'DOC', url: '/docs/sale-deed-agricultural-land.doc' },
    ],
  },
  {
    category: 'Development Agreement',
    items: [
      { name: 'Agreement of Development', format: 'DOC', url: '/docs/agreement-of-development.doc' },
      { name: 'Agreement of Leave and License', format: 'DOC', url: '/docs/agreement-of-leave-and-license.doc' },
    ],
  },
  {
    category: 'Assignment and Transfer',
    items: [
      { name: 'Deed of Assignment (Marathi)', format: 'DOC', url: '/docs/deed-of-assignment-marathi.doc' },
      { name: 'Marathi Gift Format', format: 'DOC', url: '/docs/marathi-gift-format.doc' },
      { name: 'Marathi Share Gift Format', format: 'DOC', url: '/docs/marathi-share-gift-format.doc' },
    ],
  },
  {
    category: 'Will and Conveyance',
    items: [
      { name: 'Will', format: 'DOC', url: '/docs/will.doc' },
      { name: 'Deed of Conveyance (Urban Land with Construction)', format: 'DOC', url: '/docs/deed-of-conveyance-urban-land-with-construction.doc' },
      { name: 'Deed of Conveyance (Urban Property)', format: 'DOC', url: '/docs/deed-of-conveyance-urban-property.doc' },
      { name: 'Deed of Conveyance (Urban Property and Building)', format: 'DOC', url: '/docs/deed-of-conveyance-urban-property-and-building.doc' },
      { name: 'Deed of Conveyance (Urban Land Agreement)', format: 'DOC', url: '/docs/deed-of-conveyance-urban-land-agreement.doc' },
    ],
  },
];

export default function Documents() {
  const handleDownload = (doc: { name: string; url: string }) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = doc.url;
    link.download = doc.url.split('/').pop() || '';

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Document Templates</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Access standardized templates for various property-related documents. These templates are designed to meet legal requirements and simplify your documentation process.
          </p>
        </div>
      </div>

      {/* Documents Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {documents.map((category) => (
            <div key={category.category} className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{category.category}</h2>
              <div className="space-y-4">
                {category.items.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">{doc.name}</h3>
                      <p className="text-sm text-gray-500">Format: {doc.format}</p>
                    </div>
                    <button
                      onClick={() => handleDownload(doc)}
                      className="flex items-center gap-2 text-primary-teal hover:text-primary-red transition-colors duration-200"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="mt-16 bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Important Notice</h2>
          <div className="prose text-gray-600">
            <p className="mb-4">
              These document templates are provided for reference purposes only. We recommend:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Consulting with legal professionals before finalizing any documents</li>
              <li>Ensuring all required information is accurately filled in</li>
              <li>Verifying compliance with current legal requirements</li>
              <li>Having the documents reviewed by relevant authorities</li>
            </ul>
            <p>
              For assistance with document preparation or registration, please{' '}
              <Link to="/contact" className="text-primary-teal hover:text-primary-red">
                contact our team
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}