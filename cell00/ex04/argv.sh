#!/bin/bash
#Counting the number of lines in a list of files
#for loop over arguments

if [ $# -lt 1 ]
then 
	echo "No arguments supplied"
fi 
counter=0
for i in $*
do 
	echo "$i"
	((counter+=1))
	if [ $counter == 3 ]
	then
		break
	fi
done
