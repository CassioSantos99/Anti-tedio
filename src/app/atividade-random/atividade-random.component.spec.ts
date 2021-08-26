import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeRandomComponent } from './atividade-random.component';

describe('AtividadeRandomComponent', () => {
  let component: AtividadeRandomComponent;
  let fixture: ComponentFixture<AtividadeRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadeRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
