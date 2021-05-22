import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { ADD_SOCIAL_MEDIA } from '../../utils/mutations';
import Card from "react-bootstrap/Card"

const SocialMedia = () => {
  // the name of the platform is in one array, and
  // the corresponding link is in state
  // tbd is put them in one object, but for now
  // we're taking the low road

  const smPlatform = [
    "Discord",
    "Facebook",
    "GitHub",
    "Instagram",
    "LinkedIn",
    "Reddit",
    "Spotify",
    "StackOverFlow",
    "Twitch",
    "Twitter",
    "YouTube"
  ]

  // smFormData will contain the user inputed link to their social media  
  const [smFormData, setSmFormData] =
    useState({
      Discord: '',
      Facebook: '',
      GitHub: '',
      Instagram: '',
      LinkedIn: '',
      Reddit: '',
      Spotify: '',
      StackOverflow: '',
      Twitch: '',
      Twitter: '',
      YouTube: ''
    });
    

  const [addSocialMedia] = useMutation(ADD_SOCIAL_MEDIA);

  //input form validation
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  //userState.socialMedia array is a possible array of values. Need to map those into smFormData urls
  // useEffect(() => {
  //   if (!userState) return;
  //   if (userState?.socialMedia) {
  //     setSmFormData(userState.socialMedia.map(media => ({ media.platform: skill, selected: userState.devSkills.includes(skill) })));
  //   }
  // }, [userState])

  // ----------------------------------------------
  // UPDATE FORM FIELD Event Listener 
  // ----------------------------------------------

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSmFormData({ ...smFormData, [name]: value });
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
    console.log("** HANDLE SAVE SOCIAL MEDIA smFormData ** ", smFormData)
    console.log("smPlatform", smPlatform)
    
    let socialMediaLinks = Object.entries(smFormData).filter(smLink => smLink[1])
    console.log("???? socialMediaLinks (from smFormData)", socialMediaLinks)

    var i;
    for (i = 0; i <socialMediaLinks.length; i++) {
      console.log("HERE IS MY LINK", socialMediaLinks[i])

      try {
        const data = await addSocialMedia({
          variables: { platform: socialMediaLinks[i][0], accountLink: socialMediaLinks[i][1] }
        })
        console.log("**returned user** ", data)
      } catch (e) {
        console.error(e);
      }
    }

  }

    // ---FORM SETUP-------------------------------------------

    const smField = (description, fieldName, value) => {
      return (<div className="flex-col w-full">
        <label className="raleway-font text-gray-700 text-xl" >
          <span className="text-left">
            {description}
          </span>
        </label>
        <input
          type="text"
          name={fieldName}
          required onChange={handleInputChange}
          value={value}
          className="form-input px-4 py-3 w-full mt-1">
        </input>
      </div>
      )
    }
    // ----------------------------------------------

    return (
      <section>
        <Form noValidate validated={validated} onSubmit={handleSaveSocialMedia}>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Error entering social media links.
        </Alert>

          <Card.Body className="raleway-font">
            {smField("Discord: ", "Discord", smFormData.discord)}
            {smField("FaceBook: ", "Facebook", smFormData.facebook)}
            {smField("GitHub: ", "Github", smFormData.github)}
            {smField("Instagram:", "Instagram", smFormData.instagram)}
            {smField("LinkedIn", "LinkedIn", smFormData.linkedIn)}
            {smField("Reddit:", "Reddit", smFormData.reddit)}
            {smField("Spotify:", "Spotify", smFormData.spotify)}
            {smField("StackOverflow:", "StackOverflow", smFormData.stackOverflow)}
            {smField("Twitch:", "Twitch", smFormData.twitch)}
            {smField("Twitter:", "Twitter", smFormData.twitter)}
            {smField("YouTube:", "YouYube", smFormData.youtube)}
          </Card.Body>

          <Button type='submit' variant='success'>
            Save FORM
        </Button>

        </Form >
      </section >
    );
  };

export default SocialMedia;