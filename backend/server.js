import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import userRoutes from './routes/route.js';
import Connection from './database/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';


mongoose.set('strictQuery', true);

const app = express();
const server = http.createServer(app); // Create HTTP server


app.use(express.json());
// app.use(cors({
//   origin: '*',
//   methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
//   credentials: true,

// }));

app.use(cors({
  origin: ['https://mano-mitra-wellness.vercel.app','http://localhost:3000','https://mano-mitra-wellness-865bbmx76-shreyas-dones-projects.vercel.app','https://mano-mitra-wellness-git-main-shreyas-dones-projects.vercel.app'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,            // if you need to read/write cookies or auth headers
}));

// make sure preflight OPTIONS are handled
app.options('*', cors());

app.use(cookieParser());
app.use (bodyParser.json ({extended: true}));
app.use (bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/upload1', express.static(path.join(__dirname, 'upload1')));

Connection();
app.use('/', userRoutes);

const port = process.env.PORT;

server.listen(port, () => {
  console.log("Server is running on port", port);
});

