import express from "express";
import cors from "cors";

const app = express();

app.use(cors({origin:"https://coosinblogs.netlify.app"}));
app.get("/health-check",(_,res)=>{
    res.json("Backend Is live  ...")
})

app.get("/blogs",(_,res)=>{
    res.status(200).json([
        {
            blogId:1,
            title: "Hello World",
            comment:"Blabalabalablalablabal balabl ablab all balb alb alb la bl abl abl la bl alb la bl alb la bl al bla bl alb alb l;a bla bl "
        },
        {
            blogId:2,
            title:"Let's Enjoy the World",
            comment: "wow so this is the what the world is in this view i am injoing this world with no flat chicken"
        },
        {
            blogId:3,
            title:"What We will do",
            comment:"Find some big fat chickens and give them some milks and ask for bread"
        },
        {
            blogId:4,
            title: "Hello World",
            comment:"Blabalabalablalablabal balabl ablab all balb alb alb la bl abl abl la bl alb la bl alb la bl al bla bl alb alb l;a bla bl "
        },
        {
            blogId:5,
            title:"Let's Enjoy the World",
            comment: "wow so this is the what the world is in this view i am injoing this world with no flat chicken"
        },
        {
            blogId:6,
            title:"What We will do",
            comment:"Find some big fat chicks and give them some milks and ask for heads"
        }     
    ])
   
})

app.listen(3000,()=>{
    console.log("Server is Up...")
})
