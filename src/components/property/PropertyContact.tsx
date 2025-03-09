import { Property } from '@/types/contentful';

interface PropertyContactProps {
  contactInfo: Property['contactInfo'];
}

export default function PropertyContact({ contactInfo }: PropertyContactProps) {
  if (!contactInfo) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Name</h3>
            <p>{contactInfo.name || 'N/A'}</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            {contactInfo.phone ? (
              <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-800">
                {contactInfo.phone}
              </a>
            ) : (
              <p>N/A</p>
            )}
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            {contactInfo.email ? (
              <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-800">
                {contactInfo.email}
              </a>
            ) : (
              <p>N/A</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 