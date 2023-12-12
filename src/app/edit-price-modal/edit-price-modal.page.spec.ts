import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPriceModalPage } from './edit-price-modal.page';

describe('EditPriceModalPage', () => {
  let component: EditPriceModalPage;
  let fixture: ComponentFixture<EditPriceModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditPriceModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
