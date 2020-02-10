#!/bin/bash

# 首字母大写
upperCase() {
  first=`echo $1 | cut -c1|tr [a-z] [A-Z]`;
  second=`echo $1 | cut -c2-`;
  echo $first$second;
}

echo "创建文件夹 $1";

folder=components/$1;

if [ ! -d $folder ]; then
  echo "文件夹不存在，正在为您创建..."
  mkdir $folder
else
  echo "文件夹已存在"
fi

cd $folder
echo "进入 `pwd` 目录"

# index.js
if [ ! -f "index.js" ]; then
  echo "// 入口文件" >> index.js
else
  echo "index.js 已存在"
fi

# README.md
if [ ! -f "README.md" ]; then
  echo "# $1" >> README.md
else
  echo "README.md 已存在"
fi

# 单元测试
test_folder="__tests__";
if [ ! -d $test_folder ]; then
  echo "文件夹不存在，正在为您创建..."
  mkdir $test_folder
else
  echo "文件夹已存在"
fi

cd $test_folder
echo "进入 $test_folder 目录"

if [ ! -f "index.js" ]; then
  echo "// 在这里写测试" >> index.js
else
  echo "index.js 已存在"
fi

cd ..
echo "进入 `pwd` 目录"

# storybook
storybook_folder="stories";
if [ ! -d $storybook_folder ]; then
  echo "文件夹不存在，正在为您创建..."
  mkdir $storybook_folder
else
  echo "文件夹已存在"
fi

cd $storybook_folder;
echo "进入 $storybook_folder 目录"

filename=`upperCase $1`;
file="$filename.stories.js";
if [ ! -f $file ]; then
  echo "// 在这里写组件示例" >> $file;
else
  echo "$file 已存在"
fi

cd ..
echo "进入 `pwd` 目录"

# src
src_folder="src";
if [ ! -d $src_folder ]; then
  echo "文件夹不存在，正在为您创建..."
  mkdir $src_folder;
else
  echo "文件夹已存在"
fi

cd $src_folder;
echo "进入 `pwd` 目录"

vue="$1.vue";
if [ ! -f $vue ]; then
  echo "<template><div class=\"$1\">$vue</div></template>" >> $vue;
else
  echo "$vue 已存在"
fi

style="style.scss";
if [ ! -f $style ]; then
  echo ".$1 { color: red }" >> $style;
else
  echo "$style 已存在"
fi