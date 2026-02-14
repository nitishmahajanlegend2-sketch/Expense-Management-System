//import { Router } from 'express';
const express=require('express');
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require('../controllers/transactionCtrl');
//const { loginController, registerController } = require('../controllers/userController');
//router object
const router=express.Router();
//routers
router.post('/add-transaction',addTransaction)
//get-transaction
router.post('/get-transaction',getAllTransaction)
router.post('/edit-transaction',editTransaction)
router.post('/delete-transaction',deleteTransaction)
module.exports = router;
