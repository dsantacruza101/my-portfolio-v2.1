import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [RouterModule, SharedModule],
  templateUrl: './portfolio-layout.component.html',
  styleUrl: './portfolio-layout.component.css'
})
export default class PortfolioLayoutComponent {

}
