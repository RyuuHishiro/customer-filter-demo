import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerFilterPage } from './costumer-filter.page.component';

describe('CostumerFilterPageComponent', () => {
  let component: CostumerFilterPage;
  let fixture: ComponentFixture<CostumerFilterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostumerFilterPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CostumerFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
