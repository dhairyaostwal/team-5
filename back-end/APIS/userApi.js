const bcryptjs = require('bcryptjs');
const jwt= require('jsonwebtoken')
const exp= require('express')
const userApp =exp.Router();
const expressAsyncHandler=require('express-async-handler');
const bcrypt= require('bcryptjs');
require('dotenv').config()

userApp.use(exp.json())

//Importing the cloudinary
let cloudinary = require('cloudinary').v2;
let multer= require('multer');
let {CloudinaryStorage} = require('multer-storage-cloudinary'); 


//Configuring the cloudinary
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET ,
    secure:true  
  });

const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:async(req,file)=>{
        return {
            folder:"e-commerse",
            public_id: file.fieldname+"_" +Date.now()
        }
    }
})

let upload=multer({storage:storage})


//creating a user
userApp.post('/createuser',upload.single("photo"),expressAsyncHandler(async(req,res)=>{

    //getting the user collection object from the app.js
    const userCollectionObj = req.app.get('userCollectionObj');

    const imgLink= req.file.path;
    //getting the user object from the request body
    const userObj=JSON.parse(req.body.userObj);
    userObj.profileImg= imgLink;
    // userObj.delete("image");

    //Checking whether user exists
    let user=await userCollectionObj.findOne({username:userObj.username});
    
    if(user==null){
    //encrypting the password
    userObj.password=await bcrypt.hash(userObj.password,6)
    //Creating the data in the database
    await userCollectionObj.insertOne(userObj);
    res.send({message:"New user created"});
    }
    else
    res.send({message:"User already exists"});

}))


//give the token to the user with authentication
userApp.post('/login',expressAsyncHandler(async(req,res)=>{
        const userCollectionObj = req.app.get("userCollectionObj");
        // //user credentials
        let userObj = req.body;

        
        let userOfDb = await userCollectionObj.findOne({username:userObj.username});
        // user not exists  
        if(userOfDb===null)
        res.send({message:"User does not exists"})
        //user exists
        else{
            // user.password=await bcrypt.hash(user.password,6)
            let status =await bcryptjs.compare(userObj.password,userOfDb.password);
            console.log("status",status)
            // console.log(user.password," ",userObj.password);
            if(status===false) 
            res.send({message:"Wrong password"})
            else{
                //creating a token
                const token= await jwt.sign({username:userOfDb.username},'abcde',{expiresIn:60});
                res.send({message:"Success",payload:token,user:userOfDb})     
            }
        }
    }
   
    
))


//updating 
userApp.put('/updateuser',expressAsyncHandler(async(req,res)=>{
    const userCollectionObj= req.app.get('userCollectionObj');
    const user=req.body;
    await userCollectionObj.updateOne({username:user.username},{$set:{email:user.email,phone:user.phone}})
    res.send("Successfully updated")
}))

//delete
userApp.delete('/deleteuser/:id',expressAsyncHandler(async(req,res)=>{
    const userCollectionObj= req.app.get('userCollectionObj')
    const user=req.body;
    await userCollectionObj.deleteOne({username:user.username});
    res.send("Successfully deleted")
}))

module.exports=userApp;