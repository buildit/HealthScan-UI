import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {
  HealthscanGatewayDataResponse,
  HealthscanGatewayRequest,
  HealthscanGatewayResponseWrapper
} from "./healthscan-gateway.model";
import {environment} from "../../../environments/environment";
import {LabKit, Medication, WasteDisposalKit} from "../../model/Barcode.model";

@Injectable({
  providedIn: 'root'
})
export class HealthscanGatewayService {
  private static readonly baseURL = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {
  }

  submitBarcode(request: HealthscanGatewayRequest<null>): Observable<HealthscanGatewayDataResponse> {
    const url = `${HealthscanGatewayService.baseURL}/create`;
    return this.http.post<HealthscanGatewayResponseWrapper<HealthscanGatewayDataResponse>>(url, request)
      .pipe(map((response) => {
        if (response.status === 'success') {
          return response.data;
        }
        throw new Error(response.message);
      }));
  }

  getBarcodeDetails(request: HealthscanGatewayRequest<LabKit | Medication | WasteDisposalKit>): Observable<LabKit | Medication | WasteDisposalKit> {
    const url = `${HealthscanGatewayService.baseURL}/details/${request.category}`;
    const params = new HttpParams().set('barcode', request.barcode);

    return this.http.get<HealthscanGatewayResponseWrapper<LabKit | Medication | WasteDisposalKit>>(url, {params})
      .pipe(map((response) => {
        if (response.status === 'success') {
          return response.data;
        }
        throw new Error(response.message);
      }));
  }
}
