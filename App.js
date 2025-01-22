
// const { add, multiply, subtraction,divide } = require('./operation');

// const numbers = [1, 7, 9, 13, 5];

// console.log('Addition:', add(numbers));         
// // console.log('Multiplication:', multiply(numbers)); 
// // console.log('Subtraction:', subtraction(numbers)); 
// // console.log("division:",divide(numbers));


//  const http = require('http')
// const server = http.createServer((req,res)=>{
//     res.end("HELLO HARSHA THE DON OF SRI ESHWAR")
// })
// const PORT = 8000
// server.listen(PORT,()=>{
//    console.log(`My server is running at http://localhost:${PORT}`)
// })

// const express= require("express")
// const http = require("http"); // Importing http module (not used in this example)
//  // Importing Express module

// const app = express(); // Creating an instance of Express

// // Define a route for the root URL
// app.get("/", (req, res) => {
//     const students = [
//         { id: 1, name: "a" },
//         { id: 2, name: "b" }
//     ];
//     res.json(students); // Send the students array as JSON response
// });

// if(id)
// {
//     const result = students.find({item}=>item)
// }

// const PORT = 8000;

// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });




const express = require("express");
const app = express(); //instance of express
app.use(express.json()); //parse json data
const mongoose = require("mongoose");
const PORT = 8000;
const { v4: uuidv4 } = require('uuid');
const mongourl = "mongodb://localhost:27017/Practice"
mongoose
     .connect(mongourl)
     .then(()=>{
        console.log("Db connected")
    app.listen(PORT,()=>{
        console.log(`my server is running:${PORT}`);
    })     })

    const expenseSchema = new mongoose.Schema({
        id:{type:String,required:true,unique:true},
        title:{type:String,required:true},
        amount:{type:Number,required:true},
    });
    const expenseModel = mongoose.model("expense_tracker",expenseSchema);//collection name ,schema name

    app.post("/api/expenses",async(req,res)=>{
        const {title,amount} =req.body;
        const newExpense = new expenseModel({
            id:uuidv4(),
            title:title,
            amount:amount,
        })
        const savedExpense = await newExpense.save();
        res.status(200).json(savedExpense);
    });



    app.get("/api/expenses", async (req, res) => {
        
          const expenses = await expenseModel.find({}); 
          res.json(expenses)
         
        
      })
      
      app.get("/api/expensesbyid/:id", async (req, res) => {
           const { id } = req.params; 
          const expense = await expenseModel.findOne({ id });
       if (expense) {
         res.status(200).json(expense);
       }
      });
   

      app.put("/api/expensesbyid/:id", async (req, res) => {
        const { id } = req.params; 
        const {title,amount} = req.body;
       const book = await expenseModel.findOneAndUpdate(
       {
      id:id
       },
    {
       title:title,
       amount:amount, 
    })
    if (book) {
      res.status(200).json(book);
    }
   });
      //rest api methods
          //9 methods

    
          app.delete("/api/expensesdeletebyId/:id", async (req, res) => {
            const { id } = req.params;
            const result = await expenseModel.deleteOne({ id });
          
            if (result.deletedCount > 0) {
              res.status(200).json(result);
            } else {
              res.status(404).json({ message: "Expense not found" });
            }
          });
          





    
// const students = [
//     { id: 1, name: "a" },
//     { id: 2, name: "b" }
// ];

// app.get("/", (req, res) => {
//     res.json(students);
// });

// app.get("/params/:id", (req, res) => {
//     const { id } = req.params;
//     const result = students.find((item) => item.id === Number(id));
//     if (result) {
//         res.json(result);
//     } else {
//         res.status(404).json({ message: "Student not found" });
//     }
// });

// app.get("/Queryparams", (req, res) => {
//     const { name } = req.query;
//     if (name) {
//         const result = students.find((item) => item.name.toLowerCase() === name.toLowerCase());
//         if (result) {
//             res.json(result);
//         } else {
//             res.status(404).json({ message: "Student not found" });
//         }
//     } else {
//         res.status(400).json({ message: "Name query parameter is required" });
//     }
// });

// const PORT = 1000;

// app.listen(PORT, () => {
//     console.log(`My server runs on http://localhost:${PORT}`);
// });


