#!/usr/bin/env
# Given a CLI Argument for directory, convert all jpg/jpeg images to webp format, then delete original image from file
path=$1

if [[ -z $path ]]; then
  echo "No Path given"
  exit 64
elif [[ ! -d $path ]]; then
  echo "Directory \"$1\" does not exist"
  exit 128
fi

for file in $path/*.jp*; do
  if [ -f "$file" ]; then
    magick "$file" -quality 80 -define webp:lossless=true "${file%.*}.webp"
    echo "${file%.*}"
    rm "$file"
  fi
done
