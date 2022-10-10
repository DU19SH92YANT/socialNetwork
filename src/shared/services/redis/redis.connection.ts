import Logger from 'bunyan';
import { config } from '@root/config';
import { BaseCache } from '@service/redis/base.cache';

const log: Logger = config.createLogger('redisConnection');

class RedisConnection extends BaseCache {
  constructor() {
    super('redisConnection');
  }

  async connect(): Promise<void> {
    try {
      this.client.on('connect', function () {
        log.info('Connected!');
      });
      this.client.connect();
    } catch (error) {
      console.log(error);
    }
  }
}

export const redisConnection: RedisConnection = new RedisConnection();
