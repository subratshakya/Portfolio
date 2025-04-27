import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, '../dist')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Schema Definitions
const projectSchema = new mongoose.Schema({
  title: String,
  tags: [String],
  shortDescription: String,
  description: String,
  technologies: [String],
  features: [String],
  githubUrl: String,
  liveUrl: String,
});

const skillSchema = new mongoose.Schema({
  name: String,
  level: Number,
  color: String,
});

const experienceSchema = new mongoose.Schema({
  role: String,
  company: String,
  period: String,
  description: [String],
  skills: [String],
});

// Models
const Project = mongoose.model('Project', projectSchema);
const Skill = mongoose.model('Skill', skillSchema);
const Experience = mongoose.model('Experience', experienceSchema);

// API Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/experience', async (req, res) => {
  try {
    const experience = await Experience.find();
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Catch-all route for SPA
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});