import path from 'path';

import dotenv from 'dotenv';
import express from 'express';
import hbs from 'hbs';

import routes from './routes';

dotenv.config();

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Ecommerce MPA is listening on port ${port}`);
})

export default app;