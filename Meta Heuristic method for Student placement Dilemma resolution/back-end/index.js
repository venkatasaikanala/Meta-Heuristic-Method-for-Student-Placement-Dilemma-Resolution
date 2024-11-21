// const express = require('express');


// const app=express();

// const queries = require("./routes/queries")

// const mongoose = require("mongoose");

// const cors = require('cors')
// app.use(cors())

// //db connection
// mongoose.connect('mongodb://localhost/dblearning')
// .then(()=>console.log("CONNECTED TO DB"))
// .catch((err)=>console.log("could not connect db"))


// //
// //  const querySchema = new mongoose.Schema({
// //     companyname : String,
// //     companyType : String ,
// //     queryid : Number ,
// //     query:String ,
// //     studentName:String
// // })


// //  const Query = mongoose.model('Query',querySchema);
// // app.get("/",(req,res)=>{
// //     async function getNames(){
// //         const queirs =await Query
// //         .find()
// //         res.send(queirs)
// //  }       
// //       getNames()
// // })




// //using Routes
// app.use("/Allqueries",queries)

// app.use("/addquery",queries)

// app.use("/getQueries",queries)

// app.use("/getQueries/names",queries)


// app.listen(3001,()=>{
//     console.log("3000")
// })




const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// DB Connection
mongoose.connect('mongodb://localhost/dblearning', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("CONNECTED TO DB"))
    .catch(err => console.log("Could not connect to DB:", err));

// Routes
const queries = require("./routes/queries");
app.use("/Allqueries", queries);
app.use("/addquery", queries);
app.use("/getQueries", queries);
app.use("/getQueries/names", queries);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
