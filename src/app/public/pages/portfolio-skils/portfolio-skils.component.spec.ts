import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSkilsComponent } from './portfolio-skils.component';

describe('PortfolioSkilsComponent', () => {
  let component: PortfolioSkilsComponent;
  let fixture: ComponentFixture<PortfolioSkilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSkilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSkilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
