import React from 'react';
import Card from "react-bootstrap/Card"


const DetailedDirections = () => {


  return (
    <section className=" rounded  font-dark-blue  ">
      <Card.Body className="raleway-font  font-dark-blue  ">
        <div className="bg-cream w-full container my-5 bd-dark-green rounded-3xl bd-3-5" >
          <div className="p-4 font-dark-blue raleway-font text-xl text-left">



            <h2>Click each section to enter portfolio information</h2>
            <h4>Developer Information:</h4>
            <ul className="A">
              <li> First Name, Last Name, and Profile Image are required</li>
              <li> Enter the Profile Image Filename without a directory path, as in <b><i>myHeadShot.jpg</i></b></li>
              <li>Select any developer skills that you want list in your portfolio</li>
              <li>Click <b><i>Save</i></b></li>
            </ul>
            <h4>Social Media:</h4>
            <ul className="A">
              <li> Social Media links are optional</li>
              <li> Enter the full url to any social media account you want to include, as in: <b><i>https://twitter.com/myAccount</i></b></li>
              <li>Click <b><i>Save</i></b>.</li>
            </ul>
            <h4>Projects:</h4>
            <ul className="A">
              <li> Projects are the centerpiece of your portfolio. You will need a preview image file for each included project.</li>
              <li>Click <b><i>Add New Projects</i></b></li>
              <li>Enter the Title </li>
              <li>Provide the full url to any links you choose to include, as in: <b><i>https://github.com/myAccount</i></b></li>
              <li>Enter the required Thumbnail Image Filename without a directory path, as in <b><i>myThumbnail1.jpg</i></b></li>
              <li>Enter a short (<b><i>required</i></b>) description of the project</li>
              <li>Click <b><i>Save</i></b></li>
            </ul>
            <h4>Downloading Portfolio Zip Files:</h4>
            <ul className="A">
              <li>You can save  portfolio information and come back to it at any time</li>
              <li>When everthing is ready, click <b><i>Create Portfolio Zip File</i></b>. to download zip files containing HTML and CSS</li>
              <li><b>Create</b> a folder for your portfolio and <b>UNZIP</b> <b><i>index.html</i></b> file into that folder</li>
              <li>In the Portfolio folder, create a subfolder named <b><i>assets</i></b></li>
              <li>In the assets folder, create TWO subfolders named <b><i>css</i></b> and  <b><i>images</i></b></li>
              <li><b>UNZIP</b> the <b><i>styles.css</i></b> file into the <b><i>css</i></b> folder</li>
              <li><b>Move</b> all the images you are using in your portfolio into the <b><i>images</i></b> folder</li>

              <li><strong><u>IMPORTANT</u></strong>: Your portfolio assumes images are located in an <b><i>assets/images</i></b> subfolder and that the css is in an <b><i>assets/css</i></b> subfolder. You must create this path structure to publish your website </li>

            </ul>


          </div>
        </div>
      </Card.Body>
    </section>
  )
}

export default DetailedDirections;
