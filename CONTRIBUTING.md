# Participant: How to Contribute


## 🤝 Contributing to [PESto-do](https://github.com/acmpesuecc/PESto-do)

Thank you for your interest in contributing to this project as part of **HackNight 7.0** 🎉

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:
* **[Node.js](https://nodejs.org/)** (version 14 or later) and **[npm](https://www.npmjs.com/)** (Node Package Manager). You can download Node.js [here](https://nodejs.org/en/download/). npm comes bundled with Node.js.

1.  **Check for Open Issues**
    * Look for any open issues in the repository.
    * If you find one that interests you, ask to be assigned to it by commenting on the issue.

2.  **Setup Your Codebase**:
    * **Fork** the repository to your GitHub account and copy its clone URL.
    * **Clone** your forked repository to your local machine.
        ```bash
        git clone git@github.com:your-username/PESto-do.git
        ```
    * **Navigate to the project directory**:
        ```sh
        cd PESto-do
        ```
    * **Install the dependencies**:
        ```sh
        npm install
        ```

3.  **Make Your Changes**
    * After cloning and setting up your branch, make the necessary changes as required for the issue in your IDE.

4.  **Commit and Push**:
    * Commit your changes and push them to your fork:
        ```bash
        git commit -m "Describe the changes you made"
        git push
        ```

5.  **Submit a Pull Request**:
    * After pushing your changes, open a pull request to pull changes from your fork to the original repository.
    * Describe your changes and how you are solving the issue in detail.

6.  **Get Feedback**
    * Wait for a maintainer to review your pull request (PR) and provide feedback.

## Project Structure

The project layout looks like this:
```bash
./
├── public/ # HTML Pages
├── src/ # React source files
│   └── components/ # Subject components
├── CONTRIBUTING.md
├── package.json # NPM packages
├── package-lock.json
└── README.md
```

## Pull Request (PR) Guidelines

- Keep PRs focused (one feature/fix per PR).
- Ensure your code builds successfully and passes tests.
- Write meaningful commit messages.
- Add/update documentation if required.
- Request a review once ready.

## Coding & Formatting Conventions

- Indentation: 2 spaces.
- File naming in CamelCase.
- Add comments for complex logic.
- Run formatters before committing.
