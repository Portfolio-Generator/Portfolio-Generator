import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Card from "react-bootstrap/Card"

import { useMutation } from '@apollo/react-hooks';
import { ADD_SOCIAL_MEDIA } from '../../utils/mutations';
import { UPDATE_SOCIAL_MEDIA } from '../../utils/mutations';
import { REMOVE_SOCIAL_MEDIA } from '../../utils/mutations';

//----------------------------------------------------
//  SOCIAL MEDIA COMPONENT
//----------------------------------------------------
// CREATES a new project (via AddProject) 
// DELETES a saved project
// READS projects that have been saved from
//   userState and displays them
//----------------------------------------------------

const SocialMedia = ({ userState, setuserState }) => {

  // smFormData will contain the user inputed link to their social media  
  const [smFormData, setSmFormData] =
    useState([
      {
        platform: "Discord",
        link: ""
      },
      {
        platform: "Facebook",
        link: ""
      },
      {
        platform: "GitHub",
        link: ""
      },
      {
        platform: "Instagram",
        link: ""
      },
      {
        platform: "LinkedIn",
        link: ""
      },
      {
        platform: "Reddit",
        link: ""
      },
      {
        platform: "Spotify",
        link: ""
      },
      {
        platform: "StackOverflow",
        link: ""
      },
      {
        platform: "Twitch",
        link: ""
      },
      {
        platform: "Twitter",
        link: ""
      },
      {
        platform: "YouTube",
        link: ""
      }
    ]);

  const [addSocialMedia] = useMutation(ADD_SOCIAL_MEDIA);
  const [updateSocialMedia] = useMutation(UPDATE_SOCIAL_MEDIA);
  const [removeSocialMedia] = useMutation(REMOVE_SOCIAL_MEDIA);
  const [socialMediaDataSaved, setSocialMediaDataSaved] = useState(false);

  //input form validation
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // userState.socialMedia array is a possible array of values. Need to map those into smFormData urls
  useEffect(() => {
    if (!userState) return;
    // go through smFormDataFilled and if smFormDataFilled.platform is same as go through userState.platform
    // then apply it
    if (userState?.socialMedia) {
      let smFormDataFilled = smFormData.map((item) => {
        userState.socialMedia.forEach(userItem => {
          if (item?.platform === userItem?.platform) {
            item.link = userItem.accountLink
          }
        })
        return item;
      })
      setSmFormData(smFormDataFilled);
    }
  }, [userState])


  // ----------------------------------------------
  // UPDATE FORM FIELD Event Listener 
  // ----------------------------------------------

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let updatedSmFormData = smFormData.map((item) => {
      if (name === item.platform) {
        item.link = value
      }
      return item;
    })

    setSmFormData(updatedSmFormData);
    setSocialMediaDataSaved(false);
  };
  
  // ----------------------------------------------
  // SUBMIT BUTTON event listener
  // ----------------------------------------------
  const handleSaveSocialMedia = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
// flag for "saved" message
    setSocialMediaDataSaved(true);

    // go through the socialMediaLinks
    // if already exists in userState then do an update use socialMedia._id and do an update
    // else do an add only if a link exists
    var i;
    for (i = 0; i < smFormData.length; i++) {
      let id = '';
      if (userState.socialMedia) {
        var j;
        for (j = 0; j < userState.socialMedia.length; j++) {
          if (userState.socialMedia[j].platform === smFormData[i].platform) {
            id = userState.socialMedia[j]._id
          }
        }
      }
      console.log("ID", id)
      console.log("smFormData[i]", smFormData[i])
      
      if (id && smFormData[i].link) {
        try {
          await updateSocialMedia({
            variables:  {_id: id, platform: smFormData[i].platform, accountLink: smFormData[i].link }
          })
        } catch (e) {
          console.error(e);
        }
      } else if (id && !smFormData[i].link) {
        try {
          await removeSocialMedia({ variables: { _id: id } })
        } catch (err) {
          console.error(err);
        }    
      } else if (smFormData[i].link) {
        console.log("IN ADDSOCIALMEDIA", smFormData[i])
        try {
          await addSocialMedia({
            variables: { platform: smFormData[i].platform, accountLink: smFormData[i].link }
          })
        } catch (e) {
          console.error(e);
        }
      }
    }
  }

  return (
    <section className=" rounded  font-dark-blue  ">
      <Card.Body  className="raleway-font  font-dark-blue  ">
      <Form noValidate validated={validated} onSubmit={handleSaveSocialMedia}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Error entering social media links.
        </Alert>
          {smFormData.map((smData) => {
            return (
            <div className="flex-col w-full" key={smData.platform}>
              <label className="raleway-font  font-dark-blue text-xl" >
                <span className="text-left">
                  {smData.platform}:
                </span>
              </label>
              <input
                type="text"
                name={smData.platform}
                required onChange={handleInputChange}
                value={smData.link}
                className="form-input px-4 py-3 w-full my-3 mb-4 font-dark-blue bd-dark-blue border-2 rounded">
              </input>
            </div>
            )
          })}


        <Button type='submit' className="btn-primary mt-4">
          Save
        </Button>
        {socialMediaDataSaved ? (
            <div className="font-sienna text-base"> Social Media Saved </div>
          ) : null}

        </Form >

      </Card.Body>

    </section >
  );
};

export default SocialMedia;