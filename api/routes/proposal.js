const router = require("express").Router();
const proposalController=require('../controllers/proposalController');


router.post("/",proposalController.add);

router.get("/all",proposalController.all);
router.get('/:uid',proposalController.user_proposals)
router.post('/downloadFile/:fileName',proposalController.downloadFile)
router.get('/getProposals/:status/:id',proposalController.getProposals)
router.put('/',proposalController.updateProposatStatus)
router.put('/addEvaluator',proposalController.addEvalouator)
router.get('/getEvaluator/:uid',proposalController.getEvaluatorProposals)
router.get('/adminHome',proposalController.adminHome)
router.get('/getx/:status',proposalController.get)
router.patch('/:id',proposalController.updateProposalStatus);


module.exports = router;
