const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    member1: {
      type: String,
      required: true,
    },
    member2: {
        type: String,
        required: true,
      },

      supervisorId: {
        type: String,
        required: true,
      },

      proposalFile: {
        type: String,
        required: true,
      },

      uid:{
        type:String,
        require:true,
      },
      evid:{
        type:String,
     
      },
      status:{
        type:String,
        require:true  
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("proposals", proposalSchema);
