# Joshua Hoban - Portfolio

A modern, responsive portfolio website showcasing my projects, certifications, and professional experience as a Junior Developer, Cloud Enthusiast, and Help Desk Technician.

## 🌐 Live Demo

**[View Live Portfolio](https://joshua-hoban-portfolio.netlify.app)**

## 🚀 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode** - Toggle between themes with persistent preference
- **Interactive Contact Form** - Functional email integration using EmailJS
- **Project Showcase** - Display of GitHub projects with live demos
- **Certifications Display** - Professional certification achievements
- **Smooth Animations** - Modern CSS transitions and hover effects
- **SEO Optimized** - Meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend:** React 18 with TypeScript
- **Styling:** Tailwind CSS v3.4
- **Build Tool:** Vite
- **Email Service:** EmailJS
- **Deployment:** Netlify
- **Version Control:** Git & GitHub

## 📋 Sections

- **Hero** - Introduction with profile picture and social links
- **About** - Personal background and technical skills
- **Projects** - Showcase of development projects
- **Certifications** - Professional certifications and achievements
- **Contact** - Functional contact form with validation

## 🎓 Certifications

- **Microsoft Azure Fundamentals (AZ-900)**
- **Python Data Analytics, Fundamentals & Advanced**
- **Java, C#, Node.js, JavaScript** (Beginner Level)
- **PostgreSQL & MySQL** (Beginner Level)

## 📱 Contact

- **Email:** joshuawhoban@gmail.com
- **GitHub:** [@MrHoban](https://github.com/MrHoban)
- **LinkedIn:** [Joshua Hoban](https://www.linkedin.com/in/joshua-hoban-258641276/)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MrHoban/joshua-hoban-portfolio.git
   cd joshua-hoban-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Add your EmailJS credentials to `.env`

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📧 EmailJS Setup

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a Gmail service
3. Create an email template
4. Add your credentials to `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🎨 Customization

- **Colors:** Modify `tailwind.config.js` for custom color schemes
- **Content:** Update component files in `src/components/`
- **Images:** Replace `public/profile.jpg` with your profile picture
- **Projects:** Edit `src/components/Projects.tsx` with your project details

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by contemporary portfolio designs
- Contact form powered by EmailJS
- Deployed on Netlify

---

**⭐ If you found this portfolio helpful, please consider giving it a star!**
