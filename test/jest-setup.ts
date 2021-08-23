import { SetupServer } from '@src/server';
import supertest from 'supertest';

export default class ServerTest {
  public test(): import('supertest').SuperTest<import('supertest').Test> {
    const server = new SetupServer();
    server.init();
    return supertest(server.getApp());
  }
}
