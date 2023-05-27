import express, { urlencoded } from 'express';
const app = express();
import  main from './routes/main';
import client from './client/client';
// Middleware to parse request bodies
app.use(urlencoded({ extended: false }));

// Route to handle the GET request for the form page
app.get('/', client);

// Route to handle the POST request and process the form data
app.use('/api',main)
// Undefined Route Implement
app.use("*",(req,res)=>{
  res.status(404).json({status:"fail",data:"Not Found"})
})
// Start the server
app.listen(8001, () => {
  console.log('Server is running on http://localhost:8000');
});