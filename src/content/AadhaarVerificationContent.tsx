import React from 'react';

export function AadhaarVerificationContent() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Documentation */}
        <div className="space-y-8">
          {/* Title and Description */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Aadhaar Verification
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Secure Aadhaar verification services compliant with UIDAI guidelines. Verify Aadhaar numbers and extract demographic information safely.
            </p>
          </div>

          {/* Request Table */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-800">Request</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-700 border-b">Field</th>
                    <th className="text-left p-4 font-medium text-gray-700 border-b">Type</th>
                    <th className="text-left p-4 font-medium text-gray-700 border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-mono text-sm">aadhaarNumber</td>
                    <td className="p-4 text-sm text-gray-600">string</td>
                    <td className="p-4 text-sm text-gray-600">12-digit Aadhaar number</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-mono text-sm">otp</td>
                    <td className="p-4 text-sm text-gray-600">string</td>
                    <td className="p-4 text-sm text-gray-600">OTP received on registered mobile</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">consent</td>
                    <td className="p-4 text-sm text-gray-600">boolean</td>
                    <td className="p-4 text-sm text-gray-600">User consent for verification</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Response Table */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-800">Response</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-700 border-b">Field</th>
                    <th className="text-left p-4 font-medium text-gray-700 border-b">Type</th>
                    <th className="text-left p-4 font-medium text-gray-700 border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-mono text-sm">status</td>
                    <td className="p-4 text-sm text-gray-600">string</td>
                    <td className="p-4 text-sm text-gray-600">Verification status</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-mono text-sm">name</td>
                    <td className="p-4 text-sm text-gray-600">string</td>
                    <td className="p-4 text-sm text-gray-600">Name as per Aadhaar</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-mono text-sm">address</td>
                    <td className="p-4 text-sm text-gray-600">string</td>
                    <td className="p-4 text-sm text-gray-600">Address as per Aadhaar</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">gender</td>
                    <td className="p-4 text-sm text-gray-600">string</td>
                    <td className="p-4 text-sm text-gray-600">Gender information</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Side - Code Examples */}
        <div className="space-y-6">
          {/* cURL Request */}
          <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
              <span className="text-green-400 font-medium text-sm">cURL Request</span>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono">
{`curl --location --request POST 'https://api.example.com/v1/aadhaar-verification' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "aadhaarNumber": "123456789012",
  "otp": "123456",
  "consent": true
}'`}
              </pre>
            </div>
          </div>

          {/* Sample Request */}
          <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
              <span className="text-blue-400 font-medium text-sm">Sample Request</span>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono">
{`{
  "aadhaarNumber": "123456789012",
  "otp": "123456",
  "consent": true
}`}
              </pre>
            </div>
          </div>

          {/* Sample Response */}
          <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
              <span className="text-yellow-400 font-medium text-sm">Sample Response</span>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono">
{`{
  "status": "success",
  "name": "John Doe",
  "address": "123 Main Street, City",
  "gender": "Male"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}