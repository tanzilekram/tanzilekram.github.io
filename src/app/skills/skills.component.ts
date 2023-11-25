import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  skills = [
    {
      name: 'HTML5',
      src: '../../assets/img/external/svg/html.svg',
    },
    {
      name: 'CSS3',
      src: '../../assets/img/external/svg/css..svg',
    },
    {
      name: 'JavaScript',
      src: '../../assets/img/external/svg/javascript.svg',
    },
    {
      name: 'TypeScript',
      src: '../../assets/img/external/svg/typescript.svg',
    },
    {
      name: 'Angular',
      src: '../../assets/img/external/svg/angular.svg',
    },
    {
      name: 'API',
      src: '../../assets/img/external/svg/api.svg',
    },
    {
      name: 'Bootstrap',
      src: '../../assets/img/external/svg/bootstrap.svg',
    },
    {
      name: 'Tailwind CSS',
      src: '../../assets/img/external/svg/tailwind..svg',
    },
    {
      name: 'Java',
      src: '../../assets/img/external/svg/java.svg',
    },
    {
      name: 'Spring Boot',
      src: '../../assets/img/external/svg/spring.svg',
    },
    {
      name: 'Wordpress',
      src: '../../assets/img/external/svg/wordpress.svg',
    },
    {
      name: 'Git',
      src: '../../assets/img/external/svg/git..svg',
    },
    {
      name: 'GitHub',
      src: '../../assets/img/external/svg/github.svg',
    },
    {
      name: 'Material UI',
      src: '../../assets/img/external/svg/mui..svg',
    },
    {
      name: 'Node JS',
      src: '../../assets/img/external/svg/nodejs.svg',
    },
    {
      name: 'MySQL',
      src: '../../assets/img/external/svg/sql.svg',
    },
    {
      name: 'Postman',
      src: '../../assets/img/external/svg/postman.svg',
    },
    {
      name: 'VS Code',
      src: '../../assets/img/external/svg/visualstudiocode.svg',
    },
  ];
}
