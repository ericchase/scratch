const express = require('express');
const app = express();
const port = 3000;

const session = require('express-session');

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);

app.get('/', (req, res) => {
  console.log(req.sessionID, req.session);
  res.send('Hello World!');
});

app.get('/test', (req, res) => {
  req.session.hello = 'world';
  console.log(req.sessionID, req.session);
  res.send('Test!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
