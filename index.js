import express from 'express';
import { connectDB } from './Config/db.connect.js';
import cors from 'cors'
import { UserRouter } from './Routes/User.routes.js';
import { NoticeRouter } from './Routes/Notice.routes.js';
const app = express();
app.use(cors())
app.use(express.json());

app.use('/login',UserRouter)
app.use('/Notice',NoticeRouter)
const PORT = 8080;


app.get('/', (req, res) => {
    res.send('Welcome to the server')
})








app.listen(PORT,()=>{
    try {
     connectDB().then((res)=>{
        console.log('Successfully connected');
        console.log('listening on port ',PORT)
     }).catch((err)=>{
        console.log(err);
     })          
    } catch (error) {
        console.log(error)
    }
})