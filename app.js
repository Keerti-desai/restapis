let express= require("express");
let app=express();//inisialising
//  let port=9000
let cors=require('cors')
let mongo=require('mongodb')
let MongoClient=mongo.MongoClient
let mongoUrl="mongodb://127.0.0.1:27017"
//let mongoUrl="mongodb+srv:<test123>:<vgK4rxzMwv11j7hV>@cluster0.sxpkhgk.mongodb.net/?retryWrites=true&w=majority"


let port = process.env.PORT || 9000
let bodyParser = require("body-parser")
let db;

// middleware (supporting library)
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send('<h1>Hi from express</h1>')
})
//one more route
app.get('/cart',(req,res)=>{
    db.collection('cart')
    .find()
   .toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//////////////////////////
app.get('/productlist',(req,res)=>{
   // let id = req.params.id;
   let categoryid=req.query.categoryid
   let query={}
   if (categoryid){
       query = {category: categoryid}
   }
   console.log(categoryid);
   db.collection('datafile').find(query).toArray((err,result)=>{
       if(err) throw err;
       res.send(result)
       
   })
})
// app.get('/productlist/:categoryid', (req, res) =>{
//     let query = {}      
//     let categoryid = req.params.categoryid;
//     let product_name = req.query.product_name
//     let brand = req.query.brand

//         if (brand) {
//         query = {category: categoryid, brand: brand}
//         }
//     console.log(categoryid, brand, query);
//     db.collection('datafile').find(query).toArray((err, result) => {
//         if(err) throw err;
//         res.send(result)
//     })
// })
http://localhost:9000/productlist?categoryid=Nykaa Cosmetics

app.get('/productlist/:categoryid', (req, res) =>{
    let query = {}      
    let categoryid = req.params.categoryid;
    let product_name = req.query.product_name
    let brand = req.query.brand
    let price = req.query.price
    let description = req.query.description
        if (brand) {
        query = {category: categoryid, brand: brand}
        }
        else if(price && brand){
        query =  {category: categoryid,price:price,brand:brand}
        }
        else if(description&&brand){
        query={category: categoryid,description:description,brand:brand}}

    console.log(categoryid, brand ,price,description,query);
    db.collection('datafile').find(query).toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
})
"http://localhost:9000/product-detail/FFP2 S Mask"

//product Detail
app.get('/product-detail/:product_name', (req, res) => {
    let query = {}
    let product = req.params.product_name
    if (product) {
        query = {product_name: product}
    }
    console.log(product);
    db.collection('datafile').find(query).toArray((err, result) => {
        if(err) throw err;
        res.send(result)
        
    })
})
// placing order
app.post('/placeOrder', async (req, res) => {
    console.log(req.body);
    await db.collection('orders').insert(req.body, (err, result) => {
        if(err) throw err;
        res.send('order placed successfully');
    })
})

//getting orders
app.get('/viewOrder', (req, res) =>{
    let email = req.query.email
    let query = {};
    if (email) {
        query={email: email}
    } else {
        query={}
    }
    db.collection('orders').find(query).toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
})

//update order
app.put('/updateOrder/:orderId', (req, res) => {
    let oid = Number(req.params.orderId)
    db.collection('orders').updateOne(
        {orderId: oid},
        {
            $set:{
                "status": req.body.status,
                "bank_name": req.body.bank_name,
                "date": req.body.date
            }
        }, (err, result) => {
            if (err) throw err;
            res.send('order Updated')
        }
    )
})

// Delete Order
app.delete('/deleteOrder/:deleteId', (req, res) => {
    let _id = mongo.ObjectId(req.params.deleteId);
    db.collection('orders').remove({_id}, (err, result) => {
        if (err) throw err;
        res.send("Order deleted successfully")
    })
})


//connect with mongodb
MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,dc)=>{
   if (err) {
  console.log('error while connecting')
   }else {
       db=dc.db ('nykacart');
   app.listen(port,()=>{
       console.log(`server is running on port ${port}`)
   })
} 
});

