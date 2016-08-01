Start: Redux Tutorials
Primary Aim:   Become an expert
Secondary Aim: Learn GIT command line

Resource1:
https://egghead.io/courses/getting-started-with-redux


Git:
----
1. Repo: https://github.com/bhalla-shiraz/ReduxExperiments.git
git clone https://github.com/bhalla-shiraz/ReduxExperiments.git
git config --global user.name
git config user.name
git config --global user.name "Sbhalla"
git config user.name "bhalla-shiraz"

//new repo
echo "# ReduxExperiments" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/bhalla-shiraz/ReduxExperiments.git
git push -u origin master

//now when I create some files and I need to add and commit it
git status
git add ReadMe.txt
git status
git commit -m "readmeAdded"
git branch
git push origin master



      git clone https://gecgithub01.walmart.com/R-Transaction/checkout.git
      git branch
  567  cd checkout
  568  ls
  569  git branch
  570  git checkout -b Bug-GPCC-7626-sb
  571  git branch
  572  ls
  573  git branch
  574  git status


  npm install && builder run build && builder run dev
    577  ls
    578  builder run test
    579  builder run test
    580  builder run dev
    581  git branch
    582  git status
    583  git add client/components/fulfillment/options/arrival-message/arrival-message.jsx
    584  git add client/components/fulfillment/preorder-message/preorder-message.jsx
    585  git add client/components/fulfillment/summary/pickup-details/pickup-details.jsx
    586  git add client/components/fulfillment/summary/shipping-details/shipping-details.jsx
    587  git add client/util/date-diff.util.js
    588  git status
    589  git commit -m "preorder date different from current year handled"
    590  git status
    591  git push origin Bug-GPCC-7626-sb
    592  git status
git status
  507  git branch
  508  git pull --rebase origin master
  509  git pull --rebase origin master
  510  git status 
  511  git stash
  512  git status
  513  git pull --rebase origin master
  514  git status
  515  git status
  516  git add client/components/fulfillment/options/arrival-message/arrival-message.jsx
  517  git add client/components/fulfillment/summary/pickup-details/pickup-details.jsx
  518  git status
  519  git rebase --continue
  520  git status
  521  git rebase --continue
  522  git status
  523  git add 
  524  git add client/components/fulfillment/options/arrival-message/arrival-message.jsx
  525  git add client/components/fulfillment/summary/pickup-details/pickup-details.jsx
  526  git status
  527  git rebase --continue
  528  git pull --rebase origin master
  529  git pus
  530  git branch
  531  git push origin Bug-GPCC-7626-sb
  532  git pull --rebase origin master
  533  git push origin Bug-GPCC-7626-sb -f


Get disk information from a server called www1.utdallas.edu:
ssh taman@www1.utdallas.edu df -h

(B) List what ports are open on remote host
$ ssh taman@www1.utdallas.edu netstat -vatn

(C) Reboot remote host:
$ ssh root@www1.utdallas.edu reboot

(D) Restart mysql server (please note enclosed multiple command line arguments using a single or double quotes)
$ ssh root@www1.utdallas.edu '/etc/init.d/mysql restart'

(E) Get memory information and store result/output to local file /tmp/memory.status:
$ ssh taman@www1.utdallas.edu 'free -m' > /tmp/memory.status

(G) You can also run multiple command or use the pipes, following command displays memory in format of “available memory = used + free memory” :
$ ssh taman@www1.utdallas.edu free -m | grep "Mem:" | awk '{ print "Total memory (used+free): " $3 " + " $4 " = " $2 }'


