// Data Delete MongoDB 
var mongoClint=require('mongodb').MongoClient;
var url="mongodb+srv://eyasinaa:mnVqGwYpAGDd88p8@cluster0.ecuhx2g.mongodb.net/?retryWrites=true&w=majority"
var config={useUnifiedTopology:true};
mongoClint.connect(url,config,function(err,MyMongoClient){
if(err){
    console.log("Data Connection Fail")
}else{
    console.log("Data Connection success")
    //Data Insert MongoDb
    // InsertData(MyMongoClient);
    // DeleteOneItem(MyMongoClient)
    dataUpdate(MyMongoClient);
}
})
//Data Insert MongoDb

// function InsertData(MyMongoClient){ 
//     const MyDataBase=MyMongoClient.db("school");
//     const MyCollection=MyDataBase.collection('students');
//     const MyData={name:"Abdullah",Roll:"334736",Reg:"265836"};
//     MyCollection.insertOne(MyData,function(err){
//         if(err){
//             console.log("Data Insert Fail")
//         }else{
//             console.log("Data Insert Success")
//         }
//     })
    

// }
// Data Delete MongoDB 
// function DeleteOneItem(MyMongoClient){
//     const MyDataBase=MyMongoClient.db("school");
//     const MyCollection=MyDataBase.collection('students');
//     const DeleteItem={Roll:"334756"};
//     MyCollection.deleteOne(DeleteItem,function(err){
//         if(err){
//             console.log("Data Delete Fail")
//         }else{
//             console.log("Data Delete Success")
//         }
//     })
// }
function dataUpdate(MyMongoClient){
    const MyDataBase=MyMongoClient.db("school");
        const MyCollection=MyDataBase.collection('students');
        
}