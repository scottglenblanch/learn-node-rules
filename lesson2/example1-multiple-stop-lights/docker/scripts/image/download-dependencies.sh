#!/bin/sh

SCRIPT_RUNNING_DIR=""

download_dependencies() {
  apk add bash
  apk add --update npm
  npm install -g yarn
}

output_message() {
  echo "Running ${SCRIPT_RUNNING_DIR}/download-dependencies.sh"
  echo "SCRIPT_RUNNING_DIR is ${SCRIPT_RUNNING_DIR}"
}

set_variables() {
  SCRIPT_RUNNING_DIR="/scripts/image"
}

set_variables
output_message
download_dependencies