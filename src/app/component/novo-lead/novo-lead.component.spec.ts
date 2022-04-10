import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoLeadComponent } from './novo-lead.component';

describe('novoLeadComponent', () => {
  let component: NovoLeadComponent;
  let fixture: ComponentFixture<NovoLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
