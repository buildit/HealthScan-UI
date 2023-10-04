import {OnInit, Directive, Injector} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {HealthscanGatewayService} from "../../../service/healthscan-gateway/healthscan-gateway.service";
import {v4 as uuidv4} from 'uuid';
import {filter, map, take, tap} from 'rxjs';
import {BarcodeCategory} from "../../../model/Barcode.model";

@Directive()
export abstract class BaseResultsComponent<T> implements OnInit {
  form!: FormGroup;
  requestId: string = '';
  abstract barcodeCategory: BarcodeCategory;
  abstract formModel: FormGroup;

  protected route: ActivatedRoute;
  protected router: Router;
  protected gatewayService: HealthscanGatewayService;

  protected constructor(private injector: Injector) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.gatewayService = this.injector.get(HealthscanGatewayService);
  }

  ngOnInit(): void {
    this.requestId = uuidv4();
    this.form = this.formModel;
    const barcode: string | null = this.route.snapshot.paramMap.get('barcode') || '';

    this.gatewayService.getBarcodeDetails({barcode, category: this.barcodeCategory})
      .pipe(take(1),
        filter(x => x && x?.barcodeItem.barcodeType === this.barcodeCategory),
        tap(x => console.log(x)),
        map(x => (x as T))
      )
      .subscribe((value: T) => {
        console.log(value);
        this.populateForm(this.form, value);
      });
  }

  abstract populateForm(form: FormGroup, model: T): void;

  abstract mapFormToModel(form: FormGroup): T;

  submitForm(): void {
    const model = this.mapFormToModel(this.form);
    // this.gatewayService.submitBarcode({
    //   category: model.barcodeCategory,
    //   barcode: model.barcodeItem.barcode,
    // });
    // TODO: SEND TO API
    this.router.navigate(['/request-submitted'], {queryParams: {requestId: this.requestId}});
  }
}
