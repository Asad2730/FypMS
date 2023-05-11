const router = require("express").Router();
const proposalController=require('../controllers/proposalController');


router.post("/",proposalController.add);
router.get('/:uid',proposalController.user_proposals)
router.post('/downloadFile/:fileName',proposalController.downloadFile)
router.get('/getProposals/:status',proposalController.getProposals)
router.put('/',proposalController.updateProposatStatus)
router.put('/addEvaluator',proposalController.addEvalouator)
router.get('/getEvaluator/:uid',proposalController.getEvaluatorProposals)
router.get('/adminHome',proposalController.adminHome)
router.get('/getx/:status',proposalController.getProposals2)

module.exports = router;
