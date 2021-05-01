#!/bin/bash
#
# Removes the license header from the specified list of files to prepare for
# deployment to the live server.














# Directories with files to modify
LAYOUTS_DIR="/home/chris/Code/git/umbra-aeterna-labs/PhasePharmer/devel/PhasePharmer/live/_layouts"
LIVE_DIR="/home/chris/Code/git/umbra-aeterna-labs/PhasePharmer/devel/PhasePharmer/live"
ASSETS_DIR="${LIVE_DIR}/assets"
CSS_DIR="${ASSETS_DIR}/css"
SRC_DIR="${ASSETS_DIR}/phase_src"

# Files to modify
sed -i '1,16d' "${LAYOUTS_DIR}/default.html"
sed -i '1,16d' "${CSS_DIR}/style.scss"
sed -i '1,16d' "${SRC_DIR}/phase.css"
sed -i '1,16d' "${SRC_DIR}/phase.js"
sed -i '1,16d' "${LIVE_DIR}/index.md"

# sed -i '1,16d' 
# echo cat 
