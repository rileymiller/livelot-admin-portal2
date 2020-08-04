#!/usr/bin/env bash

cd $(dirname "${BASH_SOURCE[0]}")/..

$(yarn bin)/tsc config/jest/jest.config.ts && \
$(yarn bin)/jest "${@}"