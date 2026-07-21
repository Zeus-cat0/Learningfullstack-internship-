# Git, GitHub and Bitbucket Complete Notes

Author: Zeus

Repository:
fullstack-development-learning-during-internship

---

# 1. Introduction to Version Control

## What is Version Control?

Version Control is a system that helps developers track changes made to files and projects.

It allows developers to:

- Save different versions of code
- Restore previous versions
- Work with other developers
- Track who made changes

Example:

```
Project Version 1
       |
       |
Project Version 2
       |
       |
Project Version 3
```

---

# 2. What is Git?

Git is a distributed version control system used to track changes in source code.

It was created by Linus Torvalds in 2005.

Git works on the command line and runs locally on a developer's computer.

---

## Why Use Git?

Git helps developers:

- Track code changes
- Create different versions
- Work safely on features
- Collaborate with teams
- Restore deleted or previous code

---

# 3. Basic Git Workflow

The Git workflow:

```
Working Directory
        |
        |
     git add
        |
        v
  Staging Area
        |
        |
   git commit
        |
        v
 Local Repository
        |
        |
     git push
        |
        v
 GitHub Repository
```

---

# 4. Terminal Commands

Before using Git, we use basic terminal commands.

---

# pwd

## Purpose:

Shows the current working directory.

Command:

```bash
pwd
```

Example:

```
D:\fullstack-development-learning-during-internship
```

---

# mkdir

## Purpose:

Creates a new folder.

Command:

```bash
mkdir folder-name
```

Example:

```bash
mkdir git-project
```

Creates:

```
git-project/
```

---

# cd

## Purpose:

Changes the current directory.

Enter folder:

```bash
cd folder-name
```

Example:

```bash
cd git-project
```

---

Go back one folder:

```bash
cd ..
```

---

# dir

## Purpose:

Displays files and folders.

Command:

```bash
dir
```

Example output:

```
README.md
index.html
style.css
```

---

# touch

## Purpose:

Creates a new file.

Command:

```bash
touch README.md
```

Creates:

```
README.md
```

---

# code .

## Purpose:

Open current folder in Visual Studio Code.

Command:

```bash
code .
```

---

# 5. Vim Text Editor

Vim is a terminal-based text editor.

It is used to create and edit files from the terminal.

---

## Open File Using Vim

Command:

```bash
vim README.md
```

---

# Vim Modes

## Normal Mode

Default mode when Vim starts.

Used for:

- Navigation
- Commands

---

## Insert Mode

Used for writing text.

Press:

```
i
```

Example:

```
i
Hello Git
```

---

## Save and Exit Vim

Steps:

1. Press:

```
Esc
```

2. Type:

```
:wq
```

3. Press Enter

Meaning:

```
w = write/save
q = quit
```

---

## Exit Without Saving

Command:

```
:q!
```

---

# 6. Git Commands

---

# git init

## Purpose:

Creates a new Git repository.

Command:

```bash
git init
```

It creates:

```
.git
```

folder.

---

# git status

## Purpose:

Shows the current state of the repository.

Command:

```bash
git status
```

Shows:

- Modified files
- Untracked files
- Staged files
- Current branch

---

# Git File States

A file moves through these stages:

```
Untracked
    |
    |
 git add
    |
    v
Staged
    |
    |
git commit
    |
    v
Committed
```

---

# git add

Adds changes to staging area.

---

## Add Single File

Command:

```bash
git add filename
```

Example:

```bash
git add README.md
```

---

## Add All Files

Command:

```bash
git add .
```

Adds:

- New files
- Modified files

---

## git add -A

Stages:

- New files
- Modified files
- Deleted files

---

## git add -u

Stages:

- Modified files
- Deleted files

Does not add new files.

---

# git commit

Creates a permanent snapshot of changes.

Command:

```bash
git commit
```

---

# git commit -m

Creates commit with message.

Example:

```bash
git commit -m "Added Git notes"
```

