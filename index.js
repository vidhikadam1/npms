import authRoutes from "./routs/authrouts.js";
import userRoutes from './routs/userRoutes.js';
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import server from "./server.js";
import connectDb from "./db/db.js";
connectDb();
const app = express(server);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('register')
});
app.use('/api/auth',authRoutes);
app.use('/api/user', userRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
