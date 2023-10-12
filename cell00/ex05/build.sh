#!/bin/bash
#Counting the number of lines in a list of files
#for loop over arguments

if [ $# -lt 1 ]
then
        echo "No arguments supplied"
fi
for i in $*
do
        mkdir ./ex$i
done

