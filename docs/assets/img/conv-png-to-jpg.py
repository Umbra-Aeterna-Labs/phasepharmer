from os import 
from PIL import Image 

cwd = os.getcwd()
file_list = os.listdir(cwd)
#print(file_list)
for files in file_list:
     = Image.open(r"%s" % 
