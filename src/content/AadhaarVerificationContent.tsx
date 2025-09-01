import React from 'react';
import { Fingerprint, Eye, Lock } from 'lucide-react';

export function AadhaarVerificationContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Aadhaar Verification</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Secure Aadhaar verification services compliant with UIDAI guidelines. Verify Aadhaar numbers and extract demographic information safely.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <Fingerprint className="w-8 h-8 text-orange-600 mb-4" />
          <h3 className="font-semibold text-orange-800 mb-2">Biometric Verification</h3>
          <p className="text-orange-700 text-sm">Advanced fingerprint and iris verification capabilities</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <Eye className="w-8 h-8 text-orange-600 mb-4" />
          <h3 className="font-semibold text-orange-800 mb-2">OTP Verification</h3>
          <p className="text-orange-700 text-sm">Secure OTP-based verification through UIDAI</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <Lock className="w-8 h-8 text-orange-600 mb-4" />
          <h3 className="font-semibold text-orange-800 mb-2">UIDAI Compliant</h3>
          <p className="text-orange-700 text-sm">Fully compliant with UIDAI regulations and guidelines</p>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="font-semibold text-red-800 mb-4">Compliance Notice</h3>
        <p className="text-red-700 text-sm">
          All Aadhaar verification services are conducted in strict compliance with UIDAI regulations. 
          Demographic information is processed securely without storing sensitive biometric data.
        </p>
      </div>
    </div>
  );
}