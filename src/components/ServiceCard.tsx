'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/types/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface ServiceCardProps {
  service: Service;
  showContent?: boolean;
}

export default function ServiceCard({ service, showContent = false }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {service.icon && (
        <div className="relative h-48">
          <Image
            src={`https:${service.icon.fields.file.url}`}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        {service.features && service.features.length > 0 && (
          <ul className="mb-4 space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {showContent && service.content && (
          <div className="prose max-w-none mt-4">
            {documentToReactComponents(service.content)}
          </div>
        )}

        <Link
          href={`/services/${service.slug}`}
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
} 