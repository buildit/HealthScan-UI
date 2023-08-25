import {HealthscanGatewayService} from "./healthscan-gateway.service";

export interface HealthscanGatewayResponseWrapper {
  status: string
  data: HealthscanGatewayDataResponse
  message: string
}

export interface HealthscanGatewayDataResponse {
  status: string
  confirmationCode: string
}

export interface HealthscanGatewayRequest {
  barcode: string;
  category: BarcodeCategory;
}
