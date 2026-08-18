const fs = require("fs");

// //sync call
// // fs.writeFileSync('./test.txt','Hey there')

// //async call
// fs.writeFile('./text.txt','Hey there async', (error)=>{})


// // const result=fs.readFileSync(__dirname + "/contact.txt" , "utf-8")
// // console.log(result);


// //async version
// // fs.readFile(__dirname + "/contact.txt" , "utf-8" , (error,result)=>{
// //     if(error)  console.log('Error: ', error);
// //     else {
// //         console.log(result);
        
// //     }
// // })



// const res=fs.appendFileSync(__dirname + "/contact.txt"," 03477153830 \n") //contact number added in that existing file

// const res1=fs.appendFileSync(__dirname + "/contact.txt",new Date().getDate().toString()) //contact number added in that existing file

// // fs.cpSynckt(__dirname+"/contact.txt",__dirname+"/copy.txt")

// // fs.unlinkSync(__dirname+"/copy.txt")


// console.log(fs.statSync(__dirname+"/contact.txt").isFile());

// fs.mkdirSync("newFolder/a/b",{recursive:true})


console.log('1');
console.log('2');
// Sync
// const result=fs.readFileSync(__dirname+"/contact.txt","utf-8")
// console.log(result);

//Async
fs.readFile(__dirname+"/contact.txt","utf-8" , (error,result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
            }
})

console.log("3");
console.log("4");

//Default Thread pool core : 4

const os=require("os")
console.log(os.cpus().length);      //12


//Max pools: n core cpus = n threads