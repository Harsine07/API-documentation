import React from 'react';
import { Truck, MapPin, Calendar } from 'lucide-react';

export function VehicleRcContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Vehicle RC Verification</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Comprehensive vehicle registration certificate verification for automobiles, motorcycles, and commercial vehicles across India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <Truck className="w-8 h-8 text-slate-600 mb-4" />
          <h3 className="font-semibold text-slate-800 mb-2">All Vehicle Types</h3>
          <p className="text-slate-700 text-sm">Cars, bikes, trucks, and commercial vehicles</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <MapPin className="w-8 h-8 text-slate-600 mb-4" />
          <h3 className="font-semibold text-slate-800 mb-2">Pan-India Coverage</h3>
          <p className="text-slate-700 text-sm">Support for all Indian states and RTOs</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <Calendar className="w-8 h-8 text-slate-600 mb-4" />
          <h3 className="font-semibold text-slate-800 mb-2">Registration Details</h3>
          <p className="text-slate-700 text-sm">Complete registration and ownership information</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Verification Data</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <ul className="space-y-2">
            <li>• Registration number</li>
            <li>• Owner name</li>
            <li>• Vehicle make and model</li>
            <li>• Engine number</li>
          </ul>
          <ul className="space-y-2">
            <li>• Chassis number</li>
            <li>• Registration date</li>
            <li>• Fuel type</li>
            <li>• Vehicle class</li>
          </ul>
        </div>
      </div>
    </div>
  );
}