require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const User = require('../../models/user');
const { DB_HOST_TEST } = process.env;

describe('login user', () => {
  beforeAll(async () => {
    await mongoose
      .connect(DB_HOST_TEST)
      .then(() => {
        console.log('DB connected');
      })
      .catch(err => console.log(err));

    await User.deleteMany();
  });

  test('shoud return token', async () => {
    const response = await request(app).post('/api/users/login').send({
      email: 'anzhela.test@gmail.com',
      password: '123456',
    });

    expect(response.body.token).not.toBe('');
  });

  test('should return user with 2 fields email and subscription', async () => {
    const response = await request(app).post('/api/users/register').send({
      email: 'anzhela.test@gmail.com',
      password: '123456',
    });

    expect(response.body).toStrictEqual({
      user: {
        email: 'anzhela.test@gmail.com',
        subscription: 'starter',
      },
    });
  });

  test('should return status code 200 after login', async () => {
    const response = await request(app).post('/api/users/login').send({
      email: 'anzhela.test@gmail.com',
      password: '123456',
    });

    expect(response.statusCode).toBe(200);
  });

  afterAll(async () => {
    await mongoose
      .disconnect(DB_HOST_TEST)
      .then(() => {
        console.log('DB disconnected');
      })
      .catch(err => console.log(err));
  });
});
