var mongoClint=require('mongodb').MongoClient;
var url="mongodb+srv://eyasina:c0W2slssudMIm5kd@cluster0.ecuhx2g.mongodb.net/?retryWrites=true&w=majority"
var config={useUnifiedTopology:true};
mongoClint.connect(url,config,function(error,){
if(error){
    console.log("Data Connection Fail")
}else{
    console.log("Data Connection success")
}
})