import React from "react";

export function BankVerificationContent() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Documentation */}
        <div className="space-y-8">
          {/* Title and Description */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Bank Verification
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Verify bank account details in real-time with our comprehensive
              bank verification API. Ensure accurate financial information
              during customer onboarding.
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
                    <td className="p-4 font-mono text-sm">accountNumber</td>
                    <td className="p-4 text-sm text-gray-600">string</td>
                    <td className="p-4 text-sm text-gray-600">Customer's bank account number</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-mono text-sm">ifsc</td>
                    <td className="p-4 text-sm text-gray-600">string</td>
                    <td className="p-4 text-sm text-gray-600">IFSC code of the bank branch</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">name</td>
                    <td className="p-4 text-sm text-gray-600">string</td>
                    <td className="p-4 text-sm text-gray-600">Account holder's name</td>
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
                    <td className="p-4 text-sm text-gray-600">Verification result (success/failure)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-mono text-sm">accountHolder</td>
                    <td className="p-4 text-sm text-gray-600">string</td>
                    <td className="p-4 text-sm text-gray-600">Verified account holder name</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-mono text-sm">bankName</td>
                    <td className="p-4 text-sm text-gray-600">string</td>
                    <td className="p-4 text-sm text-gray-600">Name of the bank</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">message</td>
                    <td className="p-4 text-sm text-gray-600">string</td>
                    <td className="p-4 text-sm text-gray-600">Additional verification details</td>
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
{`curl --location --request POST 'https://api.example.com/v1/bank-verification' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "accountNumber": "1234567890",
  "ifsc": "HDFC0001234",
  "name": "John Doe"
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
  "accountNumber": "1234567890",
  "ifsc": "HDFC0001234",
  "name": "John Doe"
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
  "accountHolder": "John Doe",
  "bankName": "HDFC Bank",
  "message": "Account verified successfully"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}