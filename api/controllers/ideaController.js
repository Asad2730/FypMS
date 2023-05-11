const Idea = require("../models/idea");


 const add = async (req, res) =>{
   
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    
      // The name of the input field (i.e. "profileImage") is used to retrieve the uploaded file
      let sampleFile = req.files.proposalFile;
    
      // Use the mv() method to place the file somewhere on your server
      await sampleFile.mv('./uploads/' + sampleFile.name, function(err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
      
      const idea = new Idea({
        title: req.body.title,
        proposalFile: sampleFile.name,
        uid: req.body.uid,
      });

      console.log('idea',idea)
      try {
    
        const response = await idea.save();
        res.json(response);
      } catch (error) {
        res.status(400).send({'message':error.message});
      }

}



  const getIdeas = async (req,res)=>{
    try{
      const pending = await Idea.find();
      res.json(pending)
    }catch(ex){
      res.json(ex)
    }
  }


module.exports = {
    add,
    getIdeas,
}