import  express   from "express";
import { PORT ,MONGODBURL} from "./config.js";
import mongoose from "mongoose";
import User from "./models/UserSchema.js";
import cors from "cors";
import Booking from "./models/BookingSchema.js";
const app = express();
app.use(express.json())
app.use(cors());



app.post('/users',async (req,res) => {


    User.create({email:req.body.email,
        password:req.body.password,
        name:req.body.name,
        role:req.body.role
        ,gender:req.body.gender});

   
    res.json(req.body);

    


});

app.post('/login',async(req, res)=>{

    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
       return res.json({message: 'User not found'})
    }
    const auth = (password == user.password);
    if(!auth) return res.json({message: 'incorrect password'})


    return res.status(200).json({login:true});


})


app.get('/users',async(req, res) => {
    try {
        const allusers = await User.find({});
        res.status(200).json(allusers);
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
        
    }
})

app.get('/users/:id',async(req, res) => {
    try {
        const {id}=req.params;
        const allusers = await User.findById(id);
        res.status(200).json(allusers);
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
        
    }
})

app.put('/users/:id',async(req,res) => {

    try {

        const {id} = req.params;
        const newuser ={
            _id:id,
            email:req.body.email,
            password:req.body.password,
            name:req.body.name,
            role:req.body.role
            ,gender:req.body.gender
            
        }
        const result= await User.findByIdAndUpdate(id,newuser);
        console.log(result);

        if(!result) {return res.status(404).json({error: 'User not found'});}
        return res.status(200).json({message:"User updated successfully"});


        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})

app.delete('/users/:id',async (req, res) => {

    try
     {

        const {id} = req.params

        const result = await User.findByIdAndDelete(id);

        if(!result) return res.status(404).send({message: 'User not found'});
        return res.status(200).send({message:'user deleted successfully'});

        
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error})
        
    }
})

app.post('/create',async(req, res)=>{

    
console.log(req.body)

    Booking.create({

        doctor:req.body.doctor,
        user:req.body.user,
        date:req.body.date
    });
    res.json(req.body);

})

app.get('/booking',async(req, res)=>{
    try {
        const bookings = await Booking.find({});
        res.status(200).json(bookings);
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
        
    }

})

mongoose.connect(MONGODBURL).then(()=>{
    console.log(`database connection successful`);
    app.listen(PORT,()=>{ console.log(`listening on port ${PORT} ` )});

}).catch((error)=>{
    console.log(error)
})