# Kenny Yu - Developer Portfolio

Welcome to my personal portfolio website showcasing my projects and experiments with web technologies, blockchain, and developer tools.

**Live Site:** [https://kennyu.github.io](https://kennyu.github.io)

## About

I'm a developer passionate about pushing the boundaries of web technologies. My work includes browser extensions, blockchain applications, and experimental web projects. I believe in learning by building and sharing knowledge with the community.

## Featured Projects

### [White Noise Generator](https://kennyu.github.io/white-noise/)
Relaxing white, pink, and brown noise generator for focus and sleep, built with Web Audio API.
- **Tech:** Web Audio API, JavaScript, Vanilla JS
- **Status:** Live Demo Available

### [chrome-search](https://github.com/kennyu/chrome-search)
Search information in your past and present Chrome tabs. Browser extension for enhanced tab management.
- **Tech:** JavaScript, Chrome Extension API

### [ETHNYC 2023](https://github.com/kennyu/ETHNYC_2023)
Hackathon project from ETH New York 2023 focusing on blockchain and web3 development.
- **Tech:** Python, Blockchain, Ethereum

### [ETHNYC 2022](https://github.com/kennyu/ETHNYC_2022)
Hackathon project from ETH New York 2022 exploring smart contracts and decentralized applications.
- **Tech:** TypeScript, Blockchain, Ethereum

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Web APIs:** Web Audio API, Chrome Extensions API
- **Blockchain:** Ethereum, Smart Contracts, Web3
- **Tools:** Git, GitHub Pages

## Project Structure

```
kennyu.github.io/
├── index.html              # Portfolio homepage
├── styles.css              # Portfolio styling
├── projects.js             # Project data and rendering
├── white-noise/            # White noise generator app
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── audio-engine.js
│   └── README.md
└── README.md              # This file
```

## Local Development

This is a static website built with vanilla HTML, CSS, and JavaScript. No build process required.

```bash
# Clone the repository
git clone https://github.com/kennyu/kennyu.github.io.git

# Open in browser
open index.html
```

Or start a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000`

## Adding New Projects

To add a new project to the portfolio:

1. Open `projects.js`
2. Add a new project object to the `projects` array:

```javascript
{
  title: "Your Project Name",
  description: "Brief description of your project",
  tags: ["Tag1", "Tag2", "Tag3"],
  demoUrl: "https://demo-link.com", // Optional
  githubUrl: "https://github.com/username/repo", // Optional
  badge: "Featured" // Optional
}
```

3. The project card will automatically render on the homepage

## Deployment

This site is automatically deployed via GitHub Pages:

- **Source:** `master` branch, root directory
- **URL:** `https://kennyu.github.io`
- **Subdirectories:** Accessible at `https://kennyu.github.io/[folder-name]/`

Any push to the `master` branch will automatically trigger a deployment.

## Contact

- **GitHub:** [@kennyu](https://github.com/kennyu)
- **Email:** your.email@example.com

## License

MIT License - Feel free to fork and use this portfolio template for your own projects.

---

Built with vanilla JavaScript and deployed on GitHub Pages.
