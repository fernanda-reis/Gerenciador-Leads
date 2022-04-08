import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaLeadComponent } from './nova-lead.component';

describe('novaLeadComponent', () => {
  let component: NovaLeadComponent;
  let fixture: ComponentFixture<NovaLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
