module.exports = function (app, db) {
  app.get('/users',(req,res) =>{
    db.collection('users').find({}).toArray(function(error, documents) {
      res.send(documents);
    });

  })
  app.post('/user',(req,res) =>{
    console.log('post users')
    db.collection('users').insertOne(req.body, (err, result) => {
      console.log(req.body)
      if (err) {
        res.statusCode = 500;
        res.send('Error');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.send('OK');
      }
      console.log(req.body.name)
    });
  })
}
