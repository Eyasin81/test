const mongoDb=require('mongodb').MongoClient;
var url="mongodb+srv://eyasinaa:mnVqGwYpAGDd88p8@cluster0.ecuhx2g.mongodb.net/?retryWrites=true&w=majority";
var config={useUnifiedTopology:true};
mongoDb.connect(url,config,function(err,MongoClint){
    if(err){
        console.log("Data Connection Fail")
    } else{
        console.log("Data Connection Success")
        // DataInsert(MongoClint)
        // DataDeleteOne(MongoClint)
        dataUpdate(MongoClint);

        
    }
})
// function DataDeleteOne(MongoClint)
// {
//     const MyDataBase=MongoClint.db('school');
//     const MyCollection=MyDataBase.collection('students');
//     const query={}
//     const projection={projection:{city:"Naogaon"}}
//     MyCollection.find(query,projection).toArray(function(err,Result){
//         if(err){
//             console.log("Fail")
        
//        } else{
//         console.log(Result)
       
//     }
//     })
      
// }
// var mongoClint=require('mongodb').MongoClient;
// var url="mongodb+srv://eyasina:c0W2slssudMIm5kd@cluster0.ecuhx2g.mongodb.net/?retryWrites=true&w=majority"
// var config={useUnifiedTopology:true};
// mongoClint.connect(url,config,function(error,MyData){
// if(error){
//     console.log("Data Connection Fail")
// }else{
//     console.log("Data Connection success")
//     // InsertData(MyMongoClinet)
// }
// })
// function FindAllDataBaseSortb(db){
//     var MyDataBase=db.db("student");
// var createCollection=MyDataBase.createCollection("Teacher",err,Result,function(){
//     if(err){
//         console.log("Data Create Fail")
//     }else{
//         console.log(Result)
//     }
// });
// }
// function FindDataLimite(db){
//     var MyDataBase=db.db("student");
//     var MyCollection=MyDataBase.collection("class");
//     MyCollection.find().limit(3).toArray(function (err,result){
//         if(err){
//             console.log("Find Data Fail")
//         }else{
//             console.log(result)
//         }
//     })

// }
// function FindAllDataBaseSortb(db){
//         var MyDataBase=db.db("student");
//         var MyCollection=MyDataBase.collection("class");
//         var oldData={Roll:"07"}
//         var dataUpdate={$set:{name:"Abdullah Alim Khan",Roll:"70",Reg:"700",}}
//         MyCollection.updateOne(oldData,dataUpdate,function (err,Result){
//             console.log(Result)
//         })
//     }

    // function dataUpdate(MongoClint){
    //     const MyDataBase=MongoClint.db('students');
    //     const MyCollection=MyDataBase.collection('class');
    //     const query={Roll:"02"};
    //     const upDate={$set:{name:"Ahmed",Roll:"2",Country:"India"}};
    //     MyCollection.updateOne(query,upDate,function(err,result){
    //         // console.log(result)
    //         if(err){
    //             console.log("Data Update Fail");
    //         }else{
    //             console.log(result)
    //         }
    //     })

    // }

