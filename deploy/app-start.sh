#!/usr/bin/env bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
. ~/.nvm/nvm.sh

# Install node
nvm install v8.6

# Use node
source ~/.bashrc

# Export yarn cache
export PATH="~/.npm/bin:$PATH"

# Install PM2
npm i -g pm2


# Change Directory
cd ~/abhilash-portfolio

sudo yum install nodejs npm --enablerepo=epel
npm install npm -g

pm2 update

# Start server using PM2
sudo npm install

NODE_ENV=production DEPLOYMENT=$DEPLOYMENT_GROUP_NAME pm2 start index.js -i max


