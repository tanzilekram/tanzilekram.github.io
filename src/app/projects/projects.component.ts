import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  projects = [
    {
      Name: 'Headline Horizon',
      Link: 'https://github.com/tanzilekram/Headline-Horizon',
      screenshot:
        '../../assets/img/external/Project-screenshots/HeadlineHorizon.png',
      Desc: 'This Website is a Personal Project Developed For Presenting Top News Headlines',
      stack: [
        {
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          img: '../../assets/img/external/svg/typescript.svg',
        },
        {
          img: '../../assets/img/external/svg/angular.svg',
        },
      ],
    },
    {
      Name: 'CricLiveScores Webapp',
      Link: 'https://github.com/tanzilekram/CricLiveScores-Frontend',
      screenshot:
        '../../assets/img/external/Project-screenshots/CricLiveScores.png',
      Desc: 'Watch Live Cricket Scores and Past Match Score Including Points Table',
      stack: [
        {
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          img: '../../assets/img/external/svg/typescript.svg',
        },
        {
          img: '../../assets/img/external/svg/angular.svg',
        },
        {
          img: '../../assets/img/external/svg/spring.svg',
        },
        {
          img: '../../assets/img/external/svg/sql.svg',
        },
       
      ],
    },
    {
      Name: 'Employee Management Application',
      Link: 'https://github.com/tanzilekram/Employee-Management-Application',
      screenshot:
        '../../assets/img/external/Project-screenshots/Employee.jpg',
      Desc: 'Build an Employee Management System using Spring Boot where administrators can perform CRUD operations (Create, Read, Update, Delete) on employee details. ',
      stack: [
        {
          img: '../../assets/img/external/svg/spring.svg',
        },
        {
          img: '../../assets/img/external/svg/postman.svg',
        },
        {
          img: '../../assets/img/external/svg/api.svg',
        },
      ],
    },
    {
      Name: 'Aahar Adda Catering Service',
      Link: '',
      screenshot: '../../assets/img/external/Project-screenshots/Aahar.png',
      Desc: 'This is My Final Year B.Tech project where Create an elegant catering website for users to view services, make bookings, and contact us. Admin features include updating the price list, offering streamlined catering service management with a modern interface',
      stack: [
        {
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          img: '../../assets/img/external/svg/javascript.svg',
        },
        {
          img: '../../assets/img/external/svg/typescript.svg',
        },
        {
          img: '../../assets/img/external/svg/angular.svg',
        },
      ],
    },
  ];
}
