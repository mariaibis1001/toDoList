import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var myList = []; 
var completed = [];
const colors = ['#ff7eb9', '#ff65a3', '#7afcff', '#feff9c', '#fff740'];

// Function to pick a random color from the array
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
 //initial value 
let ranColor =getRandomColor();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=> {
    res.render("index.ejs");
});

app.get("/toDo", (req, res)=> {
    res.render("toDo.ejs",{addedTask: myList, add: true});
});

app.get("/done", (req, res)=> {
    res.render("done.ejs", {done: completed});
});

app.post("/addTask", (req, res)=> {
    const task = true;
    ranColor =getRandomColor();
    res.render("toDo.ejs", {newTask: task, add: false});
});

app.post("/taskAction", (req, res) =>{
    const { task, action } = req.body;

    if (action == "save") {
        console.log(task);
        myList.push(task);
        console.log(myList);
    }
    res.render("toDo.ejs", {addedTask: myList, add: true, color: ranColor});
});

app.post("/addedTaskAction", (req, res) =>{
    const {index, action} = req.body;
    console.log(index);
    if (action == "delete") {
        console.log(myList);
        myList.splice(index, 1);
        console.log(myList);
    }
    else {
        completed.push(myList[index]);
        myList.splice(index, 1);
        console.log(completed);
    }
    res.render("toDo.ejs", {addedTask: myList, add: true, color: ranColor});
});

app.listen(port, ()=> {
    console.log(`Server running on port ${port}.`);
})