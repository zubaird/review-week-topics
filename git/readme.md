## Branching + Merging Revisited

To create a new branch and switch to it run `git branch -b NAME_OF_NEW_BRANCH`

To see all of your branches run `git branch -a` or `gba` to see your local and remote branches

To switch to a branch run `git checkout NAME_OF_BRANCH`

When you are ready to move your changes from one branch to another run the `git merge` command. 

A sample workflow could look like this:

1. Start on the `master` branch and create a new branch called feature `git checkout -b feature`
2. While on the feature branch, make some changes to the application and add and commit them.
3. Move back to the master branch `git checkout master` and merge the changes from the feature branch in `git merge feature`

## Checkout and Resets

When you are working with files that git has tracked already and you want to discard any changes you have made to that file, you can run `git checkout NAME_OF_THAT_FILE`. Just be careful, this can not be undone! If you want to to discard changes in working directory you are in you can run `git checkout .`, remember that this will only work if git is tracking these files and this can not be undone!

If you have already made a commit and you want to undo it you have a couple options. 

- to undo changes you can use the `git reset` command (the options are `--hard`, `--mixed` and `--soft`) with `--mixed` being the default. Remember that these commands will either need to know where in relation to HEAD to reset, or the name of a specific commit.

Uh oh....you've run `git reset --hard HEAD~2` and you have wiped out your past two commits. You just realized you need them back or else you are in serious trouble. No worries - `git reflog` to the rescue! If you type in `git reflog` you will see a list of your previous commits and resets. You can then run `git reset SOME_SHA` to undo your reset.

## Stashing

## Advanced Git Topics

If you would like to continue learning more about git, you can research what `git rebase` does, how it differs from `git merge` and what you can do with `git rebase -i` (or interactive mode).

Another advanced git topic is a submodule. A submodule allows you to keep another Git repository in a subdirectory of your repository. The other repository has its own history, which does not interfere with the history of the current repository. This can be used to have external dependencies such as third party libraries for example. You can read more about them [here](http://git-scm.com/docs/git-submodule)
