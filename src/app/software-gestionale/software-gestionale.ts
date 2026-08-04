import { Component, CUSTOM_ELEMENTS_SCHEMA, TemplateRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-software-gestionale',
  standalone: true,
  templateUrl: './software-gestionale.html',
  styleUrl: './software-gestionale.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwareGestionale {

  selectedImage = '';

  openImageDetails(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = '';
  }
}