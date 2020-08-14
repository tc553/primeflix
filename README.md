## PrimeFlix

This web app consists in a platform of videos with a Netflix-like interface: [primeflix-tc.vercel.app](https://primeflix-tc.vercel.app/).

Any video hosted in YouTube can be added to the catalog. I chose to add videos related to steelmaking processes to the application. I was aiming to make it a platform that might be used by my current employer in order to share knowledge to new employees who might not be familiar with the steelmaking industry. It can be used for any other purpose, though. You'd simply need to register different categories and videos.

PrimeFlix was developed with React. I used ESLint for keeping code consistency and I fully recommend it. I also used styled-components library. At first, I used JSON Server to mock a fake API in order to focus on front-end development. But as I got further into developing the app, I started using Heroku for the back-end. I used Vercel for hosting.

### Functionalities

The app has a clean, modern responsive interface. Currently, it is possible to register new videos and categories. However, some further development would be necessary in order to use it in production environment:

- Allow user to remove existing videos and categories
- Validate input values before allowing the user to submit forms
- Handle server errors
- User authentication


#### Special thanks

This project was developed under Alura's introductory course on React, #ImersãoReact. Although I have 5+ years of professional experience in software development, as of June/2020 I didn't have any experience with React. During this course, I was able to learn the fundamentals and build my first app. I'll continue studying React as I quite enjoyed the experience.
