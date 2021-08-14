const express = require('express');
const router = express.Router();
const userController = require('/controllers/user');

router.get('/category', userController.allCategories);

router.get('/category/:categoryId', userController.oneCategory);

router.get('/category/worker', userController.allWorkers);

router.get('/history',  userController.getHistory);

router.get('/current',  userController.getCurrent);

router.get('worker/:workerId',  userController.oneWorker);

module.exports = router;
