import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymainComponent } from './mymain.component';

describe('MymainComponent', () => {
  let component: MymainComponent;
  let fixture: ComponentFixture<MymainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
