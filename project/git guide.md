## Git Guide for biggner!!

0. - basic 
git init
git add fileName

1. - squash
- [x] git log --pretty=oneline
- [x] git rebase -i HEAD~N : modify pick to sqaush :) 

2. - statsh
- [x] git stash                         <-- now status saved
- [x] git stash list                    <-- stash list
- [x] git stash apply stash@{index}     <-- stash apply
- [x] git stash drop  stash@{Index}     <-- stash remove
- [x] git stash pop                     <-- apply after drop

3. - 깃 삭제된 스태시 복구
git fsck --no-reflog | awk '/dangling commit/ {print $3}' | xargs -L 1 git --no-pager show -s --format="%ci %H" | sort
git stash apply {stash의\_hash값}