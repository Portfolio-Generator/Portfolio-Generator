import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_ME } from "../../utils/queries";
import { UPDATE_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";
import AboutMe from "../AboutMe/AboutMe";
import PortfolioBuildButton from "../PortfolioBuildButton/PortfolioBuildButton";


import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function ProjectBuild() {
  return (
    <div className="bg-green-100 rounded">
      <Accordion>

                {/*  Project List Skills Form  */}

                <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="2"
            className="montserrat-font">
            Project List:
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2" className="">
            <Card.Body className="raleway-font">




              {/*  Project Name:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Project Name:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>




              {/*  Organization Name:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Organization Name:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>




              {/*  Source Code URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Source Code URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>




              {/*  Live Site URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Live Site URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>




              {/*  Video Demo URL:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Video Demo URL:
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>




              {/*  Project Image/Gif Name:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Project Image/Gif Name:(Case Sensitive)
                </span>
              </label>
              <input type="text" className="form-input px-4 py-3 rounded-full w-full mt-1">
              </input>
              </div>



              {/*  Project Description:   */}
              <div className="flex-col w-full">
              <label className="raleway-font text-gray-700 text-xl">
                <span className="text-left">
                  Project Description:
                </span>
              </label>
              <textarea type="textarea" className="form-textarea px-4 py-3 rounded-full w-full mt-1" rows="6">
              </textarea>
              </div>



            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
</div>
);
};

export default ProjectBuild;

