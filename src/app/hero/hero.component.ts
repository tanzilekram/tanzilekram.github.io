import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  github:string='Checkout my Github';
  linkedin:string='Checkout my LinkedIn';
  width:number=window.innerWidth;

  constructor() { }

  ngOnInit(): void {

    if(this.width<600){
      this.github='Follow me on Github';
      this.linkedin='Follow me on LinkedIn'
    }
  }

    openLink(url: string): void {
      window.open(url, '_blank');
    }

  
}
