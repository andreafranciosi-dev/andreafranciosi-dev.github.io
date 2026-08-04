import { Component, CUSTOM_ELEMENTS_SCHEMA, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-software-gestionale',
  standalone: true,
  imports: [
    NgbModule
  ],
  templateUrl: './software-gestionale.html',
  styleUrl: './software-gestionale.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwareGestionale {

  selectedImage = '';

  @ViewChild('imageModal') imageModal!: TemplateRef<any>;

  constructor(
    private modalService: NgbModal
  ) {}

  openImageDetails(imageUrl: string) {
    this.selectedImage = imageUrl;

    this.modalService.open(this.imageModal, {
      centered: true,
      size: 'xl'
    });
  }

  closeModal(){
    this.selectedImage = '';
    this.modalService.dismissAll();
  }
}