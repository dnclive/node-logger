#!/bin/bash

# inject .env vars
ENV="${NODE_ENV:-development}"
source "$PWD/.env" 2> /dev/null
source "$PWD/.env.$ENV" 2> /dev/null

export NPM_TOKEN

# run base njt script
source "${PWD}"/node_modules/@dnclive/node-js-tools/sh/bump_ver_3.sh "$@"