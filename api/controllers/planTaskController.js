const PlansTask = require("../models/PlansTask");


const add = async (req, res) =>{
    
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    
     
      let sampleFile = req.files.proposalFile;
    

      await sampleFile.mv('./uploads/' + sampleFile.name, function(err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
      
      const proposal = new PlansTask({   
        proposalFile: sampleFile.name,
        uid: req.body.uid, 
        planTaskId:req.body.planTaskId
      });

      

      try {
    
        const response = await proposal.save();
        res.json(response);
      } catch (error) {
        res.status(400).send({'message':error.message});
      }

}

module.exports = {
    add,
}