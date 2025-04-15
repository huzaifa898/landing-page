import { Component } from '@angular/core';
import { ContactHeroComponent } from '../../contact-hero/contact-hero.component';
import { ConnectComponent } from '../../connect/connect.component';
import { BulkOrderComponent } from '../../bulk-order/bulk-order.component';
@Component({
  selector: 'app-contact-us',
  imports: [
    ContactHeroComponent,
    ConnectComponent,
    BulkOrderComponent
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
