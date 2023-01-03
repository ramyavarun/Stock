import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocknewsComponent } from './stocknews.component';

describe('StocknewsComponent', () => {
  let component: StocknewsComponent;
  let fixture: ComponentFixture<StocknewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocknewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocknewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
