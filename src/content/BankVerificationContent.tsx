import React from 'react';
import { CreditCard, CheckCircle, AlertCircle } from 'lucide-react';

export function BankVerificationContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Bank Verification</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Verify bank account details in real-time with our comprehensive bank verification API. Ensure accurate financial information during customer onboarding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
          <h3 className="font-semibold text-green-800 mb-2">Key Features</h3>
          <ul className="text-green-700 space-y-2 text-sm">
            <li>• Real-time bank account verification</li>
            <li>• Support for 200+ Indian banks</li>
            <li>• Account holder name validation</li>
            <li>• IFSC code verification</li>
            <li>• Account status checking</li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <CreditCard className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="font-semibold text-blue-800 mb-2">Supported Banks</h3>
          <ul className="text-blue-700 space-y-2 text-sm">
            <li>• State Bank of India</li>
            <li>• HDFC Bank</li>
            <li>• ICICI Bank</li>
            <li>• Axis Bank</li>
            <li>• And 200+ more banks</li>
          </ul>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">API Endpoint</h3>
        <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
          <span className="text-green-600 font-semibold">POST</span> /api/v1/bank-verification
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <AlertCircle className="w-6 h-6 text-orange-600 mb-3" />
        <h3 className="font-semibold text-orange-800 mb-2">Important Notes</h3>
        <p className="text-orange-700 text-sm">
          Bank verification may take 2-5 seconds depending on the bank's response time. Implement appropriate timeout handling in your application.
        </p>
      </div>
    </div>
  );
}