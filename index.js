/* 
This is QR-Code genetator that I built with JavaScript using the Inquirer and qr-image package from npm
befor you can run this code, make sure you initialize npm and that you install Inquirer and qr-image from npm
The code uses the CSM for import.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Type your url: ",
        name: "URL",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img2.png"));


    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });