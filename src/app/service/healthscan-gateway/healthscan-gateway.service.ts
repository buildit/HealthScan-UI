import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {
  HealthscanGatewayDataResponse,
  HealthscanGatewayRequest,
  HealthscanGatewayResponseWrapper
} from "./healthscan-gateway.model";

@Injectable({
  providedIn: 'root'
})
export class HealthscanGatewayService {
  private static scanUrl = 'http://localhost:8080/api/barcode/scan';

  constructor(private readonly http: HttpClient) {
  }

  scanBarcode(request: HealthscanGatewayRequest): Observable<HealthscanGatewayDataResponse> {
    return this.http.post<HealthscanGatewayResponseWrapper>(HealthscanGatewayService.scanUrl, request)
      .pipe(map((response) => {
        if (response.status === 'success') {
          return response.data;
        }
        throw new Error(response.message);
      }));
  }
}
