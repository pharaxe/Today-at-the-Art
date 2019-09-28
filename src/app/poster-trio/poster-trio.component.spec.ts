import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterTrioComponent } from './poster-trio.component';

describe('PosterTrioComponent', () => {
  let component: PosterTrioComponent;
  let fixture: ComponentFixture<PosterTrioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterTrioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterTrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
