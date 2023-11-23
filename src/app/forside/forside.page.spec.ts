import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForsidePage } from './forside.page';

describe('ForsidePage', () => {
  let component: ForsidePage;
  let fixture: ComponentFixture<ForsidePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForsidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
