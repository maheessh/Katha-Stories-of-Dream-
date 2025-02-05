


# KathaKahani

A platform that allows kids to create stories using just a few keywords or a single-line prompt. It also includes a speak function, enabling kids to listen to the stories they've created. I'm working on adding features where students can save their stories, and parents can contribute by adding specific stories they want to share with their children.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Troubleshooting](#troubleshooting)
  - [OpenSSL Error](#openssl-error)
  - [Vulnerability Warnings](#vulnerability-warnings)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/maheessh/Katha-Stories-of-Dream-.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Katha-Stories-of-Dream 
   ```
   or
   
     ```bash
   cd /to/the/path 
   ```

4. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Project

To start the development server:

```bash
npm start
```

The app should be running at [http://localhost:3000](http://localhost:3000).

## Troubleshooting

### OpenSSL Error

If you encounter the following error while running the project:

```
Error: error:0308010C:digital envelope routines::unsupported
```

This is likely due to compatibility issues between Node.js v20 and older versions of Webpack or `react-scripts`. 

#### Fix 1: Set the Legacy OpenSSL Provider

For **Windows Command Prompt**:

```cmd
set NODE_OPTIONS=--openssl-legacy-provider
npm start
```

For **PowerShell**:

```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm start
```

For **macOS/Linux**:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
npm start
```

#### Fix 2: Downgrade Node.js to v16 or v18

If the issue persists, it’s recommended to downgrade to Node.js v16 or v18:

```bash
nvm install 16
nvm use 16
```

### Vulnerability Warnings

Running `npm audit` might show various security vulnerabilities. You can resolve them by running:

```bash
npm audit fix
```

If that doesn’t resolve all issues, use:

```bash
npm audit fix --force
```

Be cautious, as this might introduce breaking changes.

## Project Structure

Briefly explain the project’s structure and key directories:

```
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── App.js           # Main App component
│   └── index.js         # Entry point
├── package.json         # Project configuration and scripts
└── README.md            # Project documentation
```

## Contributing

Contributions are welcome! Please follow the [code of conduct](CODE_OF_CONDUCT.md) and submit pull requests with clear descriptions.

```
