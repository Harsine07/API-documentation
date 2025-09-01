import React from 'react';
import { Users, Target, Cpu } from 'lucide-react';

export function FaceMatchContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Face Match</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Advanced facial recognition technology to match faces across different images. Perfect for identity verification and document validation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
          <Users className="w-8 h-8 text-pink-600 mb-4" />
          <h3 className="font-semibold text-pink-800 mb-2">Multi-face Detection</h3>
          <p className="text-pink-700 text-sm">Detect and match multiple faces in a single image</p>
        </div>
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
          <Target className="w-8 h-8 text-pink-600 mb-4" />
          <h3 className="font-semibold text-pink-800 mb-2">High Accuracy</h3>
          <p className="text-pink-700 text-sm">99.7% accuracy rate with advanced AI algorithms</p>
        </div>
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
          <Cpu className="w-8 h-8 text-pink-600 mb-4" />
          <h3 className="font-semibold text-pink-800 mb-2">Real-time Processing</h3>
          <p className="text-pink-700 text-sm">Lightning-fast face matching in under 1 second</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Use Cases</h3>
        <div className="space-y-3 text-gray-600 text-sm">
          <p>• Identity verification during account opening</p>
          <p>• Document photo matching with selfie verification</p>
          <p>• Access control and security applications</p>
          <p>• Fraud prevention in financial services</p>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Confidence Score</h3>
        <p className="text-gray-600 text-sm">
          Each face match returns a confidence score between 0-100. Scores above 80 indicate high confidence matches, 
          while scores below 60 suggest potential mismatches requiring manual review.
        </p>
      </div>
    </div>
  );
}