# 🚀 SpaceX Mission Tracker - Angular & Node.js

[![Angular](https://img.shields.io/badge/Angular-19.2.7-DD0031?logo=angular&logoColor=white)](https://angular.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0.0-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.4-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

**🌐 Live Demo:** [https://101415117-lab-test2-comp3133.vercel.app](https://101415117-lab-test2-comp3133-git-main-deeps-projects-80f17089.vercel.app/)

A modern web application tracking SpaceX missions with real-time data, built with Angular 19 (SSR) and Node.js.

## ✨ Key Features

- 🛰️ **Real-time Mission Data** - Fetching from SpaceX REST API
- ⚡ **Blazing Fast Performance** - Server-Side Rendering (SSR) with Angular Universal
- 📱 **Fully Responsive** - Works on all device sizes
- 🔍 **Interactive UI** - Detailed mission views with animations
- 📊 **Data Visualization** - Charts and statistics for mission data

## 🛠️ Tech Stack

### Frontend
- ![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white) Angular 19 with SSR
- ![RxJS](https://img.shields.io/badge/-RxJS-B7178C?logo=reactivex&logoColor=white) Reactive programming
- ![Angular Material](https://img.shields.io/badge/-Material-757575?logo=angular&logoColor=white) UI component library

### Backend
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) JavaScript runtime
- ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white) Web framework

### API
- ![SpaceX API](https://img.shields.io/badge/-SpaceX_API-000000?logo=spacex&logoColor=white) Mission data source

### Deployment
- ![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white) Hosting platform

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v8+ or yarn
- Angular CLI v19+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Deeppatel91/101415117-lab-test2-comp3133.git
   cd 101415117-lab-test2-comp3133
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 📦 Build

To build the project for production:

```bash
npm run build
# or
yarn build
```

## 🧪 Testing

Run tests with:

```bash
npm test
# or
yarn test
```

## 📂 Project Structure

```
├── src/
│   ├── app/                  # Angular components
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page components
│   │   ├── services/         # API and utility services
│   │   ├── models/           # TypeScript interfaces
│   │   └── shared/           # Shared modules and components
│   ├── assets/               # Static assets
│   ├── environments/         # Environment configurations
│   └── styles/               # Global styles
├── server/                   # Node.js server code
│   ├── api/                  # API routes
│   ├── config/               # Server configuration
│   └── middleware/           # Express middleware
├── angular.json              # Angular CLI configuration
├── package.json              # Project dependencies
└── tsconfig.json             # TypeScript configuration
```

## 🌟 Features in Detail

### Mission Listing
- 📋 View all SpaceX missions with filtering options
- 🔄 Sort by launch date, mission success, and more
- 🔍 Search functionality to find specific missions

### Mission Details
- 📊 Comprehensive mission statistics
- 🚀 Rocket specifications and images
- 📍 Launch site information with coordinates
- 👨‍🚀 Crew information when applicable

### Dashboard
- 📈 Mission success rate visualization
- 📅 Timeline of upcoming launches
- 🌐 Global launch site map

## 🔄 API Integration

The application integrates with the official SpaceX API to provide real-time data on:
- Past and upcoming launches
- Rockets and spacecraft details
- Crew information
- Launch sites

## 📱 Responsive Design

The UI adapts seamlessly to various screen sizes:
- 💻 Desktop
- 📱 Tablet
- 📱 Mobile

## 🛣️ Roadmap

- [ ] User authentication
- [ ] Favorites and notifications
- [ ] Offline mode support
- [ ] Push notifications for upcoming launches
- [ ] Internationalization support

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [SpaceX API](https://github.com/r-spacex/SpaceX-API) for providing the data
- [Angular Team](https://angular.io/) for the amazing framework
- All contributors who have helped shape this project

---

Developed by Deep Patel | [GitHub](https://github.com/Deeppatel91) | [LinkedIn](https://linkedin.com/in/yourprofile)
