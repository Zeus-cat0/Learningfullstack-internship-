# Git and Terminal Commands Complete Notes

## Introduction

Git is a distributed version control system used to track changes in source code. It helps developers manage different versions of projects, collaborate with others, and maintain project history.

GitHub is a cloud platform where we store and share Git repositories online.

---

# Part 1: Basic Terminal Commands

Before using Git, we use some basic terminal commands to create folders and files.

---

# pwd

## Purpose:
`pwd` means **Print Working Directory**.

It shows the current location where we are working.

## Example:

```bash
pwd
```

Output:

```
D:\fullstack-development-learning-learning
```

---

# mkdir

## Purpose:
`mkdir` means **Make Directory**.

It creates a new folder.

## Example:

```bash
mkdir git-fun
```

Creates:

```
git-fun/
```

---

# cd

## Purpose:
`cd` means **Change Directory**.

It is used to move between folders.

## Example:

```bash
cd git-fun
```

Moves inside the git-fun folder.

### Go back one folder:

```bash
cd ..
```

### Go to another folder:

```bash
cd folder-name
```

---

# dir

## Purpose:
Displays all files and folders inside the current directory.

## Example:

```bash
dir
```

Output:

```
README.md
index.html
style.css
```

---

# touch

## Purpose:
Creates a new empty file.

## Example:

```bash
touch README.md
```

Creates:

```
README.md
```

---

# code

## Purpose:
Opens a file or folder in Visual Studio Code.

## Example:

Open a file:

```bash
code README.md
```

Open current folder:

```bash
code .
```

---

# Vim Text Editor

Vim is a terminal-based text editor used to create and edit files.

---

## Open File Using Vim

Command:

```bash
vim README.md
```

This opens README.md inside Vim.

---

# Vim Modes

## 1. Normal Mode

Default mode when Vim opens.

Used for:
- Navigation
- Running commands

---

## 2. Insert Mode

Used to write text.

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

2. Press:

```
:
```

3. Type:

```
wq
```

4. Press Enter

Command:

```
:wq
```

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

Meaning:

Quit and ignore changes.

---

# Part 2: Git Commands

---

# git init

## Purpose:

Creates a new Git repository.

It converts a normal project folder into a Git repository.

## Example:

```bash
git init
```

It creates a hidden folder:

```
.git
```

This folder stores Git history.

---

# git status

## Purpose:

Shows the current state of the Git repository.

It displays:

- New files
- Modified files
- Staged files
- Current branch

## Example:

```bash
git status
```

---

# Git File States

A file normally goes through three stages:

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
Repository
```

---

# Untracked Files

When Git sees a new file:

Example:

```
README.md
```

It means Git does not track this file yet.

---

# git add

## Purpose:

Moves changes from working directory to staging area.

---

## Add Specific File

Example:

```bash
git add README.md
```

Only adds README.md.

---

## Add All Files

```bash
git add .
```

Adds new and modified files.

---

## git add -A

Stages:

- New files
- Modified files
- Deleted files

Example:

```bash
git add -A
```

---

## git add -u

Stages:

- Modified files
- Deleted files

Does not add new files.

---

# git commit

## Purpose:

Creates a permanent snapshot of changes.

Example:

```bash
git commit
```

---

# git commit -m

Creates a commit with a message.

Example:

```bash
git commit -m "Added Git notes"
```

Good commit messages explain what was changed.

Examples:

```
Added login feature
Fixed navbar issue
Updated documentation
```

---

# git log

## Purpose:

Shows previous commits.

Example:

```bash
git log
```

Displays:

- Commit ID
- Author
- Date
- Commit message

---

# git checkout

## Purpose:

Used to restore files or switch branches.

Restore a file:

```bash
git checkout filename
```

Switch branch:

```bash
git checkout branch-name
```

---

# Working With Branches

Branches allow developers to work on features separately without affecting the main project.

---

# git branch

## Purpose:

Shows available branches.

Example:

```bash
git branch
```

Output:

```
* main
  feature-login
```

---

# Create New Branch

Example:

```bash
git branch feature-login
```

Creates:

```
feature-login
```

---

# Switch Branch

Example:

```bash
git checkout feature-login
```

Now changes will happen inside feature-login branch.

---

# Create and Switch Branch

Shortcut:

```bash
git checkout -b feature-login
```

Creates a new branch and switches to it.

---

# git push

## Purpose:

Uploads commits from local repository to GitHub.

Example:

```bash
git push
```

---

# Push New Branch to GitHub

Example:

```bash
git push --set-upstream origin feature-login
```

This creates the branch on GitHub and connects it with local branch.

---

# Remote Repository Commands

## git remote -v

Shows connected GitHub repository.

Example:

```bash
git remote -v
```

Output:

```
origin https://github.com/user/project.git
```

---

# Complete Git Workflow

Daily Git workflow:

```bash
git status

git add .

git commit -m "message"

git push
```

---

# Creating a New Project With Git

Example:

```bash
mkdir git-project

cd git-project

touch README.md

git init

git add README.md

git commit -m "Initial commit"
```

---

# Git Branch Workflow Example

Create branch:

```bash
git branch feature-navbar
```

Move to branch:

```bash
git checkout feature-navbar
```

Make changes.

Add changes:

```bash
git add .
```

Commit:

```bash
git commit -m "Added navbar feature"
```

Push:

```bash
git push --set-upstream origin feature-navbar
```

---

# Important Git Commands Summary

| Command | Purpose |
|---|---|
| pwd | Show current directory |
| mkdir | Create folder |
| cd | Change directory |
| cd .. | Go back folder |
| dir | Show files |
| touch | Create file |
| vim | Edit file in terminal |
| code . | Open VS Code |
| git init | Initialize repository |
| git status | Check changes |
| git add | Add changes |
| git commit | Save changes |
| git log | View history |
| git checkout | Restore/switch |
| git branch | Manage branches |
| git push | Upload to GitHub |
| git remote -v | Check GitHub connection |

---

# End of Git Notes