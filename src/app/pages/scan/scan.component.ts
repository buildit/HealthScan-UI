import {Component, OnInit} from '@angular/core';
import {BarcodeFormat, Result} from "@zxing/library";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSelectChange} from "@angular/material/select";
import {ActivatedRoute, Router} from "@angular/router";
import {isScanType, ScanType, ScanTypeMap} from "../../utils/scan.utl";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  barcodeFormat: BarcodeFormat[] = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX];
  form: FormGroup;
  enable = false;
  indvId!: string;
  scanTypePretty!: string;
  flashEnabled = false;
  devices: Array<MediaDeviceInfo> = [];
  device: MediaDeviceInfo | undefined = undefined;
  private scanType!: ScanType;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.form = this.fb.group({
      cameraSelect: [''],
    });
  }

  ngOnInit(): void {
    this.indvId = this.route.snapshot.params['indvId'];
    this.scanType = this.route.snapshot.params['scanType'];
    if (isScanType(this.scanType)) {
      this.scanTypePretty = ScanTypeMap[this.scanType];
    }
  }

  onScanSuccess(e: string): void {
    console.log(e)
  }

  onDeviceSelectionChange(e: MatSelectChange) {
    this.device = e.value;
  }

  onCamerasFound(cameras: MediaDeviceInfo[]): void {
    this.devices = cameras
      .sort((a, b) => {
        if (a.label.toLowerCase().includes('environment')) {
          return -1;
        }
        if (b.label.toLowerCase().includes('environment')) {
          return 1;
        }
        if (a.label.toLowerCase().includes('logitech')) {
          return -1;
        }
        if (b.label.toLowerCase().includes('logitech')) {
          return 1;
        }
        return a.label.localeCompare(b.label);
      });
    this.device = this.devices[0];
    this.form.get('cameraSelect')?.setValue(this.devices[0]);
    this.enable = true;
  }

  onScanComplete(result: Result) {
    if (result?.getText()?.length > 0) {
      this.router.navigate([`member/${this.indvId}/${this.scanType}/result/${result.getText()}`])
    }
  }
}
