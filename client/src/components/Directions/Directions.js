import React from 'react';


const Directions = () => {


  return (
    <div className="bg-cyann">
      <div className="flex-row justify-center">
        <div className="bg-cream w-full container my-5 bd-dark-green rounded-3xl bd-3-5">
          <div className="p-4 font-dark-blue raleway-font text-xl align-text-center">
            <h2>Click each section to enter portfolio information</h2>
            <ul className="">
              <li><i>Starred</i> * fields are required</li>
              <li>When you are finished, click <b><i>Create Portfolio Zip File</i></b> to download zip files containing your HTML and CSS.</li>
              <li>Your portfolio assumes all images are located in an <b><i>assets/images</i></b> subfolder and that the css is in an <b><i>assets/css</i></b> subfolder. You must create this path structure to publish your website. </li>
              <li>Click <b><i>Detailed Directions</i></b> for more informaton</li>
            </ul>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
