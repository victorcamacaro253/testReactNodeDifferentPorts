import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'

const app = express()

app.use(express.json())

//app.use(cors())

app.use(cors({
    origin: 'http://localhost:5173', // Allow only this origin
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
  }));
  

app.use(userRoutes)

app.get('/',(req,res)=>{
    console.log('Hello World')
    res.json({message:'Hello world victor'})
})

const PORT = process.env.PORT ?? 3008

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})