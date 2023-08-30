// detta är uppgift 1.8-1.11

// const express = require("express");
// const app = express();
// const PORT = 3000;
// const cookieParser = require('cookie-parser');
// const fs = require("fs");
// app.use(cookieParser());

// fs.readFile('text.txt', 'utf8', function(err, data) {
//     if (err) {
//         console.error('Det uppstod ett fel:', err);
//         return;
//     }
//     console.log(data);
// });

// let puppy = {
// 	name: "Kippis",
// 	breed: "Spitz",
// 	color: "Black",
// 	age: 11,
// isCute: true
// }


// app.get("/", (req, res) => {
//     res.send(puppy.name + " är " + puppy.age + " år gammal.");
//     console.log("Cookies :  ", req.cookies);
// })


// app.listen(PORT, () => {
//     console.log('Listening on port', PORT);
// });


// detta är uppgift 1.12


const { json } = require("body-parser");
const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");
app.use(express.json());


app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});

let dogs = [];



fs.readFile('./dogs.json', 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading file:', err);
     
    }


  
    dogs = JSON.parse(data);
  });


app.get("/dogs", (req, res) => {
   
  
      res.send(dogs);
    });

    app.post("/dogs", (req, res) => {
        let newDog = req.body;
        dogs.push(newDog);
        fs.writeFile('./dogs.json', JSON.stringify(dogs), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                res.status(500).send('Error writing file');
                return;
            }
            res.sendStatus(200);
        });
    });

  