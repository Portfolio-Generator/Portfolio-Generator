# Portfolio-Generator
DATA STRUCTURES:
// PROJECT:
//  projectTitle!
//  organization
//  imgLinkLink
//  deployedLink
//  skillList
//USER:
// username!
// email!
// password!
// headshot
// bio
// projects[Project]
// friends[User]
[square brackets] = UI logic
<angle brackets>  = UI function/component
{curly braces} = Input and/or display
CAPS = DATABASE access
Header
  {Title}
    [If logged in]
      <USER-INFO LINK>
      --TBD: functionality to update user info--
        {USERNAME} <CHANGE-USERNAME>
        {EMAIL} <CHANGE-EMAIL>
        <?PAYMENT>
        <Logout link>
    [If NOT logged in]
      <login link>
        <LOGIN USER FORM>
      <signup link>
      <CREATE-USER-FORM>
Portfolio Builder
  <PREFERENCE settings>
  [LOAD/SAVE/download]
  {BIO}
  {PHOTO LINK}
  {PROJECT OBJECT ARRAY with
    --?what should be required--
    TITLE
    (opt) ORGANIZATION
    LINK TO THUMBNAIL
    LINK TO DEPLOYED APP
    SKILLS LIST
    }
Footer
• {Copyright notice}
/////////////////////////////////
What needs to change from module 21?
////////////////////////////////////
Database object for Portfolio
Database templates for HTML
Ability to update user info
USESTATE Actions and reducers
PWA?
MOVE Secret to .env file
Premium template - $1.00 donation to charity