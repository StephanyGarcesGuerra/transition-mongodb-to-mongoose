import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
    class_id:{
        type: String,
        required: true,
        unique: true
    },
    learner_id: {
        type: String,
        required: true,
        unique: true
    },
    scores: [{
        class_type: String, 
        score:Number}]
})

export default mongoose.model('Grade', gradeSchema);
