# DevQuests v1.0 - E-Learning platform for developers
<!--
'########::'########:'##::::'##::'#######::'##::::'##:'########::'######::'########::'######::
 ##.... ##: ##.....:: ##:::: ##:'##.... ##: ##:::: ##: ##.....::'##... ##:... ##..::'##... ##:
 ##:::: ##: ##::::::: ##:::: ##: ##:::: ##: ##:::: ##: ##::::::: ##:::..::::: ##:::: ##:::..::
 ##:::: ##: ######::: ##:::: ##: ##:::: ##: ##:::: ##: ######:::. ######::::: ##::::. ######::
 ##:::: ##: ##...::::. ##:: ##:: ##:'## ##: ##:::: ##: ##...:::::..... ##:::: ##:::::..... ##:
 ##:::: ##: ##::::::::. ## ##::: ##:.. ##:: ##:::: ##: ##:::::::'##::: ##:::: ##::::'##::: ##:
 ########:: ########:::. ###::::: ##### ##:. #######:: ########:. ######::::: ##::::. ######::
........:::........:::::...::::::.....:..:::.......:::........:::......::::::..::::::......:::
-->

DevQuests is an e-learning platform for developers. It is a platform that allows you to learn and practice coding and programming in a fun and engaging way.

## Table of Contents

