import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Html5QrcodeScanner} from 'html5-qrcode';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Html5QrcodeError} from "html5-qrcode/src/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('scanner') scannerElement!: ElementRef;
    qrResultString: string | null = null;
    deviceLocation: any;
    qrCodeMetadata: any | null = null;

    private html5QrcodeScanner!: Html5QrcodeScanner;

    constructor(private http: HttpClient, private snackBar: MatSnackBar) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.deviceLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
            });
        }
    }


    ngAfterViewInit() {
        const scannerId = this.scannerElement.nativeElement.id;

        const config = {
            fps: 10,
            qrbox: {width: 400, height: 250},
            rememberLastUsedCamera: true,
            showTorchButtonIfSupported: true
        };

        this.html5QrcodeScanner = new Html5QrcodeScanner(scannerId, config, false);
    }

    startScanning() {
        const onScanSuccess = (decodedText: string, decodedResult: any) => {
            this.qrResultString = decodedText;
            // Capture the metadata
            this.qrCodeMetadata = {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                location: this.deviceLocation
            };

            // Get the IP address from a public API
            this.http.get<{ ip: string }>('https://api.ipify.org?format=json').subscribe(response => {
                this.qrCodeMetadata.ipAddress = response.ip;
                console.log(`Code matched = ${decodedText}`, this.qrCodeMetadata);
                this.html5QrcodeScanner.clear();
            });
        };

        const onScanError = (errorMessage: string, error: Html5QrcodeError): void => {
            if (error.type !== 0) {
                this.openSnackBar(`Scan Error: ${errorMessage}`, '⚠️');
            }
        };
        this.html5QrcodeScanner.render(onScanSuccess, onScanError);
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
