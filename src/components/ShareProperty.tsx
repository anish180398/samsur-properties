'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Property } from '@/types/contentful';

interface SharePropertyProps {
  property: Property;
}

export default function ShareProperty({ property }: SharePropertyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const propertyUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/properties/${property.slug}`
    : '';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(propertyUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleShare = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/share-property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug: property.slug,
          email,
          propertyUrl,
        }),
      });

      if (!response.ok) throw new Error();
      
      setStatus('success');
      setEmail('');
      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
      }, 2000);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        Share
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex min-h-screen items-center justify-center">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <Dialog.Title className="text-xl font-semibold mb-4">
              Share Property
            </Dialog.Title>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Link
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={propertyUrl}
                    className="flex-1 border rounded px-3 py-2 text-sm bg-gray-50"
                  />
                  <button
                    onClick={handleCopy}
                    className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or share via email</span>
                </div>
              </div>

              <form onSubmit={handleShare}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                    placeholder="Enter recipient's email"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send'}
                </button>

                {status === 'success' && (
                  <p className="mt-2 text-green-600 text-sm">Shared successfully!</p>
                )}
                {status === 'error' && (
                  <p className="mt-2 text-red-600 text-sm">Failed to share. Please try again.</p>
                )}
              </form>

              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
} 