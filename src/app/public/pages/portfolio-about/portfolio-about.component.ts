import { Component, OnInit, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ThemeService } from '../../../theme/theme.service';

@Component({
  selector: 'app-portfolio-about',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './portfolio-about.component.html',
  styleUrl: './portfolio-about.component.css'
})
export default class PortfolioAboutComponent implements OnInit{

  public selectedTheme: string = 'lara-light-teal';
  public checked:boolean = false;
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.switchTheme(this.selectedTheme);
  }

  changeTheme(theme: string) {
    console.log(theme);

    this.themeService.switchTheme(theme);
}
}
