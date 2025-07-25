require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(cors({
  origin: 'https://cartonize.vercel.app',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  phone: String,
  boxType: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

const productSampleSchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  productName: { type: String, required: true },
  email: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const ProductSample = mongoose.model('ProductSample', productSampleSchema);

const customizationSchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  productName: { type: String, required: true },
  email: { type: String, required: true },
  customText: String,
  colorPreference: String,
  additionalNotes: String,
  createdAt: { type: Date, default: Date.now }
});

const Customization = mongoose.model('Customization', customizationSchema);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Email server connection error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

const products = {
  1: { name: 'Recycled Cardboard Box' },
  2: { name: 'Kraft Paper Box' },
  3: { name: 'Standard Print Box' },
  4: { name: 'Premium Print Box' },
  5: { name: 'Standard Shipping Box' },
  6: { name: 'Heavy Duty Box' },
  7: { name: 'Velvet Gift Box' },
  8: { name: 'Embossed Gift Box' }
};

app.post('/api/productsamples', async (req, res) => {
  try {
    const { productId, email, shippingAddress } = req.body;
    
    if (!productId || !email || !shippingAddress) {
      return res.status(400).json({ 
        success: false,
        message: 'All fields are required' 
      });
    }

    const product = products[productId];
    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }

    const sampleRequest = new ProductSample({
      productId,
      productName: product.name,
      email,
      shippingAddress
    });
    await sampleRequest.save();

    const mailOptions = {
      from: `"Cartonize Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your Cartonize Sample Request Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for your sample request!</h2>
          <p>We've received your request for a <strong>${product.name}</strong> sample.</p>
          <p>Your sample will be shipped to:</p>
          <p style="background: #f5f5f5; padding: 10px; border-radius: 5px;">${shippingAddress}</p>
          <p>Our team will process your request within 1-2 business days.</p>
          <p>Best regards,<br>The Cartonize Team</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ 
      success: true,
      message: 'Sample request submitted successfully. Confirmation email sent.' 
    });
  } catch (error) {
    console.error('Error submitting sample request:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to submit sample request'
    });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, boxType, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required fields'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address'
      });
    }

    const newContact = new Contact({ name, email, phone, boxType, message });
    await newContact.save();

    const mailOptions = {
      from: `"Cartonize Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting Cartonize!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Hello ${name},</h2>
          <p>We've received your message and will get back to you shortly.</p>
          <p>Best regards,<br/>The Cartonize Team</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! Confirmation email sent.'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request'
    });
  }
});

app.post('/api/customizations', async (req, res) => {
  try {
    const { productId, email, customText, colorPreference, additionalNotes } = req.body;
    
    if (!productId || !email) {
      return res.status(400).json({ 
        success: false,
        message: 'Product ID and email are required' 
      });
    }

    const product = products[productId];
    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }

    const customization = new Customization({
      productId,
      productName: product.name,
      email,
      customText,
      colorPreference,
      additionalNotes
    });
    await customization.save();

    const mailOptions = {
      from: `"Cartonize Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your Cartonize Customization Request Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for your customization request!</h2>
          <p>We've received your customization for <strong>${product.name}</strong>.</p>
          <h3 style="color: #333;">Customization Details:</h3>
          <p style="background: #f5f5f5; padding: 10px; border-radius: 5px;">
            <strong>Custom Text:</strong> ${customText || 'Not specified'}<br>
            <strong>Color Preference:</strong> ${colorPreference || 'Not specified'}<br>
            <strong>Additional Notes:</strong> ${additionalNotes || 'None'}
          </p>
          <p>Our team will review your request and contact you within 1-2 business days.</p>
          <p>Best regards,<br>The Cartonize Team</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ 
      success: true,
      message: 'Customization request submitted successfully. Confirmation email sent.' 
    });
  } catch (error) {
    console.error('Error submitting customization request:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to submit customization request'
    });
  }
});

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});