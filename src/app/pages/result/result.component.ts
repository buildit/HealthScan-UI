import {Component, OnInit} from '@angular/core';
import {isScanType, ScanType, ScanTypeMap} from "../../utils/scan.utl";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  indvId!: string;
  scanTypePretty!: string;
  barcode!: string;
  protected readonly window = window;
  private scanType!: ScanType;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.indvId = this.route.snapshot.params['indvId'];
    this.scanType = this.route.snapshot.params['scanType'];
    this.barcode = this.route.snapshot.params['barcode'];
    if (isScanType(this.scanType)) {
      this.scanTypePretty = ScanTypeMap[this.scanType];
    }
  }
}
