#!/usr/bin/env bash

cd $(dirname "${BASH_SOURCE[0]}")/..


# $(yarn bin)/tsc --project webpack/ && \
# $(yarn bin)/webpack --config webpack/webpack.config.js --env.dev
docker-compose up --build