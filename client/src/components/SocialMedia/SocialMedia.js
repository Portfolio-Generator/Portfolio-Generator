import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_ME } from "../../utils/queries";
import { UPDATE_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";
import AboutMe from "../AboutMe/AboutMe";
import PortfolioBuildButton from "../PortfolioBuildButton/PortfolioBuildButton";


import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function SocialMedia() {
  return (
    <div className="bg-green-100 rounded">
      <Accordion>

      {/*  Social Media Options  */}

      <Card>
      <Accordion.Toggle
            as={Card.Header}
            eventKey="4"
            className="montserrat-font">
            Social Media Options
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4"className="raleway-font">
            <Card.Body className="raleway-font">
            
            
              
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
              

            </Card.Body>
        </Accordion.Collapse>
      </Card>


      </Accordion>
      </div>
);
};

export default SocialMedia;
