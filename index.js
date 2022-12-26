var mongoClint=require('mongodb').MongoClient;
var url="mongodb+srv://eyasina:c0W2slssudMIm5kd@cluster0.ecuhx2g.mongodb.net/?retryWrites=true&w=majority"
var config={useUnifiedTopology:true};
mongoClint.connect(url,config,function(error,MyMongoClient){
if(error){
    console.log("Data Connection Fail")
}else{
    console.log("Data Connection success")
    InsertData(MyMongoClient)
}
})
function InsertData(MyMongoClient){
    var MyDataBase=MyMongoClient.db("student");
    var MyCollection=MyDataBase.collection('class');
    var MyData={name:"Abdul ALi",Roll:"334756",Reg:"34343"};
    MyCollection.insertOne(MyData,function(error){
        if(error){
            console.log("Data Insert Fail")//Data Insert Fail 
        }else{
            console.log("Data Insert Success")
        }
    })
    
}

