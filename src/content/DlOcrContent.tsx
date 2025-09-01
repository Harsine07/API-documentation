import React from 'react';
import { ScanLine, Image, Database } from 'lucide-react';

export function DlOcrContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Driving License OCR</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Extract comprehensive information from driving license images using state-of-the-art OCR technology. Support for all Indian DL formats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-lime-50 border border-lime-200 rounded-lg p-6">
          <ScanLine className="w-8 h-8 text-lime-600 mb-4" />
          <h3 className="font-semibold text-lime-800 mb-2">Advanced OCR</h3>
          <p className="text-lime-700 text-sm">State-of-the-art text recognition technology</p>
        </div>
        <div className="bg-lime-50 border border-lime-200 rounded-lg p-6">
          <Image className="w-8 h-8 text-lime-600 mb-4" />
          <h3 className="font-semibold text-lime-800 mb-2">Image Enhancement</h3>
          <p className="text-lime-700 text-sm">Automatic image preprocessing for better accuracy</p>
        </div>
        <div className="bg-lime-50 border border-lime-200 rounded-lg p-6">
          <Database className="w-8 h-8 text-lime-600 mb-4" />
          <h3 className="font-semibold text-lime-800 mb-2">Structured Data</h3>
          <p className="text-lime-700 text-sm">Clean, organized output in JSON format</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Processing Capabilities</h3>
        <div className="space-y-3 text-gray-600 text-sm">
          <p>• Extract text from poor quality images</p>
          <p>• Handle rotated and skewed documents</p>
          <p>• Process multiple document formats</p>
          <p>• Automatic field detection and classification</p>
        </div>
      </div>
    </div>
  );
}