# Next.js AI Prompt Sharing Application

## Introduction

This project is a Next.js application designed to facilitate the sharing and discovery of AI-generated prompts. It leverages modern web development technologies to create a seamless, responsive user experience. The application includes a full-featured CRUD (Create, Read, Update, Delete) system for managing AI prompts, integrated with MongoDB for data storage, and uses NextAuth for secure user authentication.

## Tech Stack

- **Next.js**: A powerful React framework that provides server-side rendering, static site generation, and a host of other features that make it ideal for building scalable web applications.
- **MongoDB**: A NoSQL database used to store user data and prompts, allowing for flexible schema design and efficient data retrieval.
- **NextAuth**: A complete authentication solution for Next.js applications, enabling secure sign-in with various providers, including Google.
- **Tailwind CSS**: A utility-first CSS framework used to style the application with a modern, responsive design.

## Features

- **Modern Design with Glassmorphism Style**: The application features a sleek, modern design inspired by the glassmorphism trend, providing a visually appealing user interface.
- **AI Prompt Sharing**: Users can discover prompts created by others, create their own prompts, and share them with the community.
- **CRUD Functionality**: Users can edit and delete their prompts, giving them full control over their content.
- **Profile Management**: Each user has a dedicated profile page that showcases all the prompts they've created.
- **Explore Other Profiles**: Users can view the profiles of other community members and see the prompts they've shared.
- **Search by Tags**: The application includes a search functionality that allows users to filter prompts by specific tags.
- **Google Authentication**: Secure user authentication is provided via Google sign-in, ensuring a smooth and trustworthy login experience.
- **Responsive Design**: The application is fully responsive, providing an optimal experience on devices of all sizes, from desktops to smartphones.

## Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/moeyad7/project_promptopia
   cd project_promptopia
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=<your_secret>
   GOOGLE_ID=<your_google_client_id>
   GOOGLE_CLIENT_SECRET=<your_google_client_secret>
   MONGODB_URI=<your_mongodb_uri>
   ```

   Replace the placeholders with your actual credentials.

4. **Run the Project**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
