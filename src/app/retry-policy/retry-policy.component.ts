import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { RetryPolicyService } from '../services/retry-policy.service';

interface Data {
  title: string;
  body: string;
}


@Component({
  selector: 'app-retry-policy',
  templateUrl: './retry-policy.component.html',
  styleUrls: ['./retry-policy.component.css']
})
export class RetryPolicyComponent implements OnInit {

  data!: Data;

  constructor(
    /*private http: HttpClient*/
    private retryPolicyService: RetryPolicyService
  ) { }

  ngOnInit(): void {
  }

  /*callServiceExample() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(response => {
      console.log(response);
    });
  }*/

  callRetryPoliceServiceExample() {
    console.log('callRetryPoliceServiceExample');
    this.retryPolicyService.getData().subscribe((data: Data) => {
      this.data = data
    });
  }
}
