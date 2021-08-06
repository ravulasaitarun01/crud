const express = require('express')
const app = express();
var user = require('./user.js')
const usersList=user.getUserList()
//Fetch all the users and display
app.get('/user.js', (req, res) => {
res.send(usersList)
});

app.get('/users/:id',(req,res)=>{
var id = req.params.id;
for(let i=0;i<usersList.length;i++)
{
    if(usersList[i].id==id)
{
res.send(usersList[i])
}
}
})
//Add a new user
app.post("/addUser",(req,res)=>{
var user= {
id:3,
name:"Akhil",
branch:"IT",
email:"it2@cvr.ac.in"
}
usersList.push(user)
res.send("Added new user sucessfully");
})
//Delete a User based on ID
app.delete("/deleteUser/:id",(req,res)=>{
var id = req.params.id
for(let i=0;i<usersList.length;i++)
{
if(usersList[i].id==id)
{
usersList.splice(i,1)
}
}
res.send("Deleted user succesfully")
})
//Update the user
app.put("/updateUser/:id",(req,res)=>{
var id=req.params.id

for(let i=0;i<users.length;i++)
{
if(users[i].id==id)
{
users[i].name=req.body.name,
users[i].branch= req.body.branch
}
}
res.send("Updated Successfully")
})

app.listen(8000, () => {
console.log('Example app listening on port 8000!')
});