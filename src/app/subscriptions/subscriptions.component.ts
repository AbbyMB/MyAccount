import { Component, OnInit } from '@angular/core';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { DataService } from '../core/data.service';
import { ISubscription } from '../shared/interfaces';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: ISubscription[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSubscriptions()
      .subscribe((subscriptions: ISubscription[]) => this.subscriptions = subscriptions);
  }

}
