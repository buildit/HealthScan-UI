export const scanType = ['lab-kit', 'medication', 'waste-disposal-kit'] as const;
export type ScanType = (typeof scanType)[number];
export const isScanType = (x: any): x is ScanType => scanType.includes(x);

export const ScanTypeMap: Record<ScanType, string> = {
  "lab-kit": 'Lab Kit',
  medication: 'Medication',
  "waste-disposal-kit": 'Waste Disposal Kit'
}
