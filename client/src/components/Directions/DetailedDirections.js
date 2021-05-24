import React from 'react';
import Card from "react-bootstrap/Card"


const DetailedDirections = () => {


  return (
    <section className=" rounded  font-dark-blue  ">
      <Card.Body className="raleway-font  font-dark-blue  ">
        <div className="bg-cream w-full container my-5 bd-dark-green rounded-3xl bd-3-5">
          <div className="p-4 font-dark-blue raleway-font text-xl text-left">



            <h2>Click each section to enter portfolio information</h2>
            <h4>Developer Information:</h4>
            <ul>
              <li> First Name, Last Name, and Profile Image are required</li>
              <li> Enter the Profile Image Filename without a directory path, as in "myHeadShot.jpg"</li>
              <li>Select any developer skills that you want list in your portfolio</li>
              <li>Click "Save"</li>
            </ul>
            <h4>Social Media:</h4>
            <ul>
              <li> Social Media links are optional</li>
              <li> Enter the full url to any social media account you want to include, as in: "https://twitter.com/myAccount"</li>
              <li>Click "Save".</li>
            </ul>
            <h4>Projects:</h4>
            <ul>
              <li> Projects are the centerpiece of your portfolio. You will need a preview image file for each included project.</li>
              <li>Click "Add New Projects"</li>
              <li>Enter the Title </li>
              <li>Provide the full url to any links you choose to include, as in: "https://github.com/myAccount"</li>
              <li>Enter the required Thumbnail Image Filename without a directory path, as in "myThumbnail1.jpg"</li>
              <li>Enter a short (required) description of the project</li>
              <li>Click "Save"</li>
            </ul>
            <h4>Downloading Portfolio Zip Files:</h4>
            <ul>
              <li>You can save  portfolio information and come back to it at any time</li>
              <li>When everthing is ready, click "Create Portfolio Zip File" to download zip files containing html and css</li>
              <li>CREATE a folder for your portfolio and UNZIP "index.html" file into that folder</li>
              <li>In the Portfolio folder, create a subfolder named "assets"</li>
              <li>In the assets folder, create TWO subfolders named "css" and  "images"</li>
              <li>UNZIP the "styles.css" file into the "css" folder</li>
              <li>MOVE all the images you are using in your portfolio into the "images" folder</li>

              <li>IMPORTANT: Your portfolio assumes images are located in an "assets/images" subfolder and that the css is in an "assets/css" subfolder. You must create this path structure to publish your website </li>

            </ul>


          </div>
        </div>
      </Card.Body>
    </section>
  )
}

export default DetailedDirections;
