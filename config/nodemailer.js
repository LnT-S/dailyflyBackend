import nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config()
import ejs from "ejs";
import path from "path";
const __dirname = path.resolve(path.dirname(""));

const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : process.env.NODEMAILER_EMAIL,
        pass : process.env.NODEMAILER_PASS
    },
});

let renderTemplate = function (data, relativePath) {
  let mainHtml;
  ejs.renderFile(
    path.join(__dirname, "views/mailers", relativePath),
    data,
    function (err, template) {
      if (err) {
        console.log("ERROR IN RENDERING EJS MAILER ",err);
        return;
      }
      mainHtml = template;
    }
  );
  return mainHtml;
};

export {transporter , renderTemplate}