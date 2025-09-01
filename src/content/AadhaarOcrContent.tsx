import React from 'react';
import { FileImage, Zap, CheckCircle } from 'lucide-react';

export function AadhaarOcrContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Aadhaar OCR</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Extract demographic information from Aadhaar card images with industry-leading OCR accuracy. Process both front and back sides of Aadhaar cards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <FileImage className="w-8 h-8 text-violet-600 mb-4" />
          <h3 className="font-semibold text-violet-800 mb-2">Dual-side Processing</h3>
          <p className="text-violet-700 text-sm">Extract data from both front and back of Aadhaar cards</p>
        </div>
        <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <Zap className="w-8 h-8 text-violet-600 mb-4" />
          <h3 className="font-semibold text-violet-800 mb-2">Fast Processing</h3>
          <p className="text-violet-700 text-sm">Process images in under 3 seconds</p>
        </div>
        <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <CheckCircle className="w-8 h-8 text-violet-600 mb-4" />
          <h3 className="font-semibold text-violet-800 mb-2">Format Validation</h3>
          <p className="text-violet-700 text-sm">Automatic Aadhaar number format validation</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Extracted Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <ul className="space-y-2">
            <li>• Aadhaar number</li>
            <li>• Full name</li>
            <li>• Date of birth</li>
            <li>• Gender</li>
          </ul>
          <ul className="space-y-2">
            <li>• Address</li>
            <li>• PIN code</li>
            <li>• QR code data</li>
            <li>• Photo extraction</li>
          </ul>
        </div>
      </div>
    </div>
  );
}