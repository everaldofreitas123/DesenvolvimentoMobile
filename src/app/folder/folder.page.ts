import { Component, inject, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import { Swiper } from 'swiper';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    'https://catracalivre.com.br/wp-content/uploads/sites/8/2016/08/artigos_esportivos_ronstik.jpg',
    'https://img.freepik.com/fotos-premium/equipamento-esportivo-pronto-para-o-jogo-foto-esportiva_1032986-10821.jpg?w=900',
    'https://www.monastirsardegna.it/uploads/articles/dataimages/IMG_0EE6EB-BF5F3D-2FFC83-2382EF-3FF09C-A05C0C.jpg',
    'https://img.freepik.com/fotos-premium/anuncios-de-artigos-esportivos-em-revistas_883586-27026.jpg?w=900',
  ];


  constructor() {}

  swiperSlideChanged(e:any){
    console.log('changed:', e)
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
