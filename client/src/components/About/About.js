import React from 'react';


const About = () => {


  return (
    <div className="bg-cyann">
      <div className="flex-row justify-center">
        <div className="bg-cream w-full container my-5 bd-dark-green rounded-3xl bd-3-5">
          <div className="p-4 font-dark-blue raleway-font text-xl text-center">
            <h2>Portfolio Generator</h2>
            <p>A sophisticated online portfolio is essential for every developer. 
In just minutes, this application creates a professional portfolio for you to to deploy to the web. </p>
            <div className="flex justify-center">
              <img className="border rounded shadow-lg py-3 aboutpic "
                src="./images/PortfolioLandingPage.jpg" alt=""></img>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