Good commit messages:

```
Added login feature

Fixed navbar issue

Updated documentation
```

---

# git log

Shows commit history.

Command:

```bash
git log
```

Shows:

- Commit ID
- Author
- Date
- Message

---

# git log --oneline

Short commit history.

Example:

```
a82cd21 Added Git notes
91abc32 Added JavaScript files
```

---

# git show

Shows exact changes in a commit.

Command:

```bash
git show commit-id
```

Example:

```bash
git show a82cd21
```

---

# Checking Deleted Files

Find deleted files:

```bash
git log --diff-filter=D --summary
```

---

# Restore Deleted Files

Command:

```bash
git checkout commit-id -- filename
```

Example:

```bash
git checkout a82cd21 -- notes.md
```

---

# 7. Git Branches

A branch is a separate copy of the project where developers can work safely.

Example:

```
main
 |
 |
feature-login
```

---

# git branch

Shows available branches.

Command:

```bash
git branch
```

---

# Create Branch

Command:

```bash
git branch branch-name
```

Example:

```bash
git branch feature-login
```

---

# Switch Branch

Command:

```bash
git checkout branch-name
```

Example:

```bash
git checkout feature-login
```

---

# Create and Switch Branch

Command:

```bash
git checkout -b feature-login
```

---

# 8. GitHub

## What is GitHub?

GitHub is a web-based platform used for hosting Git repositories online.

Git is a command-line tool, while GitHub provides a web interface with additional collaboration features.

---

# GitHub Features

## Repository Hosting

Stores Git projects online.

Example:

```
Project
 |
 |-- HTML
 |-- CSS
 |-- JavaScript
 |-- README.md
```

---

## Collaboration

Multiple developers can work together.

Features:

- Branches
- Pull Requests
- Code Reviews
- Issues

---

## Access Control

Controls:

- Who can view code
- Who can edit code
- Who can contribute

---

## Project Management

GitHub provides:

- Issues
- Projects
- Wikis
- Task management

---

# Is GitHub Free?

GitHub provides free plans including:

- Public repositories
- Private repositories
- Collaboration features

---

# 9. GitHub Remote Commands

---

# git remote -v

Shows connected GitHub repository.

Command:

```bash
git remote -v
```

Example:

```
origin https://github.com/user/project.git
```

---

# git push

Uploads commits to GitHub.

Command:

```bash
git push
```

---

# Push New Branch

Command:

```bash
git push --set-upstream origin branch-name
```

Example:

```bash
git push --set-upstream origin feature-login
```

---

# 10. Bitbucket

## What is Bitbucket?

Bitbucket is a Git repository management platform developed for professional teams.

It provides a central place to:

- Store Git repositories
- Manage source code
- Collaborate with teams
- Control access

---

# Bitbucket Features

## Access Control

Restricts access to source code.

---

## Team Collaboration

Allows teams to:

- Share code
- Review changes
- Manage projects

---

## Development Workflow

Supports:

- Branching
- Pull Requests
- Code Reviews

---

# Is Bitbucket Free?

Yes.

Bitbucket provides free plans for individuals and small teams.

---

# 11. Difference Between GitHub and Bitbucket

| GitHub | Bitbucket |
|---|---|
| Focused on open-source projects | Focused on private team projects |
| Larger developer community | Popular with companies |
| Owned by Microsoft | Owned by Atlassian |
| More public projects | More enterprise usage |

---

# 12. Git vs GitHub vs Bitbucket

| Technology | Purpose |
|---|---|
| Git | Version control tool |
| GitHub | Online Git repository hosting |
| Bitbucket | Git hosting platform for teams |

---

# 13. Complete Daily Git Workflow

```bash
git status

git add .

git commit -m "message"

git push
```

---

# 14. Example Creating a Git Project

```bash
mkdir project

cd project

touch README.md

git init

git add README.md

git commit -m "Initial commit"
```

---


# End of Git, GitHub and Bitbucket Notes