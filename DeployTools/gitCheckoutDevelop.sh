sudo chown -R shiami:dev /home/website/ChhoeTaigiWebsite
sudo chmod 770 -R /home/website/ChhoeTaigiWebsite
cd /home/website/ChhoeTaigiWebsite
git checkout develop
git reset --hard
git pull
git branch
git show --summary
cd /home/website/ChhoeTaigiWebsite/DeployTools
