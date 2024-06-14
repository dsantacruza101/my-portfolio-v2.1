import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

  public route = inject(Router)

  onClick() {
    this.route.navigate(['myPortfolio'])
  }
}
