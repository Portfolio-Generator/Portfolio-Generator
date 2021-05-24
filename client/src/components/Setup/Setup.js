import React from 'react';


const Setup = () => {


  return (
    <div className="bg-cyann">
      <div className="flex-row justify-center">
        <div className="bg-cream w-full container my-5 bd-dark-green rounded-3xl bd-3-5">
          <div className="p-4 font-dark-blue raleway-font text-xl text-center">
            <h2>Setting Up</h2>
            <p>Before starting, you'll need to create a free account. Please sign up with the <u>EXACT EMAIL</u> address that you want to display in your portfolio </p>

            <h3>Portfolio-Generator is simple to use:</h3>
            <p>Each section contains a form where you will enter information about yourself and your projects.</p>

            <p>You can save each section, log out, come back another time, and pick up where you left off.</p>
            <p>Most information is optional, but you are required to provide:</p>
            <ul>
              <li>First and last name </li>
              <li>Email address (the one you sign up with)</li>
              <li>Headshot or personal photo for the <b><i>about me</i></b> section</li>
              <li>Title, thumbnail image, and short description for each project you include. </li>
            </ul>
            <p>You may find it handy to collect your links to social media, GitHub repositories, and/or application URLs before starting. But remember, you can save and come back to the Portfolio Generator© any time.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;