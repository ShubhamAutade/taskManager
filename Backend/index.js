import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config()

const app = express()
const PORT = process.env.PORT || 8082

app.use(cors())
app.use(express.json())


app.get('/test', (req, res) => {
    res.status(200).json({
        success : true,
        message :"running"
    })
})




app.listen(PORT, ()=> {
    console.log(`app listing on PORT ${PORT}`);
    
})