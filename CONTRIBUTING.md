# Participant: How to Contribute

## 🤝 Contributing to [PESto-do](https://github.com/acmpesuecc/PESto-do)
Thank you for your interest in contributing to this project as part of **HackNight 7.0** 🎉  

1. **Check for Open Issues**  
   - Look for any open issues in the repository.  
   - If you find one that interests you, ask to be assigned to it by commenting on the issue.  

2. **Setup Your Codebase**:
   - **Optional:** If you are new to Git, check out this guide: [Git Up and Running (Git 101)](https://rowjee.com/blog/git_up_and_running)
   - **Fork** the repository to your GitHub account and copy it's clone URL
   - **Clone** your forked repository to your local machine using [Git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git) (make sure it's installed)

   ```bash
   git clone git@github.com:your-username/PESto-do.git
   ```

5. **Make Your Changes**
   After cloning and setting up your branch, make the necessary changes as required for the issue in your IDE.

6. **Commit and Push**:
   Commit your changes and push them to your fork:

   ```bash
   git commit -m "Describe the changes you made"
   git push
   ```

   Alternatively, use VSCode's inbuilt Git source control pane `Ctrl+Shift+G` if you're unconfortable with a CLI

7. **Submit a Pull Request**:
   After pushing your changes, open a pull request to pull changes from your fork to the original repository.
   Describe your changes and how you are solving the issue in detail.

8. **Get Feedback**
   Wait for a maintainer to review your pull request (PR) and provide feedback.

9. **Gain Bounty Points**
   If everything is approved, your issue will be closed, and you'll gain bounty points on the leaderboard!

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
