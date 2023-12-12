import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-price-modal',
  templateUrl: './edit-price-modal.page.html',
  styleUrls: ['./edit-price-modal.page.scss'],
})
export class EditPriceModalPage {
  @Input() price95?: number;
  @Input() price100?: number;
  @Input() priceDiesel?: number;

  // De nye priser som brugeren vil indtaste
  newPrice95: number;
  newPrice100: number;
  newPriceDiesel: number;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    // Initialiser dine lokale priser med de modtagne data, hvis de findes
    this.newPrice95 = this.price95 ?? null;
    this.newPrice100 = this.price100 ?? null;
    this.newPriceDiesel = this.priceDiesel ?? null;
  }

  save() {
    this.modalController.dismiss({
      newPrice95: this.newPrice95,
      newPrice100: this.newPrice100,
      newPriceDiesel: this.newPriceDiesel
    });
  }

  close() {
    this.modalController.dismiss();
  }
}