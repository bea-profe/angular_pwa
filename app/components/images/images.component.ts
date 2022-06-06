import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/models/image.interface';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-images',

  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100),
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class ImagesComponent implements OnInit {
  images: Image[] = [];
  showSpinner: boolean=false;

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.imagesService.getAllImages().subscribe((resp) => {
      this.images = resp;
      console.log(resp);
      this.showSpinner = false;
    });
    //.subscribe((images) => console.log(images));
  }
}
