const mongoose = require("mongoose");

const taskPlanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    asgto: {
      type: String,
      required: true,
    },
    asgby: {
      type: String,
      
    },
    description: {
      type: String,
    },
    file: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
    marks: {
      type: String,
    },
    remarks: {
      type: String,
    },
    proposalId:{
    type:String
    },
    solFile:{
      type:String
    },
    planUid:{
      type:String
    },
    taskby:{
      type:String
    },
    ideaId:{
      type:String
    },
    interim:{
      type:String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TaskPlans", taskPlanSchema);
