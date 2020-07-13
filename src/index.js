import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import router from './router.js'
 
dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/slack', router);

app.get('/', (req, res) => res.send('<pre>app works!</pre>'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Happy coding!');
})
