const fs = require("fs")
const yargs = require("yargs")
const dataapp = require("./dataapp")

yargs.command({
    command : "add" ,
    describe : " to add an item",
    builder : {
      fname : {
         describe :"this is the first name desc in add command",
         demandOption : true ,
         type : "string"
      },
      lname : {
         describe :"this is the last name desc in add command",
         demandOption : true ,
         type : "string"
      }
    },
    handler : (x)=> {
 
        dataapp.addPerson(x.id, x.fname , x.lname, x.city, x.age )
    }
})

yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler : (x)=> {
       console.log("you have already deleted an item")
       dataapp.deletedData(x.id)
    }
 })


 yargs.command({
   command : "read" ,
   describe : " to read an item",
   builder : {
     id : {
        describe :"id in read command",
        demandOption : true ,
        type : "string"
      }
   },
   handler : (x)=> {
      dataapp.readData(x.id)
   }})


   yargs.command({
      command : "list",
      describe: "select data list",
      handler : ()=> {
        
         dataapp.listData()
      }
   })

yargs.parse()



 


