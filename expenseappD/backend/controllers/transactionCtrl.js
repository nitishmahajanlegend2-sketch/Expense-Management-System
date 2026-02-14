const transactionModel=require('../models/transectionModel');
const moment=require('moment');

const getAllTransaction=async(req,res)=>{
    try{
        const {frequency,selectedDate,type}=req.body;
        

        const transactions=await transactionModel.find({
            ...(frequency !=='custom' ? {date:{
                $gte:moment().subtract(Number(frequency),'d').toDate(),
                $lte: moment().toDate() 
            }}:{
                date:{
                    
                    $gte:selectedDate[0],
                    $lte:selectedDate[1],
                },
            } ),
            
            userid:req.body.userid,...(type !=='all' && {type})})
        res.status(200).json(transactions)


    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }


}
/**
const getAllTransaction = async(req, res) => {
  try {
    const { frequency, userid } = req.body;
    
    // Log what you're receiving
    console.log('Request body:', req.body);
    console.log('Frequency:', frequency, 'Type:', typeof frequency);
    console.log('UserID:', userid, 'Type:', typeof userid);
    
    // Calculate date threshold
    const dateThreshold = moment().subtract(Number(frequency), 'd').toDate();
    console.log('Date threshold:', dateThreshold);
    console.log('Current date:', new Date());
    
    // Build query
    const query = {
      date: { $gte: dateThreshold },
      userid: userid
    };
    console.log('Query:', JSON.stringify(query, null, 2));
    
    // Execute query
    const transactions = await transactionModel.find(query);
    console.log('Found transactions:', transactions.length);
    console.log('Transactions:', transactions);
    
    // Also check total count for this user
    const totalCount = await transactionModel.countDocuments({ userid: userid });
    console.log('Total transactions for this user:', totalCount);
    
    res.status(200).json(transactions);
  } catch(error) {
    console.log('Error:', error);
    res.status(500).json(error);
  }
}*/

const addTransaction=async(req,res)=>{
    try{
        const newTransaction=new transactionModel(req.body)
        await newTransaction.save();
        res.status(201).send('transaction created')

    }
    catch(error){
        console.log(error)
        res.status(500).json(error);

    }
}
const editTransaction=async(req,res)=>{
    try{
        await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
        res.status(200).send('Edit Successfully');

    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }

}
const deleteTransaction=async(req,res)=>{
    try{
    await transactionModel.findOneAndDelete({_id:req.body.transactionId})
    res.status(200).send("transaction Deleted")

    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }


}
module.exports={getAllTransaction,addTransaction,editTransaction,deleteTransaction};

