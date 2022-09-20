const express = require('express') ,
favicon = require('serve-favicon') ,
compression = require('compression');



const app = express();

const PORT = process.env.PORT || 8000

app.use(compression())
app.use(favicon(__dirname + '/src/favicon.ico'))
app.use(express.static(__dirname + '/dist'))


app.get('/' , (req , res) => {
    res.end(__dirname + '/dist/index.html')
})

app.listen(PORT , () => {
  console.log('listening on ' + PORT);
})




