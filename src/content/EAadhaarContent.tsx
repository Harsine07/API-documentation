import React from 'react';
import { Download, FileCheck, Cloud } from 'lucide-react';

export function EAadhaarContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">E-Aadhaar</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Digital Aadhaar card services including validation, processing, and secure handling of electronic Aadhaar documents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
          <FileCheck className="w-8 h-8 text-sky-600 mb-4" />
          <h3 className="font-semibold text-sky-800 mb-2">Digital Validation</h3>
          <p className="text-sky-700 text-sm">Verify authenticity of e-Aadhaar documents</p>
        </div>
        <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
          <Cloud className="w-8 h-8 text-sky-600 mb-4" />
          <h3 className="font-semibold text-sky-800 mb-2">Cloud Processing</h3>
          <p className="text-sky-700 text-sm">Secure cloud-based document processing</p>
        </div>
        <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
          <Download className="w-8 h-8 text-sky-600 mb-4" />
          <h3 className="font-semibold text-sky-800 mb-2">PDF Processing</h3>
          <p className="text-sky-700 text-sm">Handle password-protected e-Aadhaar PDFs</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Processing Features</h3>
        <div className="space-y-3 text-gray-600 text-sm">
          <p>• Password-protected PDF handling</p>
          <p>• Digital signature verification</p>
          <p>• QR code validation</p>
          <p>• Demographic data extraction</p>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="font-semibold text-green-800 mb-4">Security Features</h3>
        <ul className="text-green-700 space-y-2 text-sm">
          <li>• End-to-end encryption</li>
          <li>• No data retention policy</li>
          <li>• Secure document transmission</li>
          <li>• UIDAI compliance maintained</li>
        </ul>
      </div>
    </div>
  );
}