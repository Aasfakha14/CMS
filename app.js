const express = require("express");
const { blogs } = require("./model");
const app = express();

app.set("view engine", "ejs");

// Database connection
require("./model");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// HOME PAGE
app.get("/", (req, res) => {
    res.render("home");
});

// ABOUT PAGE
app.get("/about", (req, res) => {
    res.render("about");
});

// CONTACT PAGE
app.get("/contact", (req, res) => {
    res.render("contact");
});




// BLOG LISTING PAGE
app.get("/blogs", async (req, res) => {
    const allBlogs = await blogs.findAll({
        order: [["createdAt", "DESC"]]
    });
    res.render("blogListing", { blogs: allBlogs });
});


// BLOG DETAIL PAGE
app.get("/blogs/:id", async (req, res) => {
    const id = req.params.id;

    const blog = await blogs.findOne({
        where: { id: id }
    });

    if (!blog) {
        return res.send("Blog not found");
    }

    res.render("blogDetails", { blog: blog });
});


// CREATE BLOG FORM
app.get("/create", (req, res) => {
    res.render("createform");
});

// CREATE BLOG
app.post("/create", async (req, res) => {
    const { title, subTitle, description } = req.body;

    await blogs.create({
        title,
        subTitle,
        description
    });

    res.redirect("/blogs");
});


// EDIT BLOG FORM
app.get("/edit/:id", async (req, res) => {
    const id = req.params.id;

    const blog = await blogs.findOne({
        where: { id: id }
    });

    res.render("editpage", { blog: blog });
});

// UPDATE BLOG
app.post("/edit/:id", async (req, res) => {
    const id = req.params.id;
    const { title, subTitle, description } = req.body;

    await blogs.update(
        { title, subTitle, description },
        { where: { id: id } }
    );

    res.redirect("/blogs");
});


// DELETE BLOG
app.get("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await blogs.destroy({
        where: { id: id }
    });

    res.redirect("/blogs");
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
