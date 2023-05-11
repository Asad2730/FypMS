const Proposal = require("../models/proposal");
const  User = require("../models/user");
const fs = require('fs');
const path = require('path');
const Enumerable = require('linq');

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
      
      const proposal = new Proposal({
        title: req.body.title,
        member1: req.body.member1,
        member2: req.body.member2,
        supervisorId: req.body.supervisorId,
        proposalFile: sampleFile.name,
        uid: req.body.uid,
        status:'pending',
      });

      
   console.log('proposal',proposal)
      try {
    
        const response = await proposal.save();
        res.json(response);
      } catch (error) {
        res.status(400).send({'message':error.message});
      }

}


const getEvaluatorProposals = async (req, res) => {
  try {

   
    let rs = [];
    const uid = req.params.uid;
    const proposals = await Proposal.find(
     {
      'evid':uid,
     }
    );
 
    for (let i = 0; i < proposals.length; i++) {
      let id = proposals[i]['supervisorId'];
      let stdId1 =  proposals[i]['member1'];
      let stdId2 =  proposals[i]['member2'];
    
       let std1 = await User.findById(stdId1)
       let std2 = await User.findById(stdId2) 
      let user = await User.findById(id);
   

      if (user && std1 && std2) {
        let proposal = proposals[i];
        let data = { proposal, user,std1,std2 };
        rs.push(data);            
      }
    }
    res.json(rs);
  } catch (error) {
    res.json({ message: error });
  }
}

const user_proposals = async (req, res) => {
    try {
      let rs = [];
      const uid = req.params.uid;
      const proposals = await Proposal.find(
       {
        $or: [
          { 'member1': uid },
          { 'member2': uid },
          {'supervisorId':uid},
        ]
       }
      );
       
      for (let i = 0; i < proposals.length; i++) {
        let id = proposals[i]['supervisorId'];
        let stdId1 =  proposals[i]['member1'];
        let stdId2 =  proposals[i]['member2'];

         let std1 = await User.findById(stdId1)
         let std2 = await User.findById(stdId2) 
        let user = await User.findById(id);

        if (user && std1 && std2) {
            let proposal = proposals[i];
          let data = { proposal, user,std1,std2 };
          rs.push(data);
         
          
        }
      }
      res.json(rs);
    } catch (error) {
      res.json({ message: error });
    }
  }
 
  
  const downloadFile = (req, res) => {
    const fileName = req.params.fileName; // get fileName from URL params
    const filePath = path.join(__dirname, '../uploads', fileName);
  
    fs.readFile(filePath, function (err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
      res.setHeader('Content-Type', 'text/plain');
      res.send(data);
    });
  };
  


  const getProposals = async (req,res)=>{
    try{
      let {status} = req.params;
      const pending = await Proposal.find({'status':status});
      res.json(pending)

    }catch(ex){
      res.json(ex)
    }
  }


  const updateProposatStatus = async (req,res)=>{
    try{
      let {id,status} = req.body;
      const pending = await Proposal.findByIdAndUpdate(
        { _id: id },
        {status:status}
      );
      res.json(pending)

    }catch(ex){
      res.json(ex)
    }
  }


  const addEvalouator = async (req,res)=>{
    try{
      let {id,evid,status} = req.body;
      const pending = await Proposal.findByIdAndUpdate(
        { _id: id },
        {
          status:status,
          evid:evid
        }
      );
      res.json(pending)

    }catch(ex){
      res.json(ex)
    }
  }


  const adminHome = async (req,res)=>{
    console.log('l','okkk')
    try {
     let rs = [];
      const proposals = await Proposal.find({status:'accept2'})
      console.log('l',proposals.length)
       
      for (let i = 0; i < proposals.length; i++) {
        let id = proposals[i]['supervisorId'];
        let stdId1 =  proposals[i]['member1'];
        let stdId2 =  proposals[i]['member2'];
        let evid = proposals[i]['evid'];

         let std1 = await User.findById(stdId1)
         let std2 = await User.findById(stdId2) 
         let user = await User.findById(id);
         let ev  = await User.findById(evid);

        if (user && std1 && std2 && ev) {
            let proposal = proposals[i];
          let data = { proposal, user,std1,std2,ev };
          rs.push(data);
              
        }
      }
      res.json(rs);
    } catch (error) {
      res.json({ message: error });
    }
  }


  const getAll = async (req, res) => {
   
    try {
     
      const proposals = await Proposal.find();
      res.json(proposals);
    } catch (error) {
      res.json({ message: error });
    }
  };

  const getProposals2 = async (req,res)=>{
    console.log('l','okkk')
    try {
     let rs = [];
      const proposals = await Proposal.find({status:'accept2'})
      console.log('l',proposals.length)
       
      for (let i = 0; i < proposals.length; i++) {
        let id = proposals[i]['supervisorId'];
        let stdId1 =  proposals[i]['member1'];
        let stdId2 =  proposals[i]['member2'];
        let evid = proposals[i]['evid'];

         let std1 = await User.findById(stdId1)
         let std2 = await User.findById(stdId2) 
         let user = await User.findById(id);
         let ev  = await User.findById(evid);

        if (user && std1 && std2 && ev) {
            let proposal = proposals[i];
          let data = { proposal, user,std1,std2,ev };
          rs.push(data);
              
        }
      }
      res.json(rs);
    } catch (error) {
      res.json({ message: error });
    }
  }

module.exports = {
    add,
    user_proposals,
    downloadFile,
    getProposals,
    updateProposatStatus,
    addEvalouator,
    adminHome,
    getEvaluatorProposals,
    getAll,
    getProposals2
}