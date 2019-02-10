module.exports = function (app, db) {
  console.log('users')
  const user = { phone: '89103103384', title: "title" };
  app.get('/user',(req,res) =>{
    db.collection('users').insertOne(user);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('ura');
  })
  app.post('/users',(req,res) =>{
    db.collection('users').insertOne(user, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  })
}
