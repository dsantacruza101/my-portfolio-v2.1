import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [RouterModule, SharedModule],
  templateUrl: './portfolio-layout.component.html',
  styleUrl: './portfolio-layout.component.css'
})
export default class PortfolioLayoutComponent {

  public items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Dashboard', icon: 'pi pi-home' },
            { label: 'Transactions', icon: 'pi pi-chart-line' },
            { label: 'Products', icon: 'pi pi-list' },
            { label: 'Messages', icon: 'pi pi-inbox' }
        ]
    }

}
