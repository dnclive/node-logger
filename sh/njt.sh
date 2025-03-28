#!/bin/bash

# common vars and functions

COMMON_SH=true

# exit on error
function ExitOnError() {
  if [ "$1" -ne 0 ]; then
    echo
    echo "$2"
    #echo
    exit "$1"
  fi
}

# echo on error
function onError() {
  if [ "$1" -ne 0 ]; then
    echo
    echo "$2"
    #echo
    #exit "$1"
  fi
}

# join array to string
function join_by {
  local d=${2-} f=${3-}
  if shift 3; then
    res=$(printf %s "$f" "${@/#/$d}")
  fi
  export LAST_F_RESULT=$res
}

function fBase_path {
  local path=${1} dir=${2}
  #echo "path=$path"
  #echo "dir=$dir"
  path_parts=$(echo "$path" | tr "/" "\n")
  #echo "$path_parts"
  paths=()
  for part in $path_parts
  do
    if [ "$part" = "$dir" ]; then
      break
    else
      paths+=("$part")
    fi;
  done
  #echo "${paths[@]}"
  join_by base_path '/' "${paths[@]}"
  base_path="/$LAST_F_RESULT"
  #echo "base_path=$base_path"
  export LAST_F_RESULT=$base_path
}


