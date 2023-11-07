const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// all model functions that we use to interact with the database
const createProduct = async (name, description, price, quantity, imageUrl) => {
  return await prisma.product.create({
    data: {
      name,
      description,
      price,
      quantity,
      imageUrl,
    },
  });
};

const findProductById = async (productId) => {
  return await prisma.product.findUnique({
    where: { id: productId },
  });
};

const updateProduct = async (productId, data) => {
  return await prisma.product.update({
    where: { id: productId },
    data,
  });
};

const deleteProduct = async (productId) => {
  return await prisma.product.delete({
    where: { id: productId },
  });
};

const listProducts = async () => {
  return await prisma.product.findMany();
};

module.exports = { createProduct, findProductById, updateProduct, deleteProduct, listProducts };


