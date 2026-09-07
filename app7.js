const fs=require ( "fs"); 
// Create a blank file 
fs.writeFile( "student.txt","Hello,This is a Student File",(err)=>{
    if ( err) 
    {
        console.log(err)
    }
    else 
    {
        console.log("file is successfully created");
    }
});
//Read a File
fs.readFile ( "student.txt","utf-8",(err,data)=>{
if ( err) 
{
    console.log(err);
}
else 
{
    console.log( "file content");
    console.log(data);
}
});

//update a file
  fs.appendFile( "student.txt","this is a file for cse students",(err)=>{
    if (err) 
    {
        console.log(err);
    }
    else 
    {
        console.log ( "file successfully updated");
    }
  });

  // Delete a File 

  fs.unlink( "student.txt",(err)=>{
    if ( err) {
        console.log(err);
    }
    else {
        console.log( "file successfully deleted");
    }
  });