import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KameraPage } from './kamera.page';

describe('KameraPage', () => {
  let component: KameraPage;
  let fixture: ComponentFixture<KameraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
