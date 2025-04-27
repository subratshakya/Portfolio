import {
  Github,
  Linkedin,
  Code2,
  FileCode,
  Database,
  Terminal,
  Settings,
} from 'lucide-react';

// Navigation Links
export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'achievements', title: 'Achievements' },
  { id: 'contact', title: 'Contact' },
];

// Social Links with platform logos
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/subratshakya',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/subratshakya',
    icon: Linkedin,
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/subrat_20',
    icon: Code2,
    logoUrl: 'https://cdn.codechef.com/images/cc-logo.svg',
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/ricky2010',
    icon: Terminal,
    logoUrl: 'https://codeforces.org/s/0/images/codeforces-sponsored-by-ton.png',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/___su_brat_20__/',
    icon: FileCode,
    logoUrl: 'https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg',
  },
];

// Skills Data
export const skillsData = [
  {
    name: 'Languages',
    icon: Terminal,
    color: 'text-blue-500',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C'],
  },
  {
    name: 'Frontend',
    icon: Code2,
    color: 'text-orange-500',
    skills: ['React.js', 'HTML & CSS', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    icon: Database,
    color: 'text-green-500',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
  },
  {
    name: 'Other',
    icon: Settings,
    color: 'text-purple-500',
    skills: ['GraphQL', 'Socket.io', 'RESTful APIs', 'Git & GitHub'],
  },
];

// Projects Data
export const projectsData = [
  {
    id: 1,
    title: 'Expense Tracker',
    tags: ['MERN', 'GraphQL', 'Full-Stack'],
    shortDescription: 'A secure, scalable transaction management system',
    description: 'Developed a comprehensive expense tracking application using the MERN stack with GraphQL for efficient data queries. The system includes user authentication, transaction categorization, budget planning, and expense analytics with visualizations.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'GraphQL', 'Apollo Client', 'JWT', 'Chart.js'],
    features: [
      'Secure user authentication with JWT',
      'Transaction categorization and filtering',
      'Interactive dashboards with expense analytics',
      'Budget planning and notifications',
      'Data visualization with graphs and charts',
      'Responsive design for all devices',
    ],
    githubUrl: 'https://github.com/subratshakya/Expense_Tracker',
    liveUrl: null,
  },
  {
    id: 2,
    title: 'HMP-OJ',
    tags: ['MERN', 'Socket.io', 'Real-time'],
    shortDescription: 'A real-time online judge platform for competitive programming',
    description: 'Built a comprehensive online judge platform that supports real-time code compilation and testing. The system integrates with the Judge0 API for code execution and features multi-user authentication, live leaderboards, and real-time notifications.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Judge0 API', 'JWT', 'Redis'],
    features: [
      'Multi-user authentication and authorization',
      'Real-time code compilation and execution',
      'Support for multiple programming languages',
      'Problem set management and categorization',
      'Live contests with real-time leaderboards',
      'User profile with submission history and statistics',
    ],
    githubUrl: 'https://github.com/subratshakya/HMP_OJ',
    liveUrl: null,
  },
  {
    id: 3,
    title: 'Book Management System',
    tags: ['C++', 'OOP', 'Data Structures'],
    shortDescription: 'A full-fledged library management tool with OOP principles',
    description: 'Developed a comprehensive library management system using C++ with a strong focus on object-oriented programming principles. The system enables efficient book cataloging, user management, loan tracking, and detailed reporting.',
    technologies: ['C++', 'Object-Oriented Programming', 'File Handling', 'Data Structures', 'Algorithms'],
    features: [
      'Book cataloging with detailed metadata',
      'User registration and account management',
      'Book checkout and return processing',
      'Fine calculation for late returns',
      'Search functionality with multiple filters',
      'Admin dashboard for system management',
    ],
    githubUrl: 'https://github.com/subratshakya/Book_Management_System',
    liveUrl: null,
  },
];

// Achievements Data
export const achievementsData = [
  {
    title: '4-Star Coder',
    platform: 'CodeChef',
    description: 'Achieved a 4-star rating on CodeChef, demonstrating proficiency in competitive programming and problem-solving.',
    link: 'https://www.codechef.com/users/ricky2010',
  },
  {
    title: 'Pupil (Rating 1271)',
    platform: 'Codeforces',
    description: 'Reached Pupil status on Codeforces with a rating of 1271, showcasing algorithmic and competitive programming skills.',
    link: 'https://codeforces.com/profile/ricky2010',
  },
  {
    title: 'A Knight with 500+ Problems',
    platform: 'LeetCode',
    description: 'Solved over 500 problems on LeetCode with a rating of 1850+, demonstrating strong data structures and algorithms knowledge.',
    link: 'https://leetcode.com/u/___su_brat_20__/',
  },
  {
    title: 'Top 4 at Codigo',
    platform: 'AVISHKAR, MNNIT',
    description: 'Placed in the top 4 at Codigo, a prestigious DSA event held during AVISHKAR at MNNIT.',
    link: null,
  },
];

// Certifications Data
export const certificationsData = [
  {
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    description: 'Certified in API development fundamentals, including API testing, documentation, and collaboration using Postman.',
    link: null,
  },
];