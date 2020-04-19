 //const MongoClient= require('mongodb').MongoClient;//
const{MongoClient,ObjectID}=require('mongodb');
var obj= new ObjectID;
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("unable to connet mongodb server");
  }
  console.log(" connected to MongoDB server");

/*
db.collection('Todos').find({completed:"true"}).toArray().then((docs)=>{
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log("unable to fetch");
}
);

});*/

db.collection('Users').find({name:"ridhima"}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));

},(err)=>{
  console.log("unable to fetch",err);
}
)});



  // db.collection('Todos').insertOne({
    //city:"amritsar",
  //  state:"punjab"}
  //  ,(err,result)=>
            //  { if(err)
              //  {
            //      return console.log("unable to insert into Todo",err);
                //}
              // console.log(JSON.stringify(result.ops,undefined,2));
            // });
/* db.collection('Users').insertOne({

  name: 'ridhima',
  lastname: 'dhawan',
  occupation: 'assistant-professor',
  u_id: '24015'},(err,result)=>{
    if(err)
    {
      return console.log('unable to insert the document',err);
    }
    console.log(result.ops[0]._id.getTimestamp());

});
  db.close();
}); */
