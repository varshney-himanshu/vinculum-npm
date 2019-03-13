const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/public',express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

 // comment dala maine
app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/public/homepage.html');
});

app.get('/events',(req,res)=>{
     res.sendFile(__dirname + '/public/events.html');
});

app.get('/contact',(req,res)=>{
     res.sendFile(__dirname + '/public/contactus.html');
});
app.get('/appathonDetails',(req,res)=>{
    res.sendFile(__dirname + '/public/appathonDetails.html');
});
app.get('/team',(req,res)=>{
    res.sendFile(__dirname + '/public/Team.html');
});
app.get('/sponsors',(req,res)=>{
    res.sendFile(__dirname + '/public/sponsors.html');
});


app.listen(3000,()=>{
    console.log('server is running at port 3000');
});

