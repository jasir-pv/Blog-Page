import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let cardBlog= []

app.get("/", (req,res)=>{
    res.render("index.ejs", { cardBlog })
})


app.post("/add",async (req,res)=>{
    try{
    const {title,content} = await req.body

    cardBlog.push({title,content})  
    // console.log({title,content});    
    res.redirect("/")
    }catch(Error){res.status(404).send("Somethig wrong")}
})

app.get('/edit/:index', (req, res) => {
    const index = req.params.index;
    const post = cardBlog[index];
    res.render('edit', { post, index });
});

app.post('/update/:index', (req, res) => {
    const index = req.params.index;
    const { title, content } = req.body;
    cardBlog[index] = { title, content };
    res.redirect('/');
});

app.get("/delete/:index", (req,res)=>{
try{
    const index = req.params.index;
    cardBlog.splice(index, 1);
    res.redirect('/');
}catch(err){console.log("Error not working")}
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
