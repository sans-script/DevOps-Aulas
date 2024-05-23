import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWindowComponent } from './content-window.component';

describe('ContentWindowComponent', () => {
  let component: ContentWindowComponent;
  let fixture: ComponentFixture<ContentWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
