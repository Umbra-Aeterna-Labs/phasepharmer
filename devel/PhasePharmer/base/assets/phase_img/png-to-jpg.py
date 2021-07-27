# PNG to JPG converter
# 
# Converts all files ending in ".jpg" to ".png" in the current directory.

from PIL import Image
import subprocess

bashCmd = "find -iname '*.png'"
subprocess.Popen(bashCmd.split(), stdout=subprocess.PIPE)


