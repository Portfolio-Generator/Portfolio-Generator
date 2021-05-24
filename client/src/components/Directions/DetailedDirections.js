import React from 'react';
import Card from "react-bootstrap/Card"


const DetailedDirections = () => {


  return (
    <section className=" rounded  font-dark-blue  ">
    <Card.Body className="raleway-font  font-dark-blue  ">
        <div className="bg-cream w-full container my-5 bd-dark-green rounded-3xl bd-3-5">
          <div className="p-4 font-dark-blue raleway-font text-xl text-center">


            
            <h2>Click each section to enter portfolio information</h2>
            <p>Developer Information:</p>
            <ul>
              <li> First Name, Last Name, and Profile Image are required</li>
              <li> Enter the Profile Image Filename without a directory path, as in "myHeadShot.jpg"</li>
              <li>Optionally, select the developer skills that you want list in your portfolio</li>
              <li>Click "Save".</li>
            </ul>
            <p>Social Media:</p>
            <ul>
              <li> Social Media links are optional</li>
              <li> Enter the full url to any social media account you want to include, as in: "https://twitter.com/myAccount"</li>
              <li>Click "Save".</li>
            </ul>
            <p>Projects:</p>
            <ul>
              <li> Projects are the centerpiece of your portfolio. You will need a preview image file for each included project.</li>
              <li>Click "Add New Projects"</li>
              <li>Enter the Title </li>
              <li>Provide the full url to any links you choose to include, as in: "https://github.com/myAccount"</li>
              <li>Enter the Thumbnail Image Filename without a directory path, as in "myThumbnail1.jpg"</li>
              <li>Enter a short description of the project</li>
              <li>Click "Save".</li>
            </ul>

          </div>
        </div>
      </Card.Body>
    </section>
  )
}

export default DetailedDirections;
