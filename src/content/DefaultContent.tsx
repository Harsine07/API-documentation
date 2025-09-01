import React from 'react';

export function DefaultContent() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">Common Use Cases</h1>
        <div className="space-y-4">
          <p className="text-gray-600">KYC verification during customer onboarding for banks, insurance companies, and fintech applications</p>
          <p className="text-gray-600">Identity verification for loan applications and credit card issuance</p>
          <p className="text-gray-600">Automated customer data capture for investment accounts and mutual funds</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Integration Considerations</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Best Practices</h3>
          <div className="space-y-3 text-gray-600">
            <p>Implement proper error handling to manage cases where image quality is insufficient</p>
            <p>Store extracted data securely in compliance with data protection regulations</p>
            <p>Implement retry mechanisms for failed extractions with different image processing parameters</p>
            <p>Consider implementing a human review process for low-confidence extractions</p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Important Limitations</h3>
            <div className="mt-2 text-sm text-red-700 space-y-1">
              <p>Image quality significantly impacts extraction accuracy; blurry, low-resolution, or poorly lit images may yield inaccurate results</p>
              <p>Variations in ID card formats across states/countries may lead to inconsistent extraction</p>
              <p>Handwritten text or signatures may not be recognized accurately</p>
              <p>Glare, shadows, or cropped edges can cause OCR misinterpretation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}