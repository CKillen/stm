Super sleepy so pushing in case I forget

have to make an empty branch called gh-pages
I would like to have this automated in the script eventually
```
git checkout --orphan <branch name>
git rm -rf .
git commit --allow-empty -m "root commit"
git push origin <branch name>
```

add homepage to package json. mine is
```
"homepage": "http://CKillen.github.io/stm",
```

In repo settings set Page to to the gh-pages branch and the docs directory. 

I chose this method over the previous one I found online because it didn't force
me to pull the docs folder everytime. 
