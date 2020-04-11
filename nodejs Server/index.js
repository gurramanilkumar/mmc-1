var express = require('express')
var cors = require('cors')
var app = express()
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
const router = express.Router();

const http = require('http');
const hostname = 'localhost';
const port = 3000;

// const server = http.createServer((req, res) => {
// res.statusCode = 200;
// res.setHeader('Content-Type', 'text/plain');
// res.end('NodeJS server running on Shared Hosting\n');




app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.static('public/www'));
app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.htm");
})
app.use('/', router);
var toMail, subject, Message, userName, userMail, phoneno;
app.post('/default', function(req, res) {
        console.log(req.body)
        toMail = req.body.duration;
        subject = req.body.subject;
        Message = req.body.Message;
        userName = req.body.userName;
        userMail = req.body.userEmail;
        phoneno = req.body.phoneNo;
        var transporter = nodemailer.createTransport({
            // service: 'mail.a3web.in',
            service: 'Godaddy',
            host: "imap.secureserver.net",
            secureConnection: true,
            port: 465,
            auth: {
                user: 'admin@a3web.in',
                pass: 'Anitha@143'
            }
        });

        var mailOptions = {
            from: userName + " " + "<" + 'admin@a3web.in' + ">",
            to: toMail,
            replyTo: userMail,
            subject: subject,
            text: Message + "\n\n" + "From" + "\n" + userName + "\n" + "Phone No:" + phoneno
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                res.status(200).json({
                    message: 'success'
                });
                console.log('Email sent: ' + info.response);
            }
        });
    })
    // });
app.listen(3000, function() {
    console.log('CORS-enabled web server listening on port 80')
})

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });