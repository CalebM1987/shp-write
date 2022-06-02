let express = require('express');
const open = require('open')

app = express();
console.log(__dirname)
app.use(express.static(__dirname));
app.use(express.static('./index.html'))

const port = 3003;
app.listen(port);
const url = `http://localhost:${port}`;
console.log(`Server running on ${url}`);

console.log('attempting to open in chrome')

open(url, {
  app: {
    name: open.apps.chrome ?? open.apps.firefox
  }
})