- [DevQuests v1.0 - E-Learning platform for developers](#devquests-v10---e-learning-platform-for-developers)
  - [Table of Contents](#table-of-contents)
  - [Problem](#problem)
  - [Solution](#solution)
  - [Project Glossary](#project-glossary)
  - [Project Team](#project-team)
  - [CONTENT STRUCTURE](#content-structure)
    - [Content types](#content-types)
    - [Taxonomies](#taxonomies)
  - [UI/UX](#uiux)
    - [Graphic Charter](#graphic-charter)
  - [TECHNOLOGICAL CHOICES](#technological-choices)
    - [Technologies](#technologies)
    - [Modelization](#modelization)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Database](#database)
    - [Tools](#tools)
    - [Modelization tool](#modelization-tool)
    - [Sitemap generator](#sitemap-generator)
    - [Planning Tool](#planning-tool)
    - [Design Tool](#design-tool)
    - [Package Managers](#package-managers)
    - [Build Tools](#build-tools)
    - [Git & Version Control](#git--version-control)
  - [FUNCTIONALITY](#functionality)
    - [Primary Functionalities](#primary-functionalities)
    - [Secondary Functionalities](#secondary-functionalities)
  - [IMPORTANT CONSTRAINTS](#important-constraints)
    - [Accessibility](#accessibility)
    - [Browser And Device Support](#browser-and-device-support)
    - [Hosting](#hosting)
    - [Ongoing Support And Maintenance](#ongoing-support-and-maintenance)
    - [Assumptions](#assumptions)
  - [Conclusion & Perspectives](#conclusion--perspectives)

## Problem

When you want to learn how to code, normally you'll go to a specialized school, or a coding bootcamp. But here in Morocco, there are not enough schools nor bootcamps to meet the demand as for example, YouCode can offer at most 300 places, but the demand this year reached over 6000+.

## Solution

To satisfy the demand, DevQuests offers an online platform that allows you to learn and practice coding in a fun and engaging way that simulates the real world coding bootcamps and schools, with projects and challenges that are based on the real world use cases.

## Project Glossary

- **_Roadmaps_**: Career paths which the user can follow.
- **_Modules_**: Skills needed for a specific roadmap.
- **_Nodes_**: Skills needed for a specific module.
- **_Resources_**: Resources to learn a skill or a set of skills.
- **_Interview Questions_**: Questions to help the user understand the modules.

## Project Team

- Mohammed-Aymen Benadra (#aymenBenadra) – CEO / Developer / Designer – aymanbenadra16@gmail.com

## CONTENT STRUCTURE

### Content types

- User: Timeless
- Roadmap: Timeless
- Module: Roadmap order
- Resource: Timeless
- Interview Question: Timeless

### Taxonomies

- **Learning Mode**
  - Relaxed
  - Normal

## UI/UX

### Graphic Charter

[Graphic Charter Figma Link](https://www.figma.com/file/UtTIub4HNUiwNsEqmdtoMR/DevQuests-Graphic-Charter)

[Design Figma Link](https://www.figma.com/file/6KiHVO2VvatHyZjZpq7Vc9/DevQuests---File-Rouge)

[Sitemap Link](https://www.gloomaps.com/wbCdtfkjRp)

## TECHNOLOGICAL CHOICES

### Technologies

### Modelization

- **UML**

  > [UML](https://en.wikipedia.org/wiki/UML) is a model-based approach to software development. It is a simple, yet powerful approach to software design.

### Frontend

- **Html 5**:

  > [HTML5](https://en.wikipedia.org/wiki/HTML5) is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.

- **CSS 3**:

  > [CSS 3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) is the latest evolution of the Cascading Style Sheets (CSS) standard. It is a style sheet language used for describing the presentation of a document written in a markup language like HTML.

  - **TailwindCSS**

    > [Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework for rapidly building custom, high performance, and accessible websites.

- **Javascript ES6**
  
  > [JavaScript](https://en.wikipedia.org/wiki/JavaScript) is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based, and multi-paradigm.

- **React.js**
  
  > [React.js](https://reactjs.org/) is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.

### Backend

- **PHP** -> **_SakamotoMVC_**

  > [PHP](https://en.wikipedia.org/wiki/PHP) is a server-side scripting language designed for web development but also used as a general-purpose programming language. [SakamotoMVC](https://github.com/aymenBenadra/SakamotoMVC) is a PHP framework for creating MVC applications that I created from scratch with Middlewares, Controllers, Models, Views, and Routes.

### Database

- **SQL** -> _MySQL_

  > [MySQL](https://en.wikipedia.org/wiki/MySQL) is a popular open-source relational database management system (RDBMS) based on the [SQL](https://en.wikipedia.org/wiki/Structured_query_language) language.

### Tools

### Modelization tool

- **Draw.io**

  > [Draw.io](https://www.draw.io/) is a free, open-source diagramming software.

### Sitemap generator

- **Gloomaps**

  > [Gloomaps](https://www.gloomaps.com/) is a free online map generator.

### Planning Tool

- **Trello**

  > [Trello](https://trello.com/) is a web-based project management tool with a simple interface that’s easy to use and fun to work with.

### Design Tool

- **Figma**

  > [Figma](https://www.figma.com/) is a free, open-source tool for creating and sharing vector graphics.

### Package Managers

- **Yarn** -> _Frontend_

  > [Yarn](https://yarnpkg.com/) is a package manager for JavaScript and dependencies.

- **Composer** -> _Backend_

  > [Composer](https://getcomposer.org/) is a dependency manager for PHP.

### Build Tools

- **Vite** -> _Builder_

  > [Vite](https://vite.dev/) is a JavaScript build tool for modern web applications.

- **Webpack** -> _Bundler_

  > [Webpack](https://webpack.js.org/) is a module bundler for modern JavaScript applications.

- **Babel** -> _Transpiler_

  > [Babel](https://babeljs.io/) is a JavaScript compiler.

- **ESLint** -> _Linter_

  > [ESLint](https://eslint.org/) is a JavaScript and TypeScript linter.

### Git & Version Control

- **Git** -> [_GitHub_](https://github.com)

  > Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## FUNCTIONALITY

There are many functionalities that needs to be implemented for the project to be considered done, and we can divide them to Primary and Secondary functionalities.

### Primary Functionalities

|  Functionality   | _FN0001: Choose Roadmap_ |
| :--------------: | :----------------------: |
| **Objective** | User can Browse and Choose a Roadmap |
| **Description** | A Grid-view of Roadmap cards, each has information about the Roadmap and how much time needed to complete it. Users can Choose one Roadmap at a time and if they want to change it later a warning will appear. |
| **Constraints** | - |
| **Dependencies** | - |
| **Priority** | High |

| Functionality | _FN0002: Select Module_ |
| :-----------: | :---------------------: |
| **Objective** | User can Browse and Select a module from a Roadmap |
| **Description** | A Module is a Skill or a set of Skills that the user needs to learn, each skill should show information, Resources when selected |
| **Constraints** | - |
| **Dependencies** | FN0001 |
| **Priority** | High |

| Functionality | _FN0003: Authentication_ |
| :-----------: | :------------------------: |
| **Objective** | User can Sign up or Log in |
| **Description** | A Guest can Sign up by providing _full name_, _email_, _username_, _password_, and an _avatar_ will be generated automatically if signed up successfully. User can Log in by providing _username_/_email_, and _password_. Auth helps guarding data in database rather than in local storage so nothing happens to it. |
| **Constraints** | - |
| **Dependencies** | - |
| **Priority** | Medium |

### Secondary Functionalities

| Functionality | _FN0004: Show Interview Question_ |
| :-----------: | :-------------------------------: |
| **Objective** | User can See an interview question |
| **Description** | Users can see interview questions with their answers |
| **Constraints** | - |
| **Dependencies** | - |
| **Priority** | low |

| Functionality | _FN0005: Choose Learning Mode_ |
| :-----------: | :----------------------------: |
| **Objective** | User can Choose a preferred Learning mode |
| **Description** | Learning Mode is how the user wants to learn and how much time is available |
| **Constraints** | - **Relaxed**(_Own Pace_): Continue without a timer - **Normal**(_Part-time_): Standard time for must of the users - **Hardcore**(_Immersive_): Half the standard time |
| **Dependencies** | FN0001 |
| **Priority** | low |

| Functionality |_FN0006: Search Resources_|
| :-----------: | :----------------------: |
| **Objective** | User can search for resources |
| **Description** | User can search for a resource via tags, keywords, or any information regarding them |
| **Constraints** | - |
| **Dependencies** | FN0002 |
| **Priority** | low |

## IMPORTANT CONSTRAINTS

### Accessibility

For the best user experience the use of semantic Html5 is a must, also with the usage of best practice and Aria attributes.

### Browser And Device Support

- Device support: most of the devices used including **Desktop**, **Tablet**, and **Mobile** devices.
- Browser support: most of the browsers excluding IE as it's deprecated.
- Features support: most of the latest features are supported thanks to Babel, PostCSS, AutoPrefixer and other packages.

### Hosting

- Back-end - PHP API - **Heroku**
  - PHP
  - Apache
  - Composer
  - ClearDB MySQL
- Frontend - React UI - **Vercel**
  - Nodejs
  - Yarn
  - Vite

### Ongoing Support And Maintenance

For staying up to date with the industry we'll need to:

- Add new features
- Fix bugs and issues
- Change or tweak the UI
- Update the roadmaps we provide
- Add new content in a timely manner

### Assumptions

As I'm the only one working on the project it's a given that I'll be responsible for all the tasks, which include but not limited to:

- Content addition
- Design and layout customization options
- Migrating the site to the live server
- Ongoing maintenance
- SEO
- Hosting

## Conclusion & Perspectives

I tried my best to outline the project in a way that it's easy to understand and built it with scalability in mind so that it can be improved with more features and better user experience over time. And as this project is the starting point for my own Explorer project, I'll be adding more features and improving the UI and UX even after turning it into a full-fledged project.

There are many features that I have in mind to add, but I'll be adding them gradually as I progress more in the development of the project.
