#!/usr/bin/env bash

# Install NVM
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
. ~/.nvm/nvm.sh

# Install node
nvm install v8.6

# Use node
source ~/.bashrc

export PATH="~/.npm/bin:$PATH"

# Install PM2
npm i -g pm2



