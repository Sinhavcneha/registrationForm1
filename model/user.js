
const mongoose = require('mongoose')


const employeeSchema = new mongoose.Schema({

    name: { type: String },
        
    
    email : { type:String,
    required: true,


    
},
    password:{ type:String,
   required:true ,
   unique: true,
  
},
    repeatPassword:{type:String,
        required:true,
        unique:true
        
    },
});
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee ;
