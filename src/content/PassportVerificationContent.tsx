import React from 'react';
import { Globe, User, Calendar } from 'lucide-react';

export function PassportVerificationContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Passport Verification</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Verify Indian passport details with our advanced OCR and validation technology. Extract and validate passport information for seamless customer onboarding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <Globe className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="font-semibold text-indigo-800 mb-2">Global Coverage</h3>
          <p className="text-indigo-700 text-sm">Support for Indian passports with international travel validation</p>
        </div>
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <User className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="font-semibold text-indigo-800 mb-2">Identity Verification</h3>
          <p className="text-indigo-700 text-sm">Complete identity validation with photo matching capabilities</p>
        </div>
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <Calendar className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="font-semibold text-indigo-800 mb-2">Validity Check</h3>
          <p className="text-indigo-700 text-sm">Automatic expiry date validation and renewal alerts</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Extracted Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <ul className="space-y-2">
            <li>• Passport number</li>
            <li>• Full name</li>
            <li>• Date of birth</li>
            <li>• Place of birth</li>
          </ul>
          <ul className="space-y-2">
            <li>• Issue date</li>
            <li>• Expiry date</li>
            <li>• Issuing authority</li>
            <li>• Nationality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}