#!/bin/bash
set -e

# Build the builder image
docker build -t nebula-os-builder .

# Run the build
# We mount the current directory to /build in the container
docker run --rm --privileged \
    -v $(pwd):/build \
    nebula-os-builder build

echo "Build complete. ISO should be in the current directory."
