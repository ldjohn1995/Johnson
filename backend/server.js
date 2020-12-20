import express from  'express';
import inventoryList from './inventoryList';

const app = express();

app.get("/api/product", (req, res) =>{
    res.send(inventoryList.products);
})

app.listen(600, () => {
    console.log("server started at http://localhost:5000")
})
