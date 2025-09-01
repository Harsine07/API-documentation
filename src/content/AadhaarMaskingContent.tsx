import React from 'react';
import { EyeOff, Lock, Shield } from 'lucide-react';

export function AadhaarMaskingContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Aadhaar Masking</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Automatically mask sensitive Aadhaar numbers in documents and images to comply with privacy regulations while maintaining document usability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <EyeOff className="w-8 h-8 text-red-600 mb-4" />
          <h3 className="font-semibold text-red-800 mb-2">Privacy Protection</h3>
          <p className="text-red-700 text-sm">Automatically hide sensitive Aadhaar digits</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <Lock className="w-8 h-8 text-red-600 mb-4" />
          <h3 className="font-semibold text-red-800 mb-2">Compliance Ready</h3>
          <p className="text-red-700 text-sm">Meet regulatory requirements for data protection</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <Shield className="w-8 h-8 text-red-600 mb-4" />
          <h3 className="font-semibold text-red-800 mb-2">Secure Processing</h3>
          <p className="text-red-700 text-sm">Process documents without storing original data</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Masking Options</h3>
        <div className="space-y-3 text-gray-600 text-sm">
          <p>• Standard masking (show only last 4 digits)</p>
          <p>• Custom masking patterns</p>
          <p>• Complete number redaction</p>
          <p>• Watermark addition for authenticity</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="font-semibold text-amber-800 mb-4">Regulatory Compliance</h3>
        <p className="text-amber-700 text-sm">
          Our masking service ensures compliance with UIDAI guidelines and data protection regulations. 
          Masked documents maintain legal validity while protecting sensitive information.
        </p>
      </div>
    </div>
  );
}