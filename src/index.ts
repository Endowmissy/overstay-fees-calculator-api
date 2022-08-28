import { app } from '../src/config';
import sequelize from './models';

const port = process.env.PORT || 3100;

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  sequelize
    .authenticate()
    .then(() => {
      console.log('🚀 Database Connection has been established successfully.');

    })
    .catch((error: any) => {
      console.log("Unable to connect to the database")
      console.log(error);
    });
});

export default app;

