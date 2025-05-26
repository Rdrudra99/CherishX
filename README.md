# 💖 CherishX AI - Your Personal Relationship Advisor

![CherishX AI](public/icon-256x256.png)

## 🌟 Overview

CherishX AI is a modern, AI-powered relationship advisor application built with Next.js, TypeScript, and Clerk authentication. It provides personalized guidance and solutions for relationship challenges through private, secure conversations.

## ✨ Features

- 🔒 **Secure Authentication** - User authentication powered by Clerk
- 💬 **AI Chat Interface** - Personalized relationship advice through conversational AI
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- 📱 **Mobile Friendly** - Optimized for all device sizes
- 🌓 **Dark Mode Support** - Comfortable viewing experience in any lighting condition
- ⚡ **Fast Performance** - Built with Next.js for optimal performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- pnpm package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/cherishx-ai.git
cd cherishx-ai
```

2. Install dependencies

```bash
pnpm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Clerk API keys and other environment variables.

4. Start the development server

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏛️ Project Structure

```
src/
├── ai/               # AI providers and tools
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── magicui/      # Animation components
│   └── ui/           # UI components
├── hooks/            # Custom React hooks
└── lib/              # Utility functions
```

## 🔧 Technologies Used

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Authentication**: Clerk
- **AI Integration**: OpenAI API
- **State Management**: React Context API
- **Animations**: Custom MagicUI components

## 📱 Progressive Web App

CherishX AI is configured as a Progressive Web App, allowing users to install it on their devices for a native-like experience. The app includes:

- Service Worker for offline capabilities
- Web App Manifest for installation
- Optimized icons for various device sizes

## 🛠️ Development

### Commands

- `pnpm dev` - Start the development server
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🔐 Privacy & Security

CherishX AI prioritizes user privacy and data security:

- All conversations are private and encrypted
- No conversation data is stored long-term without consent
- Authentication handled by Clerk's secure infrastructure

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by CherishX Team
