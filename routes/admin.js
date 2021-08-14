const express = require('express');
const router = express.Router();
const adminController = require('/controllers/admin');


router.get('/worker/:workerId', adminController.oneWorker);

router.get('/worker', adminController.allWorkers);

router.post('/worker', adminController.createWorkers);

router.put('/worker', adminController.updateWorkers);

router.delete('/worker', adminController.deleteWorkers);


router.get('/user', adminController.allUsers);

router.put('/user/:userId', adminController.editUser);


module.exports = router;
