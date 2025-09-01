import React from 'react';
import { IntroductionContent } from '../content/IntroductionContent';
import { BankVerificationContent } from '../content/BankVerificationContent';
import { PanVerificationContent } from '../content/PanVerificationContent';
import { PassportVerificationContent } from '../content/PassportVerificationContent';
import { AadhaarVerificationContent } from '../content/AadhaarVerificationContent';
import { DlVerificationContent } from '../content/DlVerificationContent';
import { FaceMatchContent } from '../content/FaceMatchContent';
import { FaceLivenessContent } from '../content/FaceLivenessContent';
import { PanOcrContent } from '../content/PanOcrContent';
import { AadhaarOcrContent } from '../content/AadhaarOcrContent';
import { DlOcrContent } from '../content/DlOcrContent';
import { AadhaarMaskingContent } from '../content/AadhaarMaskingContent';
import { VehicleRcContent } from '../content/VehicleRcContent';
import { EAadhaarContent } from '../content/EAadhaarContent';
import { EAadhaarDownloadContent } from '../content/EAadhaarDownloadContent';
import { EmploymentVerificationContent } from '../content/EmploymentVerificationContent';
import { DefaultContent } from '../content/DefaultContent';

interface MainContentProps {
  activeSection: string;
}

const contentComponents: Record<string, React.ComponentType> = {
  'introduction': IntroductionContent,
  'bank-verification': BankVerificationContent,
  'pan-verification': PanVerificationContent,
  'passport-verification': PassportVerificationContent,
  'aadhaar-verification': AadhaarVerificationContent,
  'dl-verification': DlVerificationContent,
  'face-match': FaceMatchContent,
  'face-liveness': FaceLivenessContent,
  'pan-ocr': PanOcrContent,
  'aadhaar-ocr': AadhaarOcrContent,
  'dl-ocr': DlOcrContent,
  'aadhaar-masking': AadhaarMaskingContent,
  'vehicle-rc': VehicleRcContent,
  'e-aadhaar': EAadhaarContent,
  'e-aadhaar-download': EAadhaarDownloadContent,
  'employment-verification': EmploymentVerificationContent,
};

export function MainContent({ activeSection }: MainContentProps) {
  const ContentComponent = contentComponents[activeSection] || DefaultContent;

  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="max-w-4xl">
        <ContentComponent />
      </div>
    </main>
  );
}