var express = require("express"),
	methodOverride = require("method-override"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	app = express();

mongoose.connect("mongodb+srv://devsprout:1234@udemy-project-hpcze.mongodb.net/test?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useCreateIndex: true,
}).then(() => {
	console.log('Connected to Blog Database...');
}).catch(err => {
	console.log('ERROR connecting to Blog Database: ', err.message);
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//SCHEMA
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,								//add placeholder image
	body: String,
	created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);



//RESTful Routes

//INDEX Route
app.get("/", (req,res) => {
		res.redirect("/blogs");
	});

app.get("/blogs", (req,res) => {
	Blog.find({}, (err, blogs) => {
		if(err){
			console.log("Error");
		} else {
			res.render("index", {blogs: blogs});
		}
	});
});

//NEW ROUTE
app.get("/blogs/new", (req,res) => {
	res.render("new");
});

//CREATE ROUTE
app.post("/blogs", (req,res) => {
	Blog.create(req.body.blog, function(err, newBlog){
		if(err){
			res.render("new");
		} else {
			res.redirect("/blogs");
		}
	});
});

//SHOW ROUTE
app.get("/blogs/:id", (req,res) => {
	Blog.findById(req.params.id, (err,foundBlog)=> {
		if(err){
			res.redirect("/blogs");
		} else {
			
			res.render("show", {blog: foundBlog});
		}
	});
});

//EDIT ROUTE
app.get("/blogs/:id/edit", (req,res) => {
	Blog.findById(req.params.id, (err,foundBlog) => {
		if(err){
			res.redirect("/blogs");
		} else {
			res.render("edit", {blog: foundBlog});
		}
	});
});

//UPDATE ROUTE
app.put("/blogs/:id", (req,res) => {
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
		if(err){
			res.redirect("/blogs");
		} else {
			res.redirect("/blogs/"+req.params.id);
		}
	});
});

app.listen(3000, ()=> {
	console.log("Blog listening on Port 3000");
});