import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/models/image.interface';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  image!: Image;
  showSpinner: boolean = false;
  showData: boolean = false;
  constructor(
    private imagesService: ImagesService,
    // to read parameter from url
    private activatedRoute: ActivatedRoute,
    //to redirect the user of this wiev if we don´t have a valid identifier
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showSpinner = true;
    const identifier = this.activatedRoute.snapshot.paramMap.get('id')!;
    //s console.log('identifier --> ', identifier);
    this.imagesService.getImageById(identifier).subscribe((image) => {
      if (!image) {
        return this.router.navigateByUrl('/');
      }

      this.image = image[0];
      // console.log('Image --> ', image);
      this.showSpinner = false;
      return;
    });
  }
  showDetails(): void {
    if (this.showData == false) {
      this.showData = true;
    } else {
      this.showData = false;
    }
  }
}
