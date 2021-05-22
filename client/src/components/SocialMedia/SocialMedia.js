import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { ADD_SOCIAL_MEDIA } from '../../utils/mutations';
import { UPDATE_SOCIAL_MEDIA } from '../../utils/mutations';
import Card from "react-bootstrap/Card"

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

    let socialMediaLinks = smFormData.filter(item => item.link)
    // go through the socialMediaLinks
    // if already exists in userState then do an update use socialMedia._id and do an update
    // else do an add only if a link exists
    var i;
    for (i = 0; i < socialMediaLinks.length; i++) {
      let id = '';
      if (userState.socialMedia) {
        var j;
        for (j = 0; j < userState.socialMedia.length; j++) {
          if (userState.socialMedia[j].platform === socialMediaLinks[i].platform) {
            id = userState.socialMedia[j]._id
          }
        }
      }
      if (id) {
        try {
          const data = await updateSocialMedia({
            variables:  {_id: id, platform: socialMediaLinks[i].platform, accountLink: socialMediaLinks[i].link }
          })
        } catch (e) {
          console.error(e);
        }
      } else {
        try {
          const data = await addSocialMedia({
            variables: { platform: socialMediaLinks[i].platform, accountLink: socialMediaLinks[i].link }
          })
        } catch (e) {
          console.error(e);
        }
      }
    }

  }

  return (
    <section>
      <Form noValidate validated={validated} onSubmit={handleSaveSocialMedia}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Error entering social media links.
        </Alert>

        <Card.Body className="raleway-font">
          {smFormData.map((smData) => {
            return (
            <div className="flex-col w-full" key={smData.platform}>
              <label className="raleway-font text-gray-700 text-xl" >
                <span className="text-left">
                  {smData.platform}:
                </span>
              </label>
              <input
                type="text"
                name={smData.platform}
                required onChange={handleInputChange}
                value={smData.link}
                className="form-input px-4 py-3 w-full mt-1">
              </input>
            </div>
            )
          })}

        </Card.Body>

        <Button type='submit' variant='success'>
          Save FORM
        </Button>

      </Form >
    </section >
  );
};

export default SocialMedia;