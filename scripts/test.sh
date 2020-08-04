#!/usr/bin/env bash

cd $(dirname "${BASH_SOURCE[0]}")/..
JEST_CONFIG=./config/jest
JEST_BUILD_PROJECT=${JEST_CONFIG}/tsconfig.json

$(yarn bin)/tsc --project  ${JEST_BUILD_PROJECT} && \
  $(yarn bin)/jest --config ${JEST_CONFIG}/jest.config.js "${@}"