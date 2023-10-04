import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-request-submitted',
  templateUrl: './request-submitted.component.html',
  styleUrls: ['./request-submitted.component.scss']
})
export class RequestSubmittedComponent implements OnInit {
  requestId: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.requestId = this.route.snapshot.queryParamMap.get('requestId') || '';
  }


}
