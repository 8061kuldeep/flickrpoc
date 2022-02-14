import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlickrService } from 'src/app/services/flickr.service';

@Component({
  selector: 'app-listimage',
  templateUrl: './listimage.component.html',
  styleUrls: ['./listimage.component.css'],
})
export class ListimageComponent implements OnInit {
  images: any;
  constructor(private flickrservice: FlickrService, private router: Router) {
    //

    if (localStorage.getItem('imageData')) {
      let imageArray: any = localStorage.getItem('imageData');
      this.images = JSON.parse(imageArray);
      console.log(this.images, 'updateing.');
    } else {
      this.getImage();
    }
    console.log('first time.');
  }
  getImage() {
    console.log('in component');
    this.flickrservice
      .getImages()
      .pipe()
      .subscribe({
        next: (res: any) => {
          console.log(res);
          let urlArr: any = [];
          res.photos.photo.forEach((item: any) => {
            const photoObj = {
              url: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`,
              id: item.id,
              title: item.title,
            };
            urlArr.push(photoObj);
          });
          console.log(urlArr, 'urlArry');
          this.images = urlArr;
          localStorage.setItem('imageData', JSON.stringify(this.images));
        },
        error: (error) => {
          console.log(error, 'error');
        },
      });
  }
  chooseImaeg(imagedata: any) {
    console.log(imagedata);
    this.flickrservice.emitEvent(imagedata);
    this.router.navigate([`viewImage/${imagedata.id}`]);
  }
  ngOnInit(): void {}
}
