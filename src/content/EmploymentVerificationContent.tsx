import React from 'react';
import { Briefcase, Building, UserCheck } from 'lucide-react';

export function EmploymentVerificationContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Employment Verification</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Verify employment details and work history through our comprehensive employment verification API. Perfect for loan applications and background checks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
          <Briefcase className="w-8 h-8 text-rose-600 mb-4" />
          <h3 className="font-semibold text-rose-800 mb-2">Work History</h3>
          <p className="text-rose-700 text-sm">Comprehensive employment history verification</p>
        </div>
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
          <Building className="w-8 h-8 text-rose-600 mb-4" />
          <h3 className="font-semibold text-rose-800 mb-2">Company Validation</h3>
          <p className="text-rose-700 text-sm">Verify employer details and company authenticity</p>
        </div>
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
          <UserCheck className="w-8 h-8 text-rose-600 mb-4" />
          <h3 className="font-semibold text-rose-800 mb-2">Salary Verification</h3>
          <p className="text-rose-700 text-sm">Income and salary verification services</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Verification Points</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <ul className="space-y-2">
            <li>• Current employment status</li>
            <li>• Job title and designation</li>
            <li>• Employment start date</li>
            <li>• Salary information</li>
          </ul>
          <ul className="space-y-2">
            <li>• Company details</li>
            <li>• HR contact verification</li>
            <li>• Work location</li>
            <li>• Employment type</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-800 mb-4">Use Cases</h3>
        <ul className="text-blue-700 space-y-2 text-sm">
          <li>• Loan application processing</li>
          <li>• Credit card eligibility verification</li>
          <li>• Background checks for hiring</li>
          <li>• Insurance policy applications</li>
        </ul>
      </div>
    </div>
  );
}