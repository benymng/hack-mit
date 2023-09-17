## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Table of Contents

- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Team and Responsibilities](#team-and-responsibilities)
- [Development Timeline](#development-timeline)
- [Computer Vision Repositories](#computer-vision-repositories)

## Introduction

This project is focused on document scanning and health data analysis using computer vision and machine learning. It combines various technologies to provide an innovative solution for document recognition, health data prediction, and community matching. This README provides an overview of the project and its components.

## Project Overview

The project comprises both frontend and backend components:

- **Frontend**:
  - Sign-up / Sign-in Page
  - Home Page
  - Data Display Page
  - Community Page
  - Integration of JavaScript Mobile Document Scanner
  - Integration of user data storage

- **Backend**:
  - Processing text from images and associating key-value pairs
  - Utilizes Django as the web framework
  - Setting up vector databases and matching
  - Creating a method of communication within a group/community
  - Data communication between frontend and backend
  - Neural Network models for prediction

The core process involves taking pictures of paper documents, extracting key information using computer vision, user questionnaires processed through LLMs, and matching users to unique communities based on health data and other factors.

## Technology Stack

The project utilizes a diverse technology stack:

- **File Managment**
    - Github
    - Git
    - Git Reposetory

- **Frontend**:
  - Next.js
  - JavaScript
  - React
  - Tailwind CSS

- **Backend**:
  - Firebase
  - PineconeDB

- **Computer Vision**:
  - TensorFlow
  - Tesseract

- **Presentation**:
  - Canva
  - Figma
  - Google Slides

## Team and Responsibilities

- John: Figma Mockup, Frontend Application of Mobile Site, Pitch Deck
- Siya: Predictive Models, Computer Vision, Frontend, Pitch Deck
- Ben: Computer Vision, Predictive Models, Vector Database, Github & Git Reposetory Setup
- Auston: Backend (API), Computer Vision, Messaging Integration

## Development Timeline

Here's an overview of the project development timeline:

- Integration and pitch deck: 6 hours
- Figma design: 2.5 hours
- Frontend development: 12 hours
- Computer vision MVP: 12 hours
- Predictive model MVP: 8 hours
- Community matching via vector database: 6-hour

## Computer Vision Repositories

The following repositories are relevant to the computer vision components of the project:

- [Project Repository] (https://github.com/benymng/hack-mit)
- [Document Scanner Repository](https://github.com/RuslanBrilenkov/Computer_Vision_Projects-1_Document_Scanner/blob/main/Document_Scanner.py)
- [Barcode Scanner Repository](https://github.com/pamruta/Computer-Vision)
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
