import React from 'react';
import Card from "react-bootstrap/Card"


const DetailedDirections = () => {


  return (
    <section className=" rounded  font-dark-blue  ">
      <Card.Body className="raleway-font  font-dark-blue  ">
        <div className="bg-cream w-full container my-5 bd-dark-green rounded-3xl bd-3-5" >
          <div className="p-4 font-dark-blue raleway-font text-xl text-left">



          <h2>Expand each section to enter portfolio information</h2>
            <h4>Developer Information</h4>
            <ul className="A">
              <li> First Name, Last Name, and Profile Image are required</li>
              <li> Enter the Profile Image Filename without a directory path, as in: myHeadShot.jpg</li>
              <li>Select any developer skills that you want listed in the portfolio</li>
              <li>Click <b>Save</b></li>
            </ul>
            <h4>Social Media</h4>
            <ul className="A">
              <li> Social Media links are optional</li>
              <li> Enter the full url to any social media account you want to include, as in: https://twitter.com/myAccount</li>
              <li>Click <b>Save</b>.</li>
            </ul>
            <h4>Projects</h4>
            <ul className="A">
              <li> Projects are the centerpiece of your portfolio. You will need a preview image file for each included project.</li>
              <li>Click<b>Add New Projects</b></li>
              <li>Enter the Title </li>
              <li>Provide the full url to any links you choose to include, as in: https://github.com/myAccount</li>
              <li>Enter the required Thumbnail Image Filename without a directory path, as in: myThumbnail1.jpg</li>
              <li>Enter a short (required) description of the project</li>
              <li>Click <b>Save</b></li>
            </ul>
            <h4>Downloading Portfolio Zip Files</h4>
            <ul className="A">
              <li>You can save  portfolio information and then come back and edit it at any time</li>
              <li>When everthing is ready, click <b>Create Portfolio Zip File</b> to download zip files containing HTML and CSS</li>
              <li><b>Create</b> a folder for your portfolio and unZip index.html file into that folder</li>
              <li>In the portfolio folder, create a subfolder named assets</li>
              <li>In the assets folder, create TWO subfolders named css and  images</li>
              <li>UnZip the style.css file into the css subfolder</li>
              <li>Move all the images you are using in your portfolio into the images subfolder</li>

              <li><strong><u>IMPORTANT</u></strong>: Your portfolio assumes images are located in an assets/images subfolder and that style.css is in an assets/css subfolder. You must create this path structure to publish your website </li>
            </ul>
          </div>
        </div>
      </Card.Body>
    </section>
  )
}

export default DetailedDirections;
