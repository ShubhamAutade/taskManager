import express from 'express';
import dotenv from 'dotenv';
import prisma  from './prisma.js'

dotenv.config();


const app =  express()

const PORT = process.env.PORT || 8082 

app.use(express.json())


app.get("/test", (req, res) => {
    
    res.status(200).json(
        {
            success : true ,
            message : `Heart is Pumping`
        }
    )
})

app.listen(PORT, () => {
    console.log(`app ruining on PORT ${PORT}`);
    
})