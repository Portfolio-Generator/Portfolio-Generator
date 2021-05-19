// CSS template literal to be used in Generated Portfolio
const UserPortfolioHtml = ({userState}) => {

let headShotString = ``;
if (userState.headshot) {
  headShotString = headShotString + `<figure class="mt-5 align-self-center ">
  <figcaption>Hello!</figcaption>
  <div>
    <img class="border rounded shadow-lg" src="./assets/images/${userState.headshot}" style="width:281px">
  </div>
</figure>`
}

let phoneString = ``;
if (userState.phone) {
  phoneString = phoneString + `<div class="col-4 rounded-pill text-center text-wrap text-white" 
  style="background:#4f1b94">${userState.phone}</div>`;
}

let emailString = ``;
if (userState.email) {
  emailString = emailString + `<div class="col-4 rounded-pill text-center overflow-hidden text-white" 
  style="background:#4f1b94">${userState.email}</div>`;
}

let aboutMeString = ``;
if (userState.aboutMe?.length) {
  aboutMeString = 
  `<!-- About me -->
  <div id="aboutMe" class="justify-content-center container-fluid my-3 border-2 rounded fw-bolder "
    style="max-width: 1700px; background:#C4C4C4">
    <div class="row mx-5">`
      + headShotString +
      `<div class="col-md-8">
        <div class="card-body">
          <h3 class="d-flex justify-content-center"> About Me </h3>
          <p class=" lead">
            ${userState.aboutMe}
          </p>
          <div class="row justify-content-around text-wrap">`
            + phoneString + emailString +
            
          `</div>
        </div>
      </div>
    </div>
  </div>
`;
}

let devSkillsString = ``;
if (userState.devSkills?.length) {
  userState.devSkills.forEach((skill,i) => {
    if (i === 0) {
      devSkillsString = devSkillsString + `<!-- Skills -->
      <div id="skills" class="container border-2 rounded" style="max-width: 1700px; background:#C4C4C4">
        <div class="container d-none d-sm-block">
          <h3 class="d-flex justify-content-center">Skills</h3>
          <div class="row mt-2">`
    }
    devSkillsString = devSkillsString + `          <div class="col-1 d-sm-none d-md-block">
    <p>${skill}</p>
  </div>
`
  })
}
if (userState.devSkills?.length) {
  devSkillsString = devSkillsString + 
  `</div>
  </div>
</div>
`;
}



  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Googlefonts CDN here -->
  
    <link rel="stylesheet" src="../assets/css/styles.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>${userState.firstname} ${userState.lastname} Portfolio</title>
  </head>
  
  <body>
    <!-- navbar -->
    <nav class="container-fluid navbar-dark bg-dark text-white">
      <div class="d-flex align-items-center justify-content-between">
        <a class="navbar-brand mt-2 mb-2" href="#">${userState.firstname} ${userState.lastname}</a>
        <div class="d-flex justify-content-end">
          <ul class="nav justify-content-end mt-2 mb-2">
            <li class="nav-item">
              <a class="nav-link text-white" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#portfolio">Portfolio Builder</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-danger" href="#logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>` 
    + aboutMeString 
    + devSkillsString +
  
    `<!-- Project names -->
    <div id="projects" class="container-fluid my-3 border-2 rounded " style="max-width: 1700px; background:#C4C4C4">
      <div class="mx-5 d-flex">
        <div class="d-flex align-self-center">
          <img class="col order-first px-0 align-self-end img-fluid mr-3 my-4 rounded shadow-lg"
            src="../assets/assets/images/comingsoon.gif" style="width:405px">
          <div class="d-grid gap-3 col-4 align-self-start">
            <h3 class="p-2"> Project Name </h3>
            <h4 class="p-2"> Organization Name </h4>
            <div class="p-1 rounded-pill text-center text-wrap text-white mt-0" style="background:#4f1b94">
              Source Code</div>
            <div class="p-1 rounded-pill text-center text-wrap text-white my-2" style="background:#4f1b94">
              Live Site</div>
            <div class="p-1 rounded-pill text-center text-wrap text-white mt-0" style="background:#4f1b94">
              Demo Video</div>
          </div>
        </div>
        <div class="d-flex col order-last text-wrap align-items-top">
          <h3 class="align-self-center mx-3">Description: </h3>
          <p class="">
            <br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur possimus obcaecati ipsam dolores
            beatae assumenda inventore, cupiditate minus eos culpa nisi doloribus laudantium voluptatibus accusantium
            sint
            et illo. Possimus, aut!</br>
            <br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quaerat enim, numquam officia
            cupiditate
            libero quam, iste blanditiis unde iure impedit necessitatibus voluptatum vero corrupti debitis beatae
            voluptas,
            ipsam animi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tempora blanditiis doloribus
            molestias et provident nesciunt omnis, perferendis fuga magnam libero natus quia reiciendis beatae mollitia
            ipsam sunt facilis iure?</br>
          </p>
        </div>
      </div>
    </div>
    <!-- Contact Form -->
    <div id="contact" class="container border border-2 rounded " style="max-width: 1700px; background:#C4C4C4">
      <h2 class="d-flex justify-content-center"> Contact Me </h2>
      <div class=" d-flex justify-content-between ">
        <div class="container mx-3" style="max-width: 600px">
          <div class="input-group mb-1">
            <span class="input-group-text" id="basic-addon1">Name:</span>
            <input type="text" class="form-control" placeholder="Please enter your name" aria-label="Name"
              aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-1">
            <span class="input-group-text">Your email:</span>
            <input type="text" class="form-control" placeholder="Please enter your preferred contact email"
              aria-label="Recipient's email" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">@example.com</span>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text ">Message:</span>
            <textarea class="form-control" aria-label="With textarea" placeholder="Questions or feedback"></textarea>
          </div>
          <div class="text-center ml-2 align-self-end text-md-left">
              <a class="btn btn-primary email" href='${userState.email}'>Send</a>
          </div>
        </div>
        <div class="container d-flex">
          <div class="mx-auto mb-50">
            <h3 class="justify-content-center ">Social Media</h3>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
              <label class="form-check-label" for="inlineCheckbox1"><i class="fab fa-facebook"></i></label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
              <label class="form-check-label" for="inlineCheckbox2"><i class="fab fa-instagram"></i></label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
              <label class="form-check-label" for="inlineCheckbox3"><i class="fab fa-discord"></i></label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option4">
              <label class="form-check-label" for="inlineCheckbox3"><i class="fab fa-linkedin"></i></label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option5">
              <label class="form-check-label" for="inlineCheckbox1"><i class="fab fa-reddit-alien"></i></label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option6">
              <label class="form-check-label" for="inlineCheckbox2"><i class="fab fa-twitch"></i></label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option7">
              <label class="form-check-label" for="inlineCheckbox3"><i class="fab fa-twitter"></i></label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option8">
              <label class="form-check-label" for="inlineCheckbox3"><i class="fab fa-youtube"></i></label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer id="projects" class="container mt-3 mb-2 border border-2 rounded"
      style="max-width: 1700px; background:#C4C4C4">
      <p class="d-flex justify-content-center">©Legion Incorporated Est ∞</p>
    </footer>
  </body>
  
  </html>`
} 

export default UserPortfolioHtml;