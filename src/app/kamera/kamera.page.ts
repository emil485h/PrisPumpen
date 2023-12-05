import { Component, OnInit } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-kamera',
  templateUrl: './kamera.page.html',
  styleUrls: ['./kamera.page.scss'],
})
export class KameraPage implements OnInit {

  constructor(public photoService: PhotoService,
              public actionSheetController: ActionSheetController,
              private router: Router) { }
              
              public async showActionSheet(photo: UserPhoto, position: number) {
                const actionSheet = await this.actionSheetController.create({
                  header: 'Photos',
                  buttons: [{
                    text: 'Delete',
                    role: 'destructive',
                    icon: 'trash',
                    handler: () => {
                      this.photoService.deletePicture(photo, position);
                    }
                  }, {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                      // Nothing to do, action sheet is automatically closed
                      }
                  }]
                });
                await actionSheet.present();
              }
              
addPhotoToGallery() {
  this.photoService.addNewToGallery();
}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  goBack() {
    this.router.navigate(['/forside']);
  }

}

