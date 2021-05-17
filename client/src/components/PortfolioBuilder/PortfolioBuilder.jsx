import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_ME } from "../../utils/queries";
import { UPDATE_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";
import AboutMe from "../AboutMe/AboutMe";
import PortfolioBuildButton from "../PortfolioBuildButton/PortfolioBuildButton";


import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function PortBuild() {
  return (
    <div className="bg-green-100 rounded">
      <Accordion>

        {/*  About Bio Form  */}

        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="montserrat-font">
            About Bio
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="raleway-font">
            <Card.Body className="raleway-font">
              
              {/*  First Name:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  First Name:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>


              {/*  Last Name:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Last Name:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>


              {/*  Profile Image Name:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Profile Image Name:(Case Sensitive)
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>


              {/*  About Me Bio:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  About Me Bio:
                </span>
              </label>
              <textarea type="textarea" className="form-textarea px-4 py-3 rounded-full w-full mt-1" rows="6">
              </textarea>
              </div>

            </Card.Body>
          </Accordion.Collapse>
        </Card>

        {/*  Developer Skills List Form  */}

        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="1"
            className="montserrat-font">
            Developer Skills List Options:
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1" className="raleway-font">
            <Card.Body>
              

              {/*  AJAX   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  AJAX
                </span>
              </input>
              </label>
              </div>

              

              {/*  Android   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Android
                </span>
              </input>
              </label>
              </div>

              

              {/*  Apollo Graph QL   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Apollo Graph QL
                </span>
              </input>
              </label>
              </div>

              

              {/*  AWS   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  AWS
                </span>
              </input>
              </label>
              </div>

              

              {/*  Azure   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Azure
                </span>
              </input>
              </label>
              </div>

              

              {/*  Bash   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Bash
                </span>
              </input>
              </label>
              </div>

              

              {/*  Bootstrap   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Bootstrap
                </span>
              </input>
              </label>
              </div>

              

              {/*  C++   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  C++
                </span>
              </input>
              </label>
              </div>

              

              {/*  CSS3   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  CSS3
                </span>
              </input>
              </label>
              </div>

              

              {/*  Docker   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Docker
                </span>
              </input>
              </label>
              </div>

              

              {/*  Express   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Express
                </span>
              </input>
              </label>
              </div>

              

              {/*  Flutter   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Flutter
                </span>
              </input>
              </label>
              </div>

              

              {/*  Google Firebase   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Google Firebase
                </span>
              </input>
              </label>
              </div>

              

              {/*  Git   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Git
                </span>
              </input>
              </label>
              </div>

              

              {/*  GitHub   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  GitHub
                </span>
              </input>
              </label>
              </div>

              

              {/*  GitHub API   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  GitHub API
                </span>
              </input>
              </label>
              </div>



              {/*  GitHub Pages   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  GitHub Pages
                </span>
              </input>
              </label>
              </div>

              


              {/*  Handlebars   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Handlebars
                </span>
              </input>
              </label>
              </div>

              


              {/*  Heroku   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Heroku
                </span>
              </input>
              </label>
              </div>

              


              {/*  HTML   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  HTML
                </span>
              </input>
              </label>
              </div>

              


              {/*  HTML5   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  HTML5
                </span>
              </input>
              </label>
              </div>

              


              {/*  Java   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Java
                </span>
              </input>
              </label>
              </div>

              


              {/*  JavaScript   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  JavaScript
                </span>
              </input>
              </label>
              </div>

              


              {/*  jQuery   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  jQuery
                </span>
              </input>
              </label>
              </div>

              


              {/*  Linux Tux   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Linux Tux
                </span>
              </input>
              </label>
              </div>

              


              {/*  Materialize   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Materialize
                </span>
              </input>
              </label>
              </div>

              


              {/*  Moment.js   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Moment.js
                </span>
              </input>
              </label>
              </div>

              


              {/*  Mongo DB   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Mongo DB
                </span>
              </input>
              </label>
              </div>

              


              {/*  MySQL   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  MySQL
                </span>
              </input>
              </label>
              </div>

              


              {/*  Node.js   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Node.js
                </span>
              </input>
              </label>
              </div>

              


              {/*  NPM   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  NPM
                </span>
              </input>
              </label>
              </div>

              


              {/*  PostgreSQL   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  PostgreSQL
                </span>
              </input>
              </label>
              </div>

              


              {/*  RasberryPi   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  RasberryPi
                </span>
              </input>
              </label>
              </div>

              


              {/*  React   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  React
                </span>
              </input>
              </label>
              </div>

              


              {/*  React Bootstrap   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  React Bootstrap
                </span>
              </input>
              </label>
              </div>

              


              {/*  React Router   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  React Router
                </span>
              </input>
              </label>
              </div>

              


              {/*  Redux   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Redux
                </span>
              </input>
              </label>
              </div>

              


              {/*  Rest API   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Rest API
                </span>
              </input>
              </label>
              </div>

              


              {/*  Styled Components   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Rest API
                </span>
              </input>
              </label>
              </div>

              


              {/*  Tailwinds CSS   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Tailwinds CSS
                </span>
              </input>
              </label>
              </div>

              


              {/*  Typescript   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Typescript
                </span>
              </input>
              </label>
              </div>

              


              {/*  Vue.js   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Vue.js
                </span>
              </input>
              </label>
              </div>

              


              {/*  Webpack   */}
              <div className="flex w-full">
              <label className="raleway-font text-gray-700 text-xl">
              <input type="checkbox" className="form-input px-4 py-3 rounded mt-1">
                <span className="text-left">
                  Webpack
                </span>
              </input>
              </label>
              </div>

              

            </Card.Body>
          </Accordion.Collapse>
        </Card>

        {/*  Contact Me & Social Media Form  */}

        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="3"
            className="montserrat-font">
            Contact Me and Social Media Options
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3" className="raleway-font">
            <Card.Body className="raleway-font">
            


              {/*  First Name:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  First Name:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>


              {/*  Last Name:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Last Name:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>




              {/*  Email:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Email Address:
                </span>
              </label>
              <input type="email" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>




              {/*  Phone Number:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Phone Number:
                </span>
              </label>
              <input type="tel" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>




              
              {/*  Facebook Page URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Facebook Page URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>



              
              {/*  Twitter Page URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Twitter Page URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>



              
              {/*  GitHub Page URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  GitHub Page URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>



              
              {/*  StackOverflow Page URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  StackOverflow Page URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>



              
              {/*  LinkedIn Page URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  LinkedIn Page URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>



              
              {/*  YouTube Page URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  YouTube Page URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>



              
              {/*  Instagram Page URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Instagram Page URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>



              
              {/*  Spotify Page URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Spotify Page URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>



              
              {/*  Twitch Page URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Twitch Page URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>



              
              {/*  Discord Page URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Discord Page URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>



              
              {/*  Reddit Page URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Reddit Page URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>
              
          </Accordion.Collapse>
        </Card>
      </Accordion>

    
    
    </div>
  );
};

export default PortBuild;
