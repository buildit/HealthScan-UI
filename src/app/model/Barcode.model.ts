import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

export type BarcodeCategory = 'Medication' | 'Lab Kits' | 'Waste Disposal Kits';

export const BarcodeCategoryMapping: Record<BarcodeCategory, string> = {
  'Medication': 'medication',
  'Lab Kits': 'lab-kits',
  'Waste Disposal Kits': 'waste-disposal-kits'
};

export const getAllCategories = (): BarcodeCategory[] => {
  return Object.keys(BarcodeCategoryMapping) as BarcodeCategory[];
}

export interface BarcodeItem {
  code: string;
  category: string;
}

export interface TrackingInfo {
  trackingId: string;
  status: string;
}

export interface LabKit {
  barcodeItem: BarcodeItem;
  kitName: string;
  components: string[];
  instructions: string;
  manufacturer: string;
  intendedUse: string;
}

export interface Medication {
  barcodeItem: BarcodeItem;
  medicineName: string;
  dosage: string;
  expirationDate: string;
  manufacturer: string;
}

export interface WasteDisposalKit {
  barcodeItem: BarcodeItem;
  kitType: string;
  contents: string[];
  disposalInstructions: string;
  handlingWarnings: string;
  trackingInfo: TrackingInfo;
}

export const LabKitForm = new FormGroup({
  barcodeItem: new FormGroup({
    barcode: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  }),
  kitName: new FormControl('', Validators.required),
  components: new FormArray([
    new FormControl('', Validators.required)
  ]),
  instructions: new FormControl('', Validators.required),
  manufacturer: new FormControl('', Validators.required),
  intendedUse: new FormControl('', Validators.required),
});

export const MedicationForm = new FormGroup({
  barcodeItem: new FormGroup({
    barcode: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  }),
  medicineName: new FormControl('', Validators.required),
  dosage: new FormControl('', Validators.required),
  expirationDate: new FormControl('', Validators.required),
  manufacturer: new FormControl('', Validators.required)
});

export const WasteDisposalKitForm = new FormGroup({
  barcodeItem: new FormGroup({
    barcode: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  }),
  kitType: new FormControl('', Validators.required),
  contents: new FormArray([
    new FormControl('', Validators.required)
  ]),
  disposalInstructions: new FormControl('', Validators.required),
  handlingWarnings: new FormControl('', Validators.required),
  trackingInfo: new FormGroup({
    trackingNumber: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  })
});
