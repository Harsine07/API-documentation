import React from 'react';
import { Car, MapPin, Calendar } from 'lucide-react';

export function DlVerificationContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Driving License Verification</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Comprehensive driving license verification for all Indian states. Extract and validate DL information with high accuracy OCR technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
          <Car className="w-8 h-8 text-teal-600 mb-4" />
          <h3 className="font-semibold text-teal-800 mb-2">Vehicle Classes</h3>
          <p className="text-teal-700 text-sm">Verify authorized vehicle classes and endorsements</p>
        </div>
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
          <MapPin className="w-8 h-8 text-teal-600 mb-4" />
          <h3 className="font-semibold text-teal-800 mb-2">State Coverage</h3>
          <p className="text-teal-700 text-sm">Support for all Indian states and union territories</p>
        </div>
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
          <Calendar className="w-8 h-8 text-teal-600 mb-4" />
          <h3 className="font-semibold text-teal-800 mb-2">Validity Check</h3>
          <p className="text-teal-700 text-sm">Automatic expiry validation and renewal notifications</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Extracted Data Points</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <ul className="space-y-2">
            <li>• License number</li>
            <li>• Holder name</li>
            <li>• Date of birth</li>
            <li>• Address</li>
          </ul>
          <ul className="space-y-2">
            <li>• Issue date</li>
            <li>• Valid until</li>
            <li>• Issuing RTO</li>
            <li>• Vehicle classes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}