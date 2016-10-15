#!/bin/bash


rm composer.lock
rm -Rf shippable/
rm -Rf vendor/
find . -name ".DS_Store" -print0 | xargs -0 rm -rf
echo "setup some variables..."
sleep 1
SERVER= # Your server
USER=  # Your username
PASSW= # your password

echo "connecting and deleting all files from server..."
sleep 1
ncftp <<END_OF_SESSION
open -u $USER -p $PASSW $SERVER
dir
rm -rf *
rm .htaccess
dir
bye
END_OF_SESSION
sleep 1
echo "Done!"
sleep 1
