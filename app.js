const express = require('express');
const app = express();

let students = [
    {id: 100,name:'charan'},
    {id:101,name:'hari'},
    {id:102,name:'teja'}
];

app.use(express.json());

app.listen(2000, () => {
    console.log('Server is running on port 2000');
});

app.get("/getstudent", (req, res) => {
    if (students.length > 0) {
        res.status(200).json({
            "message": "Student found",
            "students": students
        });
    } else {
        res.status(404).json({
            "message": "No student found"
        });
    }
});

app.post("/poststudent", (req, res) => {
    let { id, name } = req.body;
    if (id && name) {
        students.push({ id, name });
        res.status(201).json({ "message": "student added" });
    } else {
        res.status(400).json({ "message": "invalid" });
    }
});

app.delete("/studentdel/:id",(req,res)=>{
    let id = parseInt(req.params.id)
    students = students.filter(s=>s.id != id)

    res.status(200).json({
        message:"student deleted",
        "students":students
    })
});

app.put("/studentput/:id",(req,res)=>{
    let id=parseInt(req.params.id)
    index=students.findIndex(s=>s.id==id)

    if(index!=1){
        students[index].id=req.body.id
        students[index].name=req.body.name
        res.status(200).json({
            message:"student updated",
            "students":students
        })
    }
    else{
        res.status(404).json({message:"student not found"})
    }
})
