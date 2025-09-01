import React from 'react';
import { FileText, Shield, Zap } from 'lucide-react';

export function PanVerificationContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">PAN Verification</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Comprehensive PAN (Permanent Account Number) verification services with multiple verification levels to suit different business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <Zap className="w-8 h-8 text-purple-600 mb-4" />
          <h3 className="font-semibold text-purple-800 mb-2">PAN Lite</h3>
          <p className="text-purple-700 text-sm">Quick PAN validation for basic verification needs</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <FileText className="w-8 h-8 text-purple-600 mb-4" />
          <h3 className="font-semibold text-purple-800 mb-2">Comprehensive</h3>
          <p className="text-purple-700 text-sm">Detailed PAN information with additional data points</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <Shield className="w-8 h-8 text-purple-600 mb-4" />
          <h3 className="font-semibold text-purple-800 mb-2">Advanced</h3>
          <p className="text-purple-700 text-sm">Complete verification with enhanced security checks</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Available Endpoints</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">POST</span>
            <span className="font-mono text-sm">/api/v1/pan-lite</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">POST</span>
            <span className="font-mono text-sm">/api/v1/pan-comprehensive</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">POST</span>
            <span className="font-mono text-sm">/api/v1/pan-advanced</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-800 mb-4">Response Data</h3>
        <ul className="text-blue-700 space-y-2 text-sm">
          <li>• PAN holder name</li>
          <li>• Date of birth</li>
          <li>• Father's name</li>
          <li>• PAN status (Active/Inactive)</li>
          <li>• Aadhaar linking status</li>
        </ul>
      </div>
    </div>
  );
}