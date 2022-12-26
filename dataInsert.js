// Data Insert MongoDB 
var mongoClint=require('mongodb').MongoClient;
var url="mongodb+srv://eyasinaa:mnVqGwYpAGDd88p8@cluster0.ecuhx2g.mongodb.net/?retryWrites=true&w=majority"
var config={useUnifiedTopology:true};
mongoClint.connect(url,config,function(err,MyMongoClinet){
if(err){
    console.log("Data Connection Fail")
}else{
    console.log("Data Connection success")
    InsertData(MyMongoClinet);
}
})
function InsertData(MyMongoClinet){ 
    const MyDataBase=MyMongoClinet.db("school");
    const MyCollection=MyDataBase.collection('students');
    const MyData={name:"Abdullah",Roll:"334736",Reg:"265836"};
    MyCollection.insertOne(MyData,function(err){
        if(err){
            console.log("Data Insert Fail")
        }else{
            console.log("Data Insert Success")
        }
    })
    
}

