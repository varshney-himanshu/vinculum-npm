const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/public',express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/public/homepage.html');
});

app.get('/events',(req,res)=>{
     res.sendFile(__dirname + '/public/events.html');
});

app.get('/about',(req,res)=>{
     res.sendFile(__dirname + '/public/aboutus.html');
});
app.get('/appdetails',(req,res)=>{
    res.sendFile(__dirname + '/public/appathonDetails.html');
});

app.listen(3000,()=>{
    console.log('server is running at port 3000');
});

