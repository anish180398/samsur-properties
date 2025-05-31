import { Metadata } from 'next';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { getServices } from '@/lib/contentful';
import { notFound } from 'next/navigation';

// Define renderers for Contentful Rich Text
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      // render the asset
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
    [INLINES.ASSET_HYPERLINK]: (node: any) => {
      return (
        <a href={`https://${node.data.target.fields.file.url}`}>
          {node.content[0].value}
        </a>
      );
    },
  },
};

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const services = await getServices();
  const service = services.find(s => s.slug === 'solar-installation');

  if (!service) {
    return {
      title: 'Service Not Found | Samsur Properties',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.title} | Samsur Properties`,
    description: service.description || `Details about ${service.title}`, // Assuming service description is plain text
  };
}

export default async function SolarInstallationPage() {
  const services = await getServices();
  const service = services.find(s => s.slug === 'solar-installation');

  if (!service) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
      {service.icon && service.icon.fields && (
        <div className="mb-6">
          <img 
            src={`https://${service.icon.fields.file.url}`}
            alt={service.title}
            width={60}
            height={60}
          />
        </div>
      )}
      
      {service.description && (
        <div className="text-gray-700 mb-8">
          <p>{service.description}</p> {/* Assuming service description is plain text */}
        </div>
      )}

      {service.features && service.features.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {service.content && (
        <div className="prose max-w-none">
          {documentToReactComponents(service.content, options as any)}
        </div>
      )}
    </main>
  );
} 