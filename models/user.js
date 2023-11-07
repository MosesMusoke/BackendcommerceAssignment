const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// User model functions that we use to interact with the datbase
const createUser = async (username, email, password) => {
  return await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
};

const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

module.exports = { createUser, findUserByEmail };


