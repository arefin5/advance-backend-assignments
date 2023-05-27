import express from 'express';
import { urlencoded } from 'express';
import main from './routes/main';
// import client from './client/client';

const app = express();

// Middleware to parse request bodies
app.use(urlencoded({ extended: true }));

// Route to handle the GET request for the form page
app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="api/twonumber">
      <input type="text" name="start" placeholder="start">
      <input type="number" name="end" placeholder="end">
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route to handle the POST request and process the form data
app.use('/api', main);

// Undefined Route Implement
app.use("*",(req,res)=>{
  res.status(404).json({status:"fail",data:"Not Found"});
});

// Start the server
app.listen(8001, () => {
  console.log('Server is running on http://localhost:8000');
});