import { app } from '../src/config';
import logger from './config/logger';
import sequelize from './models';

const port = process.env.PORT || 3100;

app.listen(port, () => {
  logger.info(`🚀 Server running on port ${port}`);
  sequelize
    .authenticate()
    .then(() => {
      logger.info('🚀 Database Connection has been established successfully.');

    })
    .catch((error: any) => {
      logger.debug("Unable to connect to the database")
      logger.debug(error);
    });
});

export default app;
