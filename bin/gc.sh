#!/bin/bash

# 创建组件目录，包含三个文件 "index.js index.story.js README.md index.scss"
rootDir=$(pwd)

indexTpl="import Dialog from 'rc-dialog';\nimport 'rc-dialog/assets/index.css';\nexport { Dialog };"
indexStoryTpl="import React from 'react';\n
import { storiesOf } from '@storybook/react';\n
import { withDocs } from 'storybook-readme';\n
import Readme from './README.md';\n
import { Dialog } from './index';\n

const Demo = (\n
  <Dialog></Dialog>\n
);\n

storiesOf('组件列表|Dialog', module)\n
  .addDecorator(withDocs(Readme))\n
  .add('Readme', () => <div style={{ width: 400 }}>{Demo}</div>);\n
"
readmeTpl="### 简介\n使用的是 [rc-menu](https://github.com/react-component/menu)\n### API\n"
scssTpl="@import '../styles/themes/variables.scss';"
set -e
read -p "Input Component Dirctory Name: " name
dir="$rootDir/src/$name"

if [[ -z $name ]];then
  echo 'Component Dirctory Name Can Not Be Empty'
elif [[ -e $dir ]];then
  echo "$name Component has already exits!"
else
  mkdir $dir
  touch "$dir/index.js" "$dir/index.story.js" "$dir/README.md" "$dir/index.scss"
  echo -e ${indexTpl} > "$dir/index.js"
  echo -e ${indexStoryTpl} > "$dir/index.story.js"
  echo -e ${readmeTpl} > "$dir/README.md"
  echo -e ${scssTpl} > "$dir/index.scss"
  echo "$name Component Created Successfully!"
fi
