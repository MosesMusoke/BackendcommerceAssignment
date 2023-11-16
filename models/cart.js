
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getCart = async (userId) => {
  return await prisma.cartItem.findMany({
    where: { userId: userId },
  });
};

const addToCart = async (userId, productId, quantity) => {
  if (!userId || !productId || !quantity || quantity <= 0) {
    throw new Error('Invalid request');
  }

  const existingProduct = await prisma.cartItem.findFirst({
    where: { productId: productId, userId: userId },
  });

  if (existingProduct) {
    await prisma.cartItem.update({
      where: { id: existingProduct.id },
      data: { quantity: existingProduct.quantity + quantity },
    });
  } else {
    await prisma.cartItem.create({
      data: { productId, quantity, userId },
    });
  }

  return await prisma.cartItem.findMany({
    where: { userId: userId },
  });
};

module.exports = {
  getCart,
  addToCart,
};


