import { Injectable } from '@angular/core';
import {ProjectModel} from '../models/Project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  projects: ProjectModel[] = [
    {
      id: 0,
      name: "Addy",
      shortBlurb: "An application for collaboration among college students",
      description: "Addy is a project currently in the works that will act as a large-scale social and academic interaction and collaboration platform among college students. It includes the capability to join all current classes through the app and anonymously share messages, posts, and files among peers.",
      color: '#ff2a80',
      dates: [new Date(2019, 4, 1), null],
      techs: [
        {name: "React Native", url: "https://reactnative.dev/", color: "blue"},
        {name: "Firebase", url: "https://firebase.google.com/", color: "#ffcb2b"}
        ],
      images: ['addypic1.png'],
      website: 'https://addy.app/',
      source: null
    },
    {
      id: 1,
      name: "PharmD Tracker",
      shortBlurb: "Web application for Northeastern University's pharmacy school admins to track student academic data",
      description: "PharmD tracker allows the administrators of the pharmacy school at Northeastern University to easily manage student student data, including grades, graduation schedule, notes, and much more. They can import data from spreadsheets or manually, and access the application from any web-connected computer. Developed as part of a team of 6 in Northeastern's Sandbox software consultancy, this project is currently in the works and planned to be rolled out in fall 2020.",
      color: '#5623EE',
      dates: [new Date(2020, 1, 1), null],
      techs: [
        {name: "React", url: "https://reactjs.org", color: "#61dafb"},
        {name: 'Node.js', url: 'https://nodejs.org/en/', color: '#026700'},
        {name: "PostgreSQL", url: "https://www.postgresql.org/", color: "#285777"},
        {name: "Sequelize", url: "https://sequelize.org/", color: "#03afef"}
        ],
      images: [],
      source: 'https://github.com/sandboxnu/pharmd-tracker-backend',
      website: 'https://github.com/sandboxnu/pharmd-tracker'
    },
    {
      id: 2,
      name: "Lit or Lame",
      shortBlurb: "A website for posting ideas and content with an easy rating system",
      description: "Lit or Lame is a social website on which users can rate whether things are lit or lame and add comments about why they think so. It's that easy! After making an account and signing in, users can also create their own public post, which includes a short text description and optional image, for others to rate and talk about. After rating a post, users get to see what percentage of people thought it was lit vs lame!",
      color: '#ed727f',
      dates: [new Date(2019, 4, 1), new Date(2019, 4, 1)],
      techs: [
        {name: "React", url: "https://reactjs.org", color: "#61dafb"},
        {name: "Firebase", url: "https://firebase.google.com/", color: "#ffcb2b"}
        ],
      images: ['litorlamepic1.png', 'litorlamepic1.png'],
      website: 'http://www.litorlame.com/',
      source: 'https://github.com/chessmyers/lit-or-lame'
    },
    {
      id: 3,
      name: "GenLab",
      shortBlurb: "An easy-to-configure tool for testing game-theoretical models",
      description: "GenLab is a highly customizable game-theoretical model viewer that can run in any modern web browser. It can be used to model classic games such as the Prisoner's Dilemma or Hawk-Dove, as well as completely original games. It allows for input of up to 16 different strategies, with options for changing network type (2D vs 1D), wrapping, the neighborhood type (Moore or Von Neumann), network width, learning method (imitate-the-best, myopic best response, or probabilistic imitation), and initial percentage of each strategy.",
      color: '#ffebcd',
      dates: [new Date(2018, 11, 1), new Date(2018, 11, 1)],
      techs: [
        {name: "Angular", url: "https://angular.io/", color: "#dd0031"},
      ],
      images: ['genlabpic1.png'],
      website: 'https://chessmyers.github.io/GenLab/',
      source: 'https://github.com/chessmyers/GenLab'
    },
    {
      id: 4,
      name: "The Loyola Hub",
      shortBlurb: "An app for students of Loyola High School",
      description: "The Loyola Hub is an app created for my high school. It allows students to access daily announcements, the school calendar, their grades, a GPA calculator, news articles, and much more. This was the first mobile app I created and a fun project to learn about the challenges of targeting multiple operating systems, screen sizes, and app stores. This was also my first foray into using the Ionic Framework and Angular.",
      color: "#02163b",
      dates: [new Date(2017, 4, 1), new Date(2017, 9, 1)],
      techs: [
        {name: "Ionic Framework", url: "https://ionicframework.com/", color: '#3880ff'},
        {name: "Angular", url: "https://angular.io/", color: "#dd0031"},
        ],
      images: ['loyolahub.jpeg'],
      website: 'https://appadvice.com/app/the-loyola-hub/1293595176',
      source: 'https://github.com/chessmyers/Loyola-App'
    },
    {
      id: 5,
      name: "Loot",
      shortBlurb: "Loot is a hackathon project that presents a user with a stream relevant products in short bites",
      description: `Loot was born out numerous iterations of an idea that started out as an app for arranging item exchanges and transactions among college students. After realizing there was no need to limit the user base in this way, we began thinking about ways we could design an e-commerce experience that would make it easy to use and promote spontaneous purchases.

Eventually we came up for the idea of an app that shows users products in a continuous stack of cards which would allow them to swipe in one of three directions to indicate their feeling about the product. If they swipe left on the product, that indicates they do not like it. Swiping right indicates they do like the product and want to add it to a "wish list" they can go back to later. Swiping up on a product adds it to their shopping cart, which then allows them to easily purchase it, as well as anything else added to the cart, on the next screen. This system of shopping allows for a continuous stream of user information and preferences to be collected, analyzed, and used to refine which products to show to which users.

This project won us the Best UX/UI Design and Best Use of Moltin API awards at this hackathon. We were then able to meet with the Moltin staff at their office in downtown Boston to describe our app idea to them. There are currently no plans to continue developing this project, but the experience was extremely valuable.`,
      color: '#be2400',
      dates: [new Date(2019, 1, 1), new Date(2019, 1, 1)],
      techs: [
        {name: "Ionic Framework", url: "https://ionicframework.com/", color: '#3880ff'},
        {name: "Angular", url: "https://angular.io/", color: "#dd0031"},
      ],
      images: ['lootpic1.jpg', 'lootpic2.jpg'],
      website: null,
      source: 'https://github.com/chessmyers/Loot'
    },
    {
      id: 6,
      name: "The NU Co-op Search",
      shortBlurb: "The NU Co-op Search is a hackathon project that aims to reinvent the way students search for co-ops",
      description: `The NU Co-op Search (NU pronounced as "new") is a project that aims to reinvent the way students search for co-ops at Northeastern University. Every semester, students return from their co-op experiences and complete a form for their advisers that includes many questions about their overall experience on the co-op. This form is then used solely within the sphere of the co-op advisers and perhaps for some statistical analysis; but, for the most part, this valuable information is kept private from NU students searching for their own co-ops.

The goal of the NU Co-op Search, which in its current state acts more of a proof of concept than a concrete beginning to the project, aims to be a new place for students to submit reviews of the co-ops they've worked. As reviews come in, the system uses the IBM machine learning API to generate an aggregate rating of each company based on a combination of the word sentiment and numerical ratings from each review. The form also includes questions about company culture and professionalism that can help prospective employees determine if the company is a good fit for them.

This project won 3rd place at HuskyHacks 2019. Plans for future development persist, but require approval and endorsement from the school that haven't been obtained yet.`,
      color: '#6a808b',
      dates: [new Date(2019, 2, 1), new Date(2019, 2, 1)],
      techs: [
        {name: "Vanilla JS/HTML/CSS", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "#efd81d"},
        {name: "UIKit", url: "https://getuikit.com/", color: "#2191f2"}
      ],
      images: ['nucoopsearch1.png', 'nucoopsearch2.png'],
      website: null,
      source: 'https://github.com/chessmyers/theNUCoopSearch'
    },
    {
      id: 7,
      name: "TrashTag",
      shortBlurb: "A project that allows users to host trash pickups in their community",
      description: `TrashTag is a website that allows users to plan trash pickups in their community and get connected with ones planned by other like-minded individuals. We settled on this idea because we saw it as something that could benefit others (communities and the planet) and also be an ideal candidate for becoming a mobile app. And we had a catchy name.

                    This project won Best Use of Snapchat API at HackDartmouth 2019. There are no current plans for future development.`,
      color: '#43a047',
      dates: [new Date(2019, 3, 1), new Date(2019, 3, 1)],
      techs: [
        {name: "VanillaJS/HTML/CSS", url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', color: '#efd81d'},
        {name: "Firebase", url: "https://firebase.google.com/", color: "#ffcb2b"},
        {name: "TomTom API", url: "https://www.tomtom.com/en_us/", color: "#323232"},
        {name: "Snap Kit API", url: 'https://kit.snapchat.com/', color: '#6611bd'}
      ],
      images: ['trashpic1.png', 'trashpic2.png', 'trashpic3.png', 'trashpic4.png'],
      website: "https://trashtag.christopermyers.info/",
      source: "https://github.com/chessmyers/TrashTag"
    },
    {
      id: 8,
      name: "FinAid",
      shortBlurb: "A web app that allows users to track expenses while working towards a goal",
      description: "This hackathon project was created by my team and I at BostonHacks 2019. Blurb: Sometimes managing your finances just gets too difficult. With FinApp, your CapitalOne transactions can be aggregated and displayed all in one place. With the Goals feature, you can also determined how far away you are from purchasing a big item and whether or not purchasing it would be a good idea in the first place.",
      color: '#b671de',
      dates: [new Date(2019, 10, 1), new Date(2019, 10, 1)],
      techs: [
        {name: "React", url: "https://reactjs.org", color: "#61dafb"},
        {name: 'Node.js', url: 'https://nodejs.org/en/', color: '#026e00'}
      ],
      images: ['finaid1.PNG', 'finaid2.PNG', 'finaid3.PNG'],
      website: "https://finaid.christophermyers.info",
      source: "https://github.com/chessmyers/FinancialApp"
    },
    {
      id: 9,
      name: "Magic 3 Light",
      shortBlurb: "The Magic 3 Light is a programmed Particle Argon that answers questions users ask, storing their questions and their answers for later viewing",
      description: `
      My teammate and I entered this hackathon with the goal of working on a project using only technology that both of us were completely new to or had limited experience with. After attending the various workshops throughout the day and exploring the hardware room, we decided we wanted to build something that would require both a Particle Argon and a web app using Flask and a SQL database.

      Any user can ask the Magic 3 Light a question through our web interface, and the Particle Argon will sequentially pulse, slot-machine style, and create suspense until it stops on one of the three lights, which represent yes, no, or maybe. The information is then displayed on the website and added to a log of all of the questions and answers.

      We started building this project by adding the 3 LED lights to the Particle Argon circuit board. Then, we coded the lighting sequence for the particle in Arduino. We utilized Flask to build our web interface and used http post requests to transfer the information between our particle and web app.
      `,
      color: '#00aeef',
      dates: [new Date(2020, 0, 1), new Date(2020, 0, 1)],
      techs: [
        {name: "Particle Argon Circuit Board", url: "https://docs.particle.io/argon/", color: "#00aeef"},
        {name: "Arduino", url: "https://www.arduino.cc/", color: "#00979d"},
        {name: "Flask", url: "https://flask.palletsprojects.com/en/1.1.x/", color: "#323232"},
        {name: "Jinja", url: "https://jinja.palletsprojects.com/en/2.11.x/", color: "#b41717"}
      ],
      images: ['chungus.jpg'],
      website: null,
      source: "https://github.com/jalajs/Magic-3-Light"
    },
    {
      id: 10,
      name: "What's Mappening?",
      shortBlurb: "This hackathon project lets users easily find out and post what's going on in their city",
      description: `This project was created at HackBeanpot 2020 by my 4 teammates and I. I worked primarily on implementing the backend--my first time working with Node.js. Blurb:
      Come find out what's happening on the map, or.... what's Mappening!

      Our project is a web-based application that allows users to interact with an in-browser map and view different geo-tagged events/activites that are happening nearby. These events/activites can be clicked to view a description as well as a geographical location; allowing users to attend any geo-tagged activity of their choosing. For organizers and users looking to advertise their events/activities, a form is available to submit necessary information required to create a geo-tag of their own.`,
      color: '#7347fd',
      dates: [new Date(2020, 1, 1), new Date(2020, 1, 1)],
      techs: [
        {name: "Angular", url: "https://angular.io/", color: "#dd0031"},
        {name: 'Node.js', url: 'https://nodejs.org/en/', color: '#026e00'},
        {name: "PostgreSQL", url: "https://www.postgresql.org/", color: "#336791"},
        {name: "Sequelize", url: "https://sequelize.org/", color: "#03afef"}
      ],
      images: ['mappening1.jpg', 'mappening2.jpg', 'mappening3.jpg'],
      website: null,
      source: 'https://github.com/eogra7/mappening'
    },
    {
      id: 11,
      name: "christophermyers.info",
      shortBlurb: "The website you're currently viewing!",
      description: "Take a look around! This is my second stab at making a person site, this time using Angular (way overkill, for sure) and including more varied content. It was a lot of fun to make, and I plan on keeping it as up-to-date as possible",
      color: "#81d163",
      dates: [new Date(2020, 7, 1), new Date(2020, 7, 1)],
      techs: [
        {name: "Angular", url: "https://angular.io/", color: "#dd0031"},
        {name: "Prismic", url: "https://prismic.io/", color: "#6884f5"}
      ],
      images: [],
      website: 'christophermyers.info',
      source: 'https://github.com/chessmyers/new-personal-site'
    },
    {
      id: 12,
      name: "Excel (Basic Java Version)",
      shortBlurb: "A spreadsheet application implemented using Java Swing",
      description: "This is the final project for CS3500: Object Oriented Design at Northeastern University. It is a desktop spreadsheet application that allows users to edit data in cells, load from and save to text files, input numbers, strings, booleans, and formulas referencing other cells, and scroll vertically or horizontally up to 10,000 cells",
      color: "#ffdf43",
      dates: [new Date(2019, 9, 1), new Date(2019, 11, 1)],
      techs: [
        {name: "Java 8", url: 'https://www.java.com/en/', color: '#eb0100' }
      ],
      images: ['spreadsheet1.PNG', 'spreadsheet2.PNG'],
      website: null,
      source: 'https://github.com/chessmyers/CS3500-Spreadsheet'
    }


  ];

  getProjects(): ProjectModel[] {
    return this.projects;
  }

  getProject(id: number): ProjectModel {
    return this.getProjects().find(exp => exp.id === id);
  }

}
