import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlickrService } from 'src/app/services/flickr.service';

@Component({
  selector: 'app-viewimage',
  templateUrl: './viewimage.component.html',
  styleUrls: ['./viewimage.component.css'],
})
export class ViewimageComponent implements OnInit {
  image: any;
  imageUrl: any;
  imageArray: any;
  reviewForm: any;
  id: any;

  constructor(
    private flickr: FlickrService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
    let imageArray: any = localStorage.getItem('imageData');
    this.imageArray = JSON.parse(imageArray);
    this.image = this.imageArray.filter((item: any) => {
      return item.id == this.id;
    });
    this.imageUrl = this.image[0].url;
  }

  save() {
    console.log(this.reviewForm.value);
    let index = this.imageArray.findIndex((item: any) => {
      console.log(item.id, this.id);
      return item.id == this.id;
    });
    console.log(index, 'index.');
    this.imageArray[index]['review'] = this.reviewForm.value;
    localStorage.setItem('imageData', JSON.stringify(this.imageArray));
    this.router.navigate(['']);
  }
  ngOnInit(): void {
    // this.getImage();
    this.reviewForm = this.fb.group({
      rating: ['', [Validators.required]],
      providedBy: ['', [Validators.required]],
      reason: ['', [Validators.required]],
    });
  }
}
