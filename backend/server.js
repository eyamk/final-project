const express=require('express')
const bodyParser=require('body-parser')
const{ObjectID,MongoClient}=require('mongodb')
const assert=require('assert')

const app=express()
app.use(bodyParser.json())
const MongoUrl='mongodb://localhost:27017'
const database='projectfinal'

MongoClient.connect(MongoUrl,{useNewUrlParser:true},(err,client)=>{
    assert.equal(null,err,'can not connect to database')
    const db=client.db(database)

//add contact
app.post('/add-contact',(req,res)=>{
    let newcontact=req.body
    db.collection('restaurants').insertOne(newcontact,(err,data)=>{
        if(err) res.send('cant not add contact')
        else res.send(data)
    })
})
//get restaurant
app.get('/get-contact',(req,res)=>{

db.collection('restaurants').find().toArray((err,data)=>{
     if(err) res.send('can not get contact')
    else res.send(data)
})   
})


//remove restaurant
app.delete('/delete-contact/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('restaurants').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete contact')
        else res.send(data)
    })
})
//edit restaurant
app.put('/edit-contact/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let updated=req.body
db.collection('restaurants').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
    if(err) res.send('can not edit the contacts')
    else res.send (data)
})
})


//offer


//add offer
app.post('/add-offer',(req,res)=>{
    let newoffers=req.body
    db.collection('offers').insertOne(newoffers,(err,data)=>{
        if(err) res.send('cant not add contact')
        else res.send(data)
    })
})
//get offer
app.get('/get-offer',(req,res)=>{

db.collection('offers').find().toArray((err,data)=>{
     if(err) res.send('can not get contact')
    else res.send(data)
})   
})


//remove offer
app.delete('/delete-offer/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('offers').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete contact')
        else res.send(data)
    })
})
//edit offer
app.put('/edit-offer/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let updateoffers=req.body
db.collection('offers').findOneAndUpdate({_id:id},{$set:{...updateoffers}},(err,data)=>{
    if(err) res.send('can not edit the contacts')
    else res.send (data)
})
})










})




app.listen(3050,(err)=>{
assert.equal(null,err,'server not running')
console.log('the server is running on port 3050')
})
