const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName: {
        type: String,
        required:true,
        trim:true
    },
    studentId:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    emial:{
        type:String,
        trim:true,
        lowercase:true
    },
    phone:{
        type:String,
        trim:true
    },
    dateOfBirth:{
        type:Date
    },
    gender: {
        type: String,
        enum:['Male','Female','Other']
    },
    address:{
        type:String,
        trim:true
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Class',
        required:true
    },
    school:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'School',
        required:true
    },
    enrollementDate:{
        type:Date,
        default: Date.now
    }
}, {
    timestamps:true
});

module.exports = mongoose.model('Student',studentSchema);