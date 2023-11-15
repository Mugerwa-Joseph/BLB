//Remember to import in mongoose
const mongoose =require('mongoose')

//create the citizen schema here with the appropriate data types
const citizenSchema = new mongoose.Schema({
  name:String,
  dob:String,
  fathername:String,
  mothername:String,
  gender:String,
  bloodGroup:String
})


//create the title schema here wit the right fields

//convert the schemas into models from here
const citizenModel = mongoose.model('models', citizenSchema)

//export the models as modules from here.
module.exports = citizenModel