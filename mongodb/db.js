var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/adhi";

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},function(err, db) {
    if (err) throw err
    let dbo = db.db("adhi")
    let d1 = {
        title:'post two',
        body:'body of post two',
        category:'umma',
        likes:102,
        tags:['nes','eents'],
        user:{
            name:'Adhash',
            status:'Auhor'
        },
        date:Date()
    }

    // dbo.collection('tC').updateMany({

    // })

    dbo.collection('tC').find({},{projection:{_id:0,date:1}}).sort({date:-1}).toArray((err,res)=>{
        if (err) throw err
        console.log(res)
        db.close()
    })

    // dbo.collection("tC").insertOne(d1,(err, res)=>{
    //     if(err) throw err;
    //     console.log(d1.title+" document inserted");
    //     db.close();
    // });
    
    // dbo.createCollection("tC",(err,res)=>{
    //     if(err) throw err;
    //     console.log("Collection created!")
        // db.close();
    // })
});