import React from 'react';


const About = () => {


  return (
    <div className="bg-cyann">
      <div className="flex-row justify-center">
        <div className="bg-cream w-full container my-5 bd-dark-green rounded-3xl bd-3-5">
          <div className="p-4 font-dark-blue raleway-font text-xl text-center">
            <h2>Portfolio Generator</h2>
            <p>A sophisticated online portfolio is essential for every web developer. 
In just minutes, this application creates a professional portfolio, containing your:
            </p>
            <ul>
              <li>Headshot, personal bio, and contact information</li>
              <li>Social-media links</li>
              <li>Professional projects, including thumbnail, description, and applicaton links </li>
            </ul>
            <p>Click the demo link in the nav bar to see examples of finished portfolios</p> 

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
