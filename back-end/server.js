//Importing the express 
const exp= require('express')
const app= exp();
require('dotenv').config()

const path= require('path')
app.use(exp.static(path.join(__dirname,'./build')));



//Connecting the api with mongodb
const dbUrl=process.env.DATABASE_CONNECTION_URL

//importing the mongodb
const mclient=require('mongodb').MongoClient;



mclient.connect(dbUrl)
.then((client)=>{
    //creating a databse object
    const dbObj= client.db("mongo_demo");
     
    //creating the product collection object
    const productCollectionObj=dbObj.collection("productCollectionObj")
    const userCollectionObj = dbObj.collection('userCollectionObj')

    //sharing the product collection object
    app.set("productCollectionObj",productCollectionObj);
    app.set('userCollectionObj',userCollectionObj);

})
.catch(err=>console.log("Connection error",err));







//Importing the product and userapp
const userApp=require('./apis/userApi')  

//Routing the user and product api
app.use('/user',userApp);

//Handling the refresh 
app.use('*',(req,res,next)=>{
    //Sending the html file
    res.sendFile(path.join(__dirname,'./build/index.html'));
})

//Invalid path handling
app.use((req,res,next)=>{
    res.send({message:'invalid url path'})
})


//error handling
app.use((err,req,res,next)=>{
    res.send(`Error occured ${err}`)
})


const port= process.env.PORT;

app.listen(port,()=>{
    console.log(`Listening at port:${port}`);
})