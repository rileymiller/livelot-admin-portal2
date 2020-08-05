#!/usr/bin/env bash

cd $(dirname "${BASH_SOURCE[0]}")/..


# $(yarn bin)/tsc --project webpack/ && \
# $(yarn bin)/webpack --config webpack/webpack.config.js --env.dev

yarn

$(yarn bin)/tsc --project webpack/ && \
$(yarn bin)/webpack-dev-server --host=0.0.0.0 --mode=development --config=dist/webpack.config.js
