const fs = require("fs")
const addPerson = (id, fname , lname, city, age ) => {
const allData = loadInfo()


const duplicatedData = allData.filter((obj) =>{
  return  obj.id === id 
})
if (duplicatedData.length == 0  ){
allData.push({
 id : id,
 fname : fname,
 lname : lname,
 city : city,
 age : age
})
savealldata(allData)
} else {
console.log("ERROR DUPLICATED DATA")
}
}

const loadInfo = () => {
 try { 
     const dataJson = fs.readFileSync("datastorage.json").toString()
     return  JSON.parse(dataJson)
 }
 catch {
     return []
 }  
}

const savealldata = (allData) => {
  const saveallDataJson  = JSON.stringify(allData)
  fs.writeFileSync("datastorage.json" , saveallDataJson)
}

const deletedData = (id)=> {
  const allData = loadInfo()
  const dataAfterDeletion = allData.filter((obj)=> {
return obj.id !== id
})
savealldata(dataAfterDeletion)
}

const readData = (id)=> {
  const allData = loadInfo()
  const itemToRead = allData.find((obj)=> {
    return obj.id == id
  })
if (itemToRead){
  console.log(itemToRead)}
  else{
    console.log("error id not found")
  }}

const listData = ()=>{
const allData = loadInfo()
allData.forEach((obj)=>{
console.log(obj.fname , obj.city)
})
}


module.exports = {
 addPerson,
 deletedData,
 readData,
 listData
}
