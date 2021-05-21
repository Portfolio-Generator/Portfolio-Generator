import React from 'react';
import { saveAs } from 'file-saver';
import { Button } from 'react-bootstrap';
 
import UserPortfolioCss from '../UserPortfolioCss/UserPortfolioCss';
import UserPortfolioHtml from '../UserPortfolioHtml/UserPortfolioHtml';

const JSZip = require("jszip");

const PortfolioBuildButton = ({ userState, setUserState }) => {
  const handleCreateZip = async () => {
    // get token
    // const token = Auth.loggedIn() ? Auth.getToken() : null;

    // if (!token) {
    //   return false;
    // }

    const ziphtml = new JSZip();
    const zipcss = new JSZip();
    const htmlString = UserPortfolioHtml({userState}); 

    const cssString = UserPortfolioCss;
    // create a file and folder

    ziphtml.file('index.html', htmlString);
    zipcss.file('style.css', cssString);

    // zip.generateAsync({ type: "string" })
    //   .then(function (content) {
    //     // see FileSaver.js
    //     saveAs(content, "example.zip");
    //   });

    ziphtml.generateAsync({ type: "blob" })
      .then(function (blob) {
        saveAs(blob, "html.zip");
      });
      zipcss.generateAsync({ type: "blob" })
        .then(function (blob) {
          saveAs(blob, "css.zip");
        });
  };

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="container">

          <Button type="button" className="btn-primary" onClick={() => handleCreateZip()}>Create Portfolio Zip File</Button>

          {/* <p>Does not work in IE, has restrictions on the length.</p>
          <button id="data_uri" className="btn btn-primary">click to download</button> */}
        </div>
      </div>
    </main>
  );
};

export default PortfolioBuildButton;
