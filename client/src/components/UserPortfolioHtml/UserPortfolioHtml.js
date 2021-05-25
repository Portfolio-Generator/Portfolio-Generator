// CSS template literal to be used in Generated Portfolio
const UserPortfolioHtml = ({ userState }) => {

  const socialMediaOptions = [
    { name: 'Discord', url: 'https://portfolio-generator.github.io/icon-page/discord.svg' },
    { name: 'GitHub', url: 'https://portfolio-generator.github.io/icon-page/github.svg' },
    { name: 'Facebook', url: 'https://portfolio-generator.github.io/icon-page/facebook.svg' },
    { name: 'Instagram', url: 'https://portfolio-generator.github.io/icon-page/instagram.svg' },
    { name: 'LinkedIn', url: 'https://portfolio-generator.github.io/icon-page/linkedin.svg' },
    { name: 'Reddit', url: 'https://portfolio-generator.github.io/icon-page/reddit.svg' },
    { name: 'Spotify', url: 'https://portfolio-generator.github.io/icon-page/spotify.svg' },
    { name: 'StackOverflow', url: 'https://portfolio-generator.github.io/icon-page/stack-overflow.svg' },
    { name: 'Twitch', url: 'https://portfolio-generator.github.io/icon-page/twitch.svg' },
    { name: 'Twitter', url: 'https://portfolio-generator.github.io/icon-page/twitter.svg' },
    { name: 'YouTube', url: 'https://portfolio-generator.github.io/icon-page/youtube.svg' }
  ];

  const devSkillsOptions = [
    { name: 'AJAX', url: 'https://portfolio-generator.github.io/icon-page/ajax.svg' },
    { name: 'Android', url: 'https://portfolio-generator.github.io/icon-page/android.svg' },
    { name: 'Apollo GraphQL', url: 'https://portfolio-generator.github.io/icon-page/apollo-graphql.svg' },
    { name: 'AWS', url: 'https://portfolio-generator.github.io/icon-page/aws.svg' },
    { name: 'Azure', url: 'https://portfolio-generator.github.io/icon-page/azure.svg' },
    { name: 'Bash', url: 'https://portfolio-generator.github.io/icon-page/bash.svg' },
    { name: 'Bootstrap', url: 'https://portfolio-generator.github.io/icon-page/bootstrap.svg' },
    { name: 'C++', url: 'https://portfolio-generator.github.io/icon-page/c++.svg' },
    { name: 'CSS3', url: 'https://portfolio-generator.github.io/icon-page/CSS3_logo.svg' },
    { name: 'Docker', url: 'https://portfolio-generator.github.io/icon-page/docker.svg' },
    { name: 'Express', url: 'https://portfolio-generator.github.io/icon-page/express.svg' },
    { name: 'Flutter', url: 'https://portfolio-generator.github.io/icon-page/flutter.svg' },
    { name: 'Google Firebase', url: 'https://portfolio-generator.github.io/icon-page/googlefirebase.svg' },
    { name: 'Git', url: 'https://portfolio-generator.github.io/icon-page/git-icon.svg' },
    { name: 'GitHub', url: 'https://portfolio-generator.github.io/icon-page/github.svg' },
    { name: 'GitHub API', url: 'https://portfolio-generator.github.io/icon-page/github-api.svg' },
    { name: 'GitHub Pages', url: 'https://portfolio-generator.github.io/icon-page/github-icon.svg' },
    { name: 'Handlebars', url: 'https://portfolio-generator.github.io/icon-page/handlebars.svg' },
    { name: 'Heroku', url: 'https://portfolio-generator.github.io/icon-page/heroku.svg' },
    { name: 'HTML5', url: 'https://portfolio-generator.github.io/icon-page/html-5.svg' },
    { name: 'Java', url: 'https://portfolio-generator.github.io/icon-page/java.svg' },
    { name: 'JavaScript', url: 'https://portfolio-generator.github.io/icon-page/javascript.svg' },
    { name: 'jQuery', url: 'https://portfolio-generator.github.io/icon-page/jquery.svg' },
    { name: 'Linux Tux', url: 'https://portfolio-generator.github.io/icon-page/linuxtux.svg' },
    { name: 'Materialize', url: 'https://portfolio-generator.github.io/icon-page/materialize.svg' },
    { name: 'Moment.js', url: 'https://portfolio-generator.github.io/icon-page/momentjs.svg' },
    { name: 'Mongo DB', url: 'https://portfolio-generator.github.io/icon-page/mongodb.svg' },
    { name: 'MySQL', url: 'https://portfolio-generator.github.io/icon-page/mysql.svg' },
    { name: 'Node.js', url: 'https://portfolio-generator.github.io/icon-page/nodejs.svg' },
    { name: 'NPM', url: 'https://portfolio-generator.github.io/icon-page/npm.svg' },
    { name: 'PostgreSQL', url: 'https://portfolio-generator.github.io/icon-page/postgresql.svg' },
    { name: 'Python', url: 'https://portfolio-generator.github.io/icon-page/python.svg' },
    { name: 'RaspberryPi', url: 'https://portfolio-generator.github.io/icon-page/raspberrypi.svg' },
    { name: 'React', url: 'https://portfolio-generator.github.io/icon-page/react.svg' },
    { name: 'React Bootstrap', url: 'https://portfolio-generator.github.io/icon-page/react-bootstrap.svg' },
    { name: 'React Router', url: 'https://portfolio-generator.github.io/icon-page/react-router.svg' },
    { name: 'Redux', url: 'https://portfolio-generator.github.io/icon-page/redux.svg' },
    { name: 'Rest API', url: 'https://portfolio-generator.github.io/icon-page/REST-API-icon.svg' },
    { name: 'Styled Components', url: 'https://portfolio-generator.github.io/icon-page/styled-components.svg' },
    { name: 'Tailwind CSS', url: 'https://portfolio-generator.github.io/icon-page/tailwindcss.svg' },
    { name: 'Typescript', url: 'https://portfolio-generator.github.io/icon-page/typescript.svg' },
    { name: 'Vue.js', url: 'https://portfolio-generator.github.io/icon-page/vuejs.svg' },
    { name: 'Webpack', url: 'https://portfolio-generator.github.io/icon-page/webpack.svg' }
  ];


  // START OF LOGIC TO CREATE TEMPLATE LITERAL FOR ABOUTME
  let headShotString = ``;
  if (userState.headshot?.length > 0) {
    headShotString = headShotString + `<figure class="mt-5 ">
  <div>
    <img class="border rounded shadow-lg" src="./assets/images/${userState.headshot}" style="max-width:281px; max-height:281;">
  </div>
</figure>`
  }

  let phoneString = ``;
  if (userState.phone?.length > 0) {
    phoneString = phoneString + `<div class="col-4 rounded-pill text-center text-wrap text-white koho" 
  style="background:#2a3a6e"><a class="text-white koho" href="tel:${userState.phone}">${userState.phone}</a></div>`;
  }

  let emailString = ``;
  if (userState.email?.length > 0) {
    emailString = emailString + `<a class="col-4 rounded-pill text-center overflow-hidden text-white email raleway" 
  style="background:#2a3a6e" href="mailto:${userState.email}">${userState.email}</a>`;
  }

  let aboutMeString = ``;
  if (userState.aboutMe?.length > 0) {
    aboutMeString =
      `<!-- About me -->
  <div id="aboutMe" class="justify-content-center container-fluid my-3 border-2 rounded fw-bolder "
    style="max-width: 1700px; background:#C4C4C4">
    <div class="row justify-content-around px-5">`
      + headShotString +
      `<div>
        <div class="card-body">
          <h3 class="d-flex justify-content-center raleway"> About Me </h3>
          <p class=" lead raleway">
            ${userState.aboutMe}
          </p>
          <div class="row justify-content-around text-wrap pt-3 raleway">`
      + phoneString + emailString +

      `</div>
        </div>
      </div>
    </div>
  </div>
`;
  }
  // END OF LOGIC TO CREATE TEMPLATE LITERAL FOR ABOUTME


  // START OF LOGIC TO CREATE TEMPLATE LITERAL FOR DEVSKILLS
  let devSkillsString = ``;
  if (userState.devSkills?.length) {
    userState.devSkills.forEach((skill, i) => {
      // includes starting html of devSkills container
      let devSkillsUrl = devSkillsOptions.filter(skillOption => skillOption.name === skill).map(skillOptionUrl => skillOptionUrl.url)[0]
      if (i === 0) {
        devSkillsString = devSkillsString + `<!-- Skills -->
      <div id="skills" class="container border-2 rounded" style="max-width: 1700px; background:#C4C4C4">
        <div class="container d-none d-sm-block">
          <h3 class="d-flex justify-content-center py-2 raleway">Skills</h3>
          <div class="row my-3 py-3">`
      }
      devSkillsString = devSkillsString + `<div class="col-1 d-none d-lg-block ">
      <img class=" m-2 rounded skills-icons" style="max-width:55px; max-height:55px;" src="${devSkillsUrl}" target="_blank" rel="noopener noreferrer">
    </div>
`
    })
  }
  // includes ending html of devSkills container
  if (userState.devSkills?.length) {
    devSkillsString = devSkillsString +
      `</div>
  </div>
</div>
`;
  }
  // END OF LOGIC TO CREATE TEMPLATE LITERAL FOR DEVSKILLS


  // START OF LOGIC TO CREATE TEMPLATE LITERAL FOR PROJECTS
  let projectsString = ``;

  if (userState.projects?.length) {
    userState.projects.forEach((project, i) => {
      let projectTitleString = ``;
      let projectOrganizationString = ``;
      let projectThumbnailString = ``;
      let projectRepoLinkString = ``;
      let projectDeployedLinkString = ``;
      let projectVideoLinkString = ``;
      let projectBlurbString = ``;

      if (project.thumbnail?.length > 0) {
        projectThumbnailString = projectThumbnailString + `<img class="col order-first px-0 align-self-end img-fluid mr-3 
      my-4 rounded shadow-lg" src="./assets/images/${project.thumbnail}" style="max-width:405px; max-height:230px;">`
      }

      if (project.title?.length > 0) {
        projectTitleString = projectTitleString + ` <h3 class="pt-2 pb-1 raleway"> ${project.title} </h3>`;
      }

      if (project.organization?.length > 0) {
        projectOrganizationString = projectOrganizationString + ` <h4 class="p-2 raleway"> ${project.organization} </h4>`;
      }

      if (project.repoLink?.length > 0) {
        projectRepoLinkString = projectRepoLinkString +
          `<div class="p-1 px-2 rounded-pill text-center text-wrap text-white my-1 raleway" style="background:#2a3a6e">
          <a class="text-white raleway" href="${project.repoLink}" target="_blank" rel="noopener noreferrer">Source Code URL</a></div>`;
      }

      if (project.deployedLink?.length > 0) {
        projectDeployedLinkString = projectDeployedLinkString +
          `<div class="p-1 px-2 rounded-pill text-center text-wrap text-white my-1 raleway" style="background:#2a3a6e">
          <a class="text-white raleway" href="${project.deployedLink}" target="_blank" rel="noopener noreferrer">Live Site URL</a></div>`;
      }

      if (project.videoLink?.length > 0) {
        projectVideoLinkString = projectVideoLinkString +
          `<div class="p-1 px-2 rounded-pill text-center text-wrap text-white my-1 raleway" style="background:#2a3a6e">
          <a class="text-white raleway" href="${project.videoLink}" target="_blank" rel="noopener noreferrer">Video Demo URL</a></div>`;
      }

      if (project.blurb?.length > 0) {
        projectBlurbString = projectBlurbString +
          `${project.blurb}`;
      }

      // includes starting html of projects container
      if (i === 0) {
        projectsString = projectsString + `<!-- Project names -->
      <div id="projects" class="container-fluid py-3 my-3 border-2 rounded " style="max-width: 1700px; background:#C4C4C4">
        `
      }

      // individual projects added through forEach loop
      projectsString = projectsString + `<div class="mx-5 d-flex">
      <div class="d-flex align-self-center">`
        + projectThumbnailString +
        `<div class="d-grid gap-3 col-4 align-self-start">`
        + projectTitleString +
        projectOrganizationString +
        projectRepoLinkString +
        projectDeployedLinkString +
        projectVideoLinkString +
        `</div>
    </div>
    <div class="d-flex col align-items-top">
      <p class="raleway p-3">`
        + projectBlurbString +
        `</p>
    </div>
    </div>
    <hr style="background-color:#2a3a6e"></hr>`
    })
  }

  // includes end of projects container code
  if (userState.projects?.length) {
    projectsString = projectsString +
      `
    </div>
    `
  }
  // END OF LOGIC TO CREATE TEMPLATE LITERAL FOR PROJECTS

  // START OF LOGIC TO CREATE TEMPLATE LITERAL FOR SOCIALMEDIA
  let socialMediaString = ``;
  if (userState.socialMedia?.length) {
    userState.socialMedia.forEach((media, i) => {
      let socialMediaUrl = socialMediaOptions.filter(mediaOption => mediaOption.name === media.platform).map(mediaOptionUrl => mediaOptionUrl.url)[0]
      // includes starting html of socialMedia container
      if (i === 0) {
        socialMediaString = socialMediaString + `<!-- SocialMedia -->
        <div id="socialMedia" class="container border-2 rounded" style="max-width: 1700px; background:#C4C4C4">
          <div class="container d-none d-sm-block">
            <h3 class="d-flex justify-content-center raleway">Social Media</h3>
            <div class="row my-3 py-3 justify-content-center">`
      }
      socialMediaString = socialMediaString + `<div class="col-1 d-none d-lg-block ">
      <a href="${media.accountLink}" target="_blank" rel="noopener noreferrer">
        <img class=" m-2 rounded skills-icons" style="max-width:55px; max-height:55px;" src="${socialMediaUrl}"/>
      </a>
    </div>
  `
  })
}
  // includes ending html of socialMedia container
  if (userState.socialMedia?.length) {
    socialMediaString = socialMediaString +
      `</div>
    </div>
  </div>
  `;
  }
  // END OF LOGIC TO CREATE TEMPLATE LITERAL FOR SOCIALMEDIA


  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Googlefonts CDN here -->
  
    <link rel="stylesheet" src="../assets/css/styles.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=KoHo&family=Montserrat:ital,wght@1,700&family=Raleway:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>${userState.firstname} ${userState.lastname}</title>
  </head>
  
  <body>
    <!-- navbar -->
    <div class="container-fluid text-center bg-dark text-white">
      <div class="d-flex align-items-center">
        <h1 class="text-center mx-auto mt-3 mb-3 montserrat">${userState.firstname} ${userState.lastname}</h1>
      </div>
    </div>`
    + aboutMeString +
    devSkillsString +
    projectsString +
    socialMediaString +
    `<!-- Footer -->
    <footer class="container-fluid mt-3 mb-2 border border-2 rounded"
      style="max-width: 1700px; background:#C4C4C4">
      <p class="d-flex justify-content-center m-0 py-2">©${userState.firstname} ${userState.lastname} <script>
      document.write(new Date().getFullYear());
    </script>
    </p>
    </footer>
  </body>
  
  </html>`
}

export default UserPortfolioHtml;