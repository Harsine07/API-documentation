import React from 'react';

export function FaceMatchContent() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Documentation */}
        <div className="space-y-8">
          {/* Title and Description */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Face Match
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Advanced facial recognition technology to match faces across different images. Perfect for identity verification and document validation.
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
                    <td className="p-4 font-mono text-sm">image1</td>
                    <td className="p-4 text-sm text-gray-600">file</td>
                    <td className="p-4 text-sm text-gray-600">First image for comparison</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-mono text-sm">image2</td>
                    <td className="p-4 text-sm text-gray-600">file</td>
                    <td className="p-4 text-sm text-gray-600">Second image for comparison</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">threshold</td>
                    <td className="p-4 text-sm text-gray-600">number</td>
                    <td className="p-4 text-sm text-gray-600">Confidence threshold (0-100)</td>
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
                    <td className="p-4 font-mono text-sm">isMatch</td>
                    <td className="p-4 text-sm text-gray-600">boolean</td>
                    <td className="p-4 text-sm text-gray-600">Whether faces match</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-mono text-sm">confidence</td>
                    <td className="p-4 text-sm text-gray-600">number</td>
                    <td className="p-4 text-sm text-gray-600">Match confidence score</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">message</td>
                    <td className="p-4 text-sm text-gray-600">string</td>
                    <td className="p-4 text-sm text-gray-600">Verification message</td>
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
{`curl --location --request POST 'https://api.example.com/v1/face-match' \\
--header 'Content-Type: multipart/form-data' \\
--form 'image1=@"image1.jpg"' \\
--form 'image2=@"image2.jpg"' \\
--form 'threshold="80"'`}
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
  "image1": "base64_encoded_image",
  "image2": "base64_encoded_image",
  "threshold": 80
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
  "isMatch": true,
  "confidence": 95.7,
  "message": "Faces match with high confidence"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}