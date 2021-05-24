import React from 'react';


const Directions = () => {


  return (
    <div className="bg-cyann">
      <div className="flex-row justify-center">
        <div className="bg-cream w-full container my-5 bd-dark-green rounded-3xl bd-3-5">
          <div className="p-4 font-dark-blue raleway-font text-xl text-center">
            <h2>Click each section to enter portfolio information</h2>
            <ul>
              <li>Starred * fields are required</li>
              <li>When you are finished, click "Create Portfolio Zip File" to download zip files containing html and css.</li>
              <li>Your portfolio assumes all images are located in an "assets/images" subfolder and that the css is in an "assets/css" subfolder. You must create this path structure to publish your website. </li>
              <li>Click "Detailed Directions" for more informaton</li>
            </ul>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
