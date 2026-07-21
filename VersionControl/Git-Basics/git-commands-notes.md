# Git Basic Commands Notes

## Introduction

Git is a distributed version control system used to track changes in source code and collaborate with other developers.

---

# Creating a Git Repository

## mkdir

Creates a new directory.

Example:

mkdir git-fun


## cd

Moves into a directory.

Example:

cd git-fun


## touch

Creates a new file.

Example:

touch README.md

---

# Initializing Git

## git init

Creates a new Git repository or converts an existing project into a Git repository.

Example:

git init

---

# Checking Repository Status

## git status

Shows the current state of the working directory and staging area.

It tells:
- Modified files
- Untracked files
- Staged files

---

# Adding Files

## git add filename

Adds a specific file to the staging area.

Example:

git add README.md


## git add -A

Stages all changes including:
- New files
- Modified files
- Deleted files


## git add .

Stages new files and modifications.


## git add -u

Stages modified and deleted files.

---

# Commit Changes

## git commit -m "message"

Creates a snapshot of staged changes.

Example:

git commit -m "Added Git notes"

---

# Viewing Commit History

## git log

Displays previous commits.

Example:

git log

---

# Branches

## git branch

Shows available branches.


## git branch branch-name

Creates a new branch.

Example:

git branch feature-login


## git checkout branch-name

Switches to another branch.


Example:

git checkout feature-login


## Push Branch to GitHub

git push --set-upstream origin branch-name

Uploads the new branch to GitHub.

---

# Reverting Changes

## git checkout

Used to restore files from previous commits.
