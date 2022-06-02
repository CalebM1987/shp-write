let express = require('express');
let opn = require('opn')

app = express();
console.log(__dirname)
app.use(express.static(__dirname));
app.use(express.static('./index.html'))

const port = 3004;
app.listen(port);
const url = `http://localhost:${port}`;
console.log(`Server running on ${url}`);

console.log('attempting to launch app in chrome: ' + url);
opn(url, {app: 'chrome'})
.then(()=>{
  console.log('opened app in chrome');
})
.catch((err)=>{
  console.log('error opening on chrome, attempting on firefox');
  opn(url, {app: 'firefox'})
    .then(()=>{
      console.log('opened app in firefox');
    })
    .catch((err)=>{
      console.log('error opening in firefox, attempting default browser');
      opn(url); // default browser
    });
});