const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoute')

app.use(express.json())

app.listen('5000', ()=> console.log('server running on 5000'))
mongoose.connect('mongodb+srv://vaishu12092004:<vaishnavi12>@mycluster.q3thd.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))

app.use("", productRouter);

console.log("updated");
app.get('/', (req, res)=>{
    res.send('server reacted...')
})
