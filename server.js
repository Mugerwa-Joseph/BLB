//this is where your express sever is created and managed
const express = require ('express')
const app = express()
//do not forget to import the necessary modules,
const mongoose = require('mongoose')
const path = require('path')

//do not forget to connect to your mongoDb

mongoose.connection = ('mongodb+srv://hannington:<password>@cluster0.jjs0nie.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'));
db.once('open',function(){
  console.log('connected to the db BLB')
})

//do not forget to set up routes to serve out the html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
// Do not forget to handle your form posts for the relevant forms
app.post('/index', (req, res) => {
    const {name , dob,fathername, mothername, gender, bloodGroup } = req.body;
    const newCitizen = new citizenModel({name, dob,fathername,mothername,gender,bloodGroup });
    
    newCitizen.save()
      .then(() => {
        res.send('Sign-up successful!');
      })
      .catch((error) => {
        console.error(error);
        res.status(400).send('Sign-up failed. Please try again.');
      });
  });
// Do not forget to handle form gets for the necessary data to display on the user interface.


//Do not forget to catch all the erros that may arise during the process of parsing data from one form to another.

// do not forget to create a port for your application and serving out the appliacation via the port created 
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});