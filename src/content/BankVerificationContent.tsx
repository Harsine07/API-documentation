import React from "react";
import { AlertCircle } from "lucide-react";

export function BankVerificationContent() {
  return (
    <div className="flex">
      {/* Sidebar (already exists in your layout) */}
      {/* <Sidebar /> */}

      {/* Main Content Area */}
      <div className="flex-1 min-h-screen bg-gray-50 p-8">
        <div className="grid grid-cols-3 md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="space-y-10">
            {/* Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Bank Verification
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg">
                Verify bank account details in real-time with our comprehensive
                bank verification API. Ensure accurate financial information
                during customer onboarding.
              </p>
            </div>

            {/* Request Table */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">Request</h3>
              <table className="w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-2 border-b">Field</th>
                    <th className="text-left p-2 border-b">Type</th>
                    <th className="text-left p-2 border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">accountNumber</td>
                    <td className="p-2">string</td>
                    <td className="p-2">Customer’s bank account number</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">ifsc</td>
                    <td className="p-2">string</td>
                    <td className="p-2">IFSC code of the bank branch</td>
                  </tr>
                  <tr>
                    <td className="p-2">name</td>
                    <td className="p-2">string</td>
                    <td className="p-2">Account holder’s name</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Response Table */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">Response</h3>
              <table className="w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-2 border-b">Field</th>
                    <th className="text-left p-2 border-b">Type</th>
                    <th className="text-left p-2 border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">status</td>
                    <td className="p-2">string</td>
                    <td className="p-2">Verification result (success/failure)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">accountHolder</td>
                    <td className="p-2">string</td>
                    <td className="p-2">Verified account holder name</td>
                  </tr>
                  <tr>
                    <td className="p-2">bankName</td>
                    <td className="p-2">string</td>
                    <td className="p-2">Name of the bank</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Notes */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <AlertCircle className="w-6 h-6 text-orange-600 mb-3" />
              <h3 className="font-semibold text-orange-800 mb-2">
                Important Notes
              </h3>
              <p className="text-orange-700 text-sm">
                Bank verification may take 2-5 seconds depending on the bank's
                response time. Implement appropriate timeout handling in your
                application.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-10">
            {/* Curl Request */}
            <div className="bg-black text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <h3 className="font-semibold text-green-400 mb-3">cURL Request</h3>
              <pre>
{`curl --location --request POST 'https://api.example.com/v1/bank-verification' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "accountNumber": "1234567890",
  "ifsc": "HDFC0001234",
  "name": "John Doe"
}'`}
              </pre>
            </div>

            {/* Sample Request */}
            <div className="bg-black text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <h3 className="font-semibold text-blue-400 mb-3">Sample Request</h3>
              <pre>
{`{
  "accountNumber": "1234567890",
  "ifsc": "HDFC0001234",
  "name": "John Doe"
}`}
              </pre>
            </div>

            {/* Sample Response */}
            <div className="bg-black text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <h3 className="font-semibold text-yellow-400 mb-3">Sample Response</h3>
              <pre>
{`{
  "status": "success",
  "accountHolder": "John Doe",
  "bankName": "HDFC Bank"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
