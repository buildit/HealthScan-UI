import {BarcodeCategory} from "../../model/Barcode.model";

export interface HealthscanGatewayResponseWrapper<T> {
  status: string
  data: T
  message: string
}

export interface HealthscanGatewayDataResponse {
  status: string
  confirmationCode: string
}

export interface HealthscanGatewayRequest<T> {
  barcode: string;
  category: BarcodeCategory;
  data?: T;
}
