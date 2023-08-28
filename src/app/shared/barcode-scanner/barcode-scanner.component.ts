import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {BarcodeScannerService} from "./service/barcode-scanner.service";
import {QuaggaJSResultObject} from "@ericblade/quagga2";

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss']
})
export class BarcodeScannerComponent implements AfterViewInit, OnDestroy {
  started: boolean | undefined;
  errorMessage: string | undefined;
  lastScannedCode: string | null = null;
  torchEnabled: boolean = false;

  @Output() barcode = new EventEmitter<string | null>();
  @Output() manualEntry = new EventEmitter<void>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private barcodeScannerService: BarcodeScannerService
  ) {
  }

  ngAfterViewInit(): void {
    this.initializeScanner();
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
    console.warn('torch not implemented yet');
  }

  onBarcodeScanned(resultObject: QuaggaJSResultObject) {
    this.lastScannedCode = resultObject.codeResult.code;
    this.changeDetectorRef.detectChanges();
    this.barcode.emit(resultObject.codeResult.code); // Emitting the scanned code
  }

  ngOnDestroy() {
    this.barcodeScannerService.stop(); // Stopping Quagga through the service
  }

  private initializeScanner(): void {
    const constraints: MediaTrackConstraints = {facingMode: '',};

    this.barcodeScannerService.initialize(constraints)
      .then(() => {
        this.started = true;
        this.changeDetectorRef.detectChanges();
        this.barcodeScannerService.onDetected((code: QuaggaJSResultObject) => {
          this.onBarcodeScanned(code);
        });
      })
      .catch((err) => {
        this.errorMessage = `Initialization error: ${err}`;
        this.started = false;
      });
  }
}
