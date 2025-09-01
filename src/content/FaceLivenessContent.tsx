import React from 'react';
import { Camera, Shield, AlertTriangle } from 'lucide-react';

export function FaceLivenessContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Face Liveness</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Advanced liveness detection to prevent spoofing attacks and ensure authentic user presence during verification processes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <Camera className="w-8 h-8 text-cyan-600 mb-4" />
          <h3 className="font-semibold text-cyan-800 mb-2">Live Detection</h3>
          <p className="text-cyan-700 text-sm">Real-time detection of live human presence</p>
        </div>
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <Shield className="w-8 h-8 text-cyan-600 mb-4" />
          <h3 className="font-semibold text-cyan-800 mb-2">Anti-Spoofing</h3>
          <p className="text-cyan-700 text-sm">Protection against photos, videos, and masks</p>
        </div>
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <AlertTriangle className="w-8 h-8 text-cyan-600 mb-4" />
          <h3 className="font-semibold text-cyan-800 mb-2">Fraud Prevention</h3>
          <p className="text-cyan-700 text-sm">Advanced algorithms to detect presentation attacks</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Detection Methods</h3>
        <div className="space-y-3 text-gray-600 text-sm">
          <p>• Passive liveness detection (no user interaction required)</p>
          <p>• Active liveness detection (user performs actions)</p>
          <p>• Blink detection and eye movement analysis</p>
          <p>• Texture analysis for material detection</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-800 mb-4">Implementation Tips</h3>
        <ul className="text-yellow-700 space-y-2 text-sm">
          <li>• Ensure good lighting conditions for optimal results</li>
          <li>• Request users to look directly at the camera</li>
          <li>• Implement fallback mechanisms for low-confidence scores</li>
          <li>• Consider multiple verification attempts for better accuracy</li>
        </ul>
      </div>
    </div>
  );
}