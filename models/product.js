const { uploadToCloudinary } = require('../cloudinary/cloudinary');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// all model functions that we use to interact with the database
const createProduct = async (product_name, product_description, price, quantity, category_name, store_name, image_url) => {
  try {
    const image = await uploadToCloudinary(image_url);
    conole.log(image)

    return await prisma.product.create({
      data: {
        product_name,
        product_description,
        price,
        quantity,
        category_name,
        store_name,
        image,
      },
    });
  } catch (error) {
    console.error('Product creation error:', error);
    throw new Error('Failed to create product');
  }
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


