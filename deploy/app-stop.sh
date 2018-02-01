#!/usr/bin/env bash

# Read bashrc
source ~/.bashrc

# Export yarn cache
export PATH="~/.npm/bin:$PATH"

pm2 delete all
