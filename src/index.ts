/**
 * @name personal-backend
 * @author cyntler <damian@cyntler.com>
 */
import './utils/configEnv';
import express from 'express';
import { connect as mongooseConnect } from 'mongoose';
import { bio } from './controllers/bio';

const port = process.env.APP_PORT;

(async () => {
  try {
    await mongooseConnect(process.env.APP_MONGO_URI, {
      useNewUrlParser: true,
    });

    const app = express();

    app.get('/bio', bio);

    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
