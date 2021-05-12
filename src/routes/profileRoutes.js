const express = require('express');
const router = express.Router()
const profileCtl = require('../controllers/profile-controllers');





router.post('/crudes',profileCtl.createNewProfile);

router.get('/crudes',profileCtl.fetchNewProfile );
router.get('/crudes/:id',profileCtl.fetchNewSingleProfile);

router.put('/crudes/:id',profileCtl.updateSingleProfile);


router.delete('/crudes/:id',profileCtl.deleteSingleProfile);

    module.exports = router;
