import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// initializations
const app = express();

// setting
app.set('port', process.env.PORT || 3000);

// midelware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// router
app.get('/', (req, res) => {
  res.send(`THE API is at http://localhost:${app.get('port')}`);
});

export default app;
