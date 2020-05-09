import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  storeid:any
  storename:any
  constructor(private router: Router, private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params.storeid && params.storename) {
        this.storeid =params.storeid;
        this.storename=params.storename;
       
      }
    });
   }

  ngOnInit() {
  }
  onchatroom() {
    this.router.navigateByUrl("/chatroom")
  }
}
