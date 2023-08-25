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
      console.log('callback.codeResult', result);

      // Check if there's a valid result
      if (result && result.codeResult && result.codeResult.code) {
        const videoElement = document.querySelector('#scanner-container video');
        if (videoElement instanceof HTMLVideoElement) {
          videoElement.pause();
        }

        // Pause processing to freeze the frame
        Quagga.pause();
        //
        // const drawingCtx = Quagga.canvas.ctx.overlay,
        //   drawingCanvas = Quagga.canvas.dom.overlay;
        //
        // // Clear previous drawings
        // if (drawingCanvas.getAttribute("width") && drawingCanvas.getAttribute("height")) {
        //   const width = parseInt(drawingCanvas.getAttribute("width")!, 10);
        //   const height = parseInt(drawingCanvas.getAttribute("height")!, 10);
        //   drawingCtx.clearRect(0, 0, width, height);
        // }
        //
        // // Draw the result line
        // Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
      }

      return result;
    });
  }


  stop(): void {
    if (this.started) {
      Quagga.offDetected();
      this.started = false;
    }
  }

}
