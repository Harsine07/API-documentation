import React from 'react';
import { Download, Key, FileDown } from 'lucide-react';

export function EAadhaarDownloadContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">E-Aadhaar Download</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Facilitate secure e-Aadhaar download services for your customers through our UIDAI-compliant API integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <Download className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="font-semibold text-indigo-800 mb-2">Direct Download</h3>
          <p className="text-indigo-700 text-sm">Enable customers to download e-Aadhaar directly</p>
        </div>
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <Key className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="font-semibold text-indigo-800 mb-2">OTP Authentication</h3>
          <p className="text-indigo-700 text-sm">Secure OTP-based authentication process</p>
        </div>
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <FileDown className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="font-semibold text-indigo-800 mb-2">PDF Generation</h3>
          <p className="text-indigo-700 text-sm">Generate password-protected PDF documents</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Download Process</h3>
        <div className="space-y-3 text-gray-600 text-sm">
          <p>1. Customer provides Aadhaar number</p>
          <p>2. OTP sent to registered mobile number</p>
          <p>3. OTP verification and authentication</p>
          <p>4. Secure e-Aadhaar PDF generation and download</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-800 mb-4">Compliance Note</h3>
        <p className="text-yellow-700 text-sm">
          This service operates under strict UIDAI guidelines. All downloads are logged and monitored for compliance purposes.
        </p>
      </div>
    </div>
  );
}