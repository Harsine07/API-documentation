import React from 'react';
import { Shield, Key, Clock } from 'lucide-react';

export function IntroductionContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Welcome to the FastKYC API documentation. Our comprehensive KYC (Know Your Customer) verification APIs help you streamline customer onboarding and compliance processes with industry-leading accuracy and speed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <Shield className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="font-semibold text-blue-800 mb-2">Secure & Compliant</h3>
          <p className="text-blue-700 text-sm">
            Bank-grade security with full compliance to regulatory standards and data protection laws.
          </p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <Clock className="w-8 h-8 text-green-600 mb-4" />
          <h3 className="font-semibold text-green-800 mb-2">Real-time Processing</h3>
          <p className="text-green-700 text-sm">
            Lightning-fast verification with response times under 2 seconds for most operations.
          </p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <Key className="w-8 h-8 text-purple-600 mb-4" />
          <h3 className="font-semibold text-purple-800 mb-2">Easy Integration</h3>
          <p className="text-purple-700 text-sm">
            Simple REST APIs with comprehensive documentation and SDKs for popular languages.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Getting Started</h3>
        <div className="space-y-3 text-gray-600">
          <p>1. Obtain your API key from the dashboard</p>
          <p>2. Review our authentication guidelines</p>
          <p>3. Choose the appropriate verification endpoints</p>
          <p>4. Implement error handling and retry logic</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-800 mb-4">Rate Limits</h3>
        <p className="text-yellow-700">
          Standard plans include 1000 requests per hour. Contact our sales team for higher limits or enterprise solutions.
        </p>
      </div>
    </div>
  );
}