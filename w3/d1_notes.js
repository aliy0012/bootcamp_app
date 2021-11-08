// intro to web servers
// intro to express
//what is middleware
//into to server-side view templates with ejs

// networking with tcp
--computer a wants to connect to computer B
-- computer a finds the credentials to computer B
-- computer B has a server listening
-- computer a connects to computer B

---computer B can get messages and act upon -Element


------------------http----------------
//request and response

// vanillsa server

const http = require('http');

const server = http.createServer((request, response) => {
  console.log("Request:", request.url);
  if (request.url === 'something') {
    response.end('do some');
  } else if (request.url === 'google') {
    response.end('Woof');
  }

})

server.listen(8080, ()=> {
  console.log('Server is on and listening on port 8080');

})

//express js

// demo express js

// 0 - since we are using npm library we want to npm initialize
// npm init
// npm install express

.gitignore  --file created with node_modules/
//will exclude node modules

// make a file called index/server.js
const express - require('express');
const app = express();  // creates server

app.get('/', (request, response) => {
  console.log('/has been hit');
  response.end('Welcome to homepage');
})

// it always req firt , res second
app.get('/eth', (req, res) => {

})

app.listen(8080, () => {
  console.log('Server is listening to  8080');
})

// npm install ejs
// step r - set 'view engine' to ejs
// create negine after app set

app.set('view engine' , 'ejs');

// u re arequired /view/ folder

// make files .ejs ending eth.ejs

// res.send will bechanged to res.render('file name');

// res.render() takes 2 parameters
// parameter 1 file 1
// paramater 2 -- object, is shared between server.js 
const obj = {fruit: 'apple'};
res.render(cats, obj);
<%= fruit %>