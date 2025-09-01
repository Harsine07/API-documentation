import React from 'react';
import { FileText, Scan, Database } from 'lucide-react';

export function PanOcrContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">PAN OCR</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Extract text and data from PAN card images using advanced Optical Character Recognition technology. Convert physical documents to structured digital data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
          <Scan className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="font-semibold text-emerald-800 mb-2">High Accuracy OCR</h3>
          <p className="text-emerald-700 text-sm">99.5% accuracy in text extraction from PAN cards</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
          <FileText className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="font-semibold text-emerald-800 mb-2">Structured Output</h3>
          <p className="text-emerald-700 text-sm">Clean, structured JSON output for easy integration</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
          <Database className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="font-semibold text-emerald-800 mb-2">Data Validation</h3>
          <p className="text-emerald-700 text-sm">Automatic validation of extracted PAN format</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Supported Image Formats</h3>
        <div className="flex flex-wrap gap-2">
          {['JPEG', 'PNG', 'PDF', 'TIFF', 'BMP'].map(format => (
            <span key={format} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {format}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-800 mb-4">Quality Requirements</h3>
        <ul className="text-blue-700 space-y-2 text-sm">
          <li>• Minimum resolution: 300 DPI</li>
          <li>• Clear, well-lit images without glare</li>
          <li>• Complete card visible in frame</li>
          <li>• Maximum file size: 5MB</li>
        </ul>
      </div>
    </div>
  );
}