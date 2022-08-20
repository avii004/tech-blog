const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'usermodel1',
    email: 'usermodel1@cbc.ca',
    password: 'password123'
  },
  {
    username: 'usermodel21',
    email: 'usermodel21@sogou.com',
    password: 'password123'
  },
  {
    username: 'usermodel3',
    email: 'usermodel3@last.fm',
    password: 'password123'
  },
  {
    username: 'usermodel4',
    email: 'usermodel4@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'usermodel5',
    email: 'usermodel5@weather.com',
    password: 'password123'
  },
  {
    username: 'usermodel6',
    email: 'usermodel6@imdb.com',
    password: 'password123'
  },
  {
    username: 'musermodel7',
    email: 'musermodel7@feedburner.com',
    password: 'password123'
  },
  {
    username: 'usermodel8',
    email: 'usermodel8'@china.com.cn',
    password: 'password123'
  },
  {
    username: 'usermodel9',
    email: 'usermodel9@google.ru',
    password: 'password123'
  },
  {
    username: 'jusermodel000',
    email: 'jusermodel000@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;