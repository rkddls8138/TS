## Git Guide for biggner!!

0. - basic 
git init
git add fileName

1. - squash
- [] git log --pretty=oneline
- [] git rebase -i HEAD~N : modify pick to sqaush :) 

2. - statsh
- [] git stash                         <-- now status saved
- [] git stash list                    <-- stash list
- [] git stash apply stash@{index}     <-- stash apply
- [] git stash drop  stash@{Index}     <-- stash remove
- [] git stash pop                     <-- apply after drop

3. - 