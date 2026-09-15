import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String, 
  price: String,
  quantity: String,
  image: String

});

export default mongoose.model('product', productSchema)