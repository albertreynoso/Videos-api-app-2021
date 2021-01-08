import app from './app';
import './database'

app.get('/', (req, res) => {
    res.send("hey budy")
})
app.listen(app.get('port'), ()=>{ 
    console.log("server on port: ", app.get('port'))
})