import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAPIComponent } from './make-api.component';

describe('MakeAPIComponent', () => {
  let component: MakeAPIComponent;
  let fixture: ComponentFixture<MakeAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MakeAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
