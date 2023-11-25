import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  contacts = [
    {
      class: 'fa-brands fa-x-twitter',
      social: 'TwitterX',
      description: 'Give me a Follow',
      link: 'https://twitter.com/tanzilekram',
    },
    {
      class: 'fa-solid fa-envelope',
      social: 'Contact Me',
      description: 'Drop me a Mail',
      link: 'mailto:tanzilekram@gmail.com',
    },
    {
      class: 'fa-brands fa-github',
      social: 'Github',
      description: 'Follow me on GitHub',
      link: 'https://github.com/tanzilekram',
    },
    {
      class: 'fa-brands fa-linkedin',
      social: 'LinkedIn',
      description: "Let's Connect on LinkedIn",
      link: 'https://www.linkedin.com/in/tanzilekram/',
    },
  ];
}
