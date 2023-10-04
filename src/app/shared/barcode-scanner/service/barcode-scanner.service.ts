import {Injectable} from '@angular/core';
import Quagga, {QuaggaJSResultCallbackFunction, QuaggaJSResultObject} from "@ericblade/quagga2";

@Injectable({
  providedIn: 'root',
})
export class BarcodeScannerService {
  private started = false;

  initialize(constraints: MediaTrackConstraints): Promise<void> {
    return Quagga.init({
      inputStream: {
        type: 'LiveStream',
        constraints,
        area: {top: '25%', right: '10%', left: '10%', bottom: '25%'},
        target: document.querySelector('#scanner-container') ?? undefined,
      },
      decoder: {
        readers: ["code_128_reader",
          "ean_reader",
          "ean_8_reader",
          "code_39_reader",
          "code_39_vin_reader",
          "codabar_reader",
          "upc_reader",
          "upc_e_reader",
          "i2of5_reader"],
        multiple: false,
      },
      locate: true,
    }).then(() => {
      this.started = true;
      Quagga.start();
    });
  }

  onDetected(callback: QuaggaJSResultCallbackFunction): void {
    Quagga.onDetected((result: QuaggaJSResultObject) => {
      Quagga.pause();

      // Validate the result object and the detected code
      if (result && result.codeResult && result.codeResult.code) {
        console.log('Detected code:', result.codeResult.code);
        callback(result);
      } else {
        Quagga.start();
      }
    });
  }


  stop(): void {
    if (this.started) {
      Quagga.offDetected();
      Quagga.stop();
      this.started = false;
    }
  }

}
