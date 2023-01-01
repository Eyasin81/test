//Mongodb Compase Connections 
const mongoDb=require('mongodb').MongoClient;
// var url="mongodb+srv://<UserName></UserName>:<password></password>@cluster0.ecuhx2g.mongodb.net/?retryWrites=true&w=majority";
var config={useUnifiedTopology:true};
mongoDb.connect(url,config,function(err,MongoClint){
    if(err){
        console.log("Data Connection Fail")
    } else{
        console.log("Data Connection Success")
        dataUpdate(MongoClint);

        
    }
})
// Data Update MongoDb Compase
function dataUpdate(MongoClint){
    var MyDataBase=MongoClint.db("school");
    var MyCollection= MyDataBase.collection('students');

    var MyQuery={Roll:"04"};// রোল ০৪ যেখানে আছে তাকে ধরবে
    var MyNewValues={$set:{name:"Rabbil Hasan Rupom",City:"Gaibandha"}} // পরিবর্দন হয়ে এইটা হবে

    MyCollection.updateOne(MyQuery,MyNewValues,function (error,result) {
        console.log(result);
    })
}