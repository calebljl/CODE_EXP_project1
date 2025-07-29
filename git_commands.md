# Git Commands

# Getting started

Refer to the following book for learning more about git
https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository

`git clone https://github.com/calebljl/CODE_EXP_project1.git`

# Stage, commit, push

set username and email to be recorded in metadata of commits
`git config --global user.name caleb`
`git config --global user.email caleb@example.com`

`git status`  
check what status files are currently in

1. Local working directory (unmodified / modified)
2. Staging area
3. Commit area
4. Remote repo

`git add .`  
working -> staging  
for all files

git add <file_name>  
`git add App.js`  
for specific files

git restore --staged <file>  
`git restore --staged App.js`  
remove from staging area, back to working directory
\*IMPT: `git restore` without staged tag will DELETE current changes in working directory

`git commit -m "my commit message"`  
staging -> commit

`git commit -a -m "my commit message"`  
stage all files & commit in one command

git push <remote_name> <branch_name>  
`git push origin main`  
commit -> remote

- remote repo is almost always called origin
- first branch is called main
- if branch not specified, will git push to the current branch

`git remote show origin`
show status of remotes

# Branching

`git log --oneline --decorate --graph --all`
graph of branching

- type `wq` to exit graph
