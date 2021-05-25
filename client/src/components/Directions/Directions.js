import React from 'react';


const Directions = () => {


  return (
    <div className="bg-cyann">
      <div className="flex-row justify-center">
        <div className="bg-cream w-full container my-5 bd-dark-green rounded-3xl bd-3-5">
          <div className="p-4 font-dark-blue raleway-font text-xl align-text-center">
            <h2>Expand each section to enter portfolio information</h2>
            <ul className="">
              <li>When you're finished, select <b>Create Portfolio Zip File</b> to download the HTML and CSS. Your portfolio assumes all images are located in an <i>assets/images</i> subfolder and that the css is in an <i>assets/css</i> subfolder.</li>
              <li>  Select  <b>Directions</b> for more informaton.</li>
              <li className="text-center py-1"><b>Fields with * are required</b></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
