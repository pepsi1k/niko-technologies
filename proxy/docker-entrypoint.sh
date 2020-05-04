#!/bin/bash

# set container id
SHORT_ID="short id: $HOSTNAME" 
LONG_ID="long id: $(basename $(cat /proc/1/cpuset))"
mkdir host
echo "$SHORT_ID<br>$LONG_ID" > ./host/index.html

# run nginx
echo "Starting nginx..."
exec $(which nginx) -g "daemon off;" $@
