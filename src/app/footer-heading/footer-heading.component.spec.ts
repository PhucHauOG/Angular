import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHeadingComponent } from './footer-heading.component';

describe('FooterHeadingComponent', () => {
  let component: FooterHeadingComponent;
  let fixture: ComponentFixture<FooterHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
