const express=require("express");
const app=express();
const path=require("path");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sohailhazarysiam:JrSn691kyAP1J6uV@cluster0.jntkj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const cors=require("cors");
require("dotenv").config();




app.use(cors());
app.use(express.json());


//connect mongod
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      
      await client.connect();
       await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);

//export app
module.exports=app;

