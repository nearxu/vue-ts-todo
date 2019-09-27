<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 12:13:42
 * @LastEditTime: 2019-09-17 12:13:42
 * @LastEditors: your name
 -->
# vue-ts-todo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### some config eslint pretter

vscode setting from 
https://juejin.im/post/5d18e6bce51d455a694f9577


### fun vue 

### 阻止vue 组件更新 强制 组件 更新
<div :key="ids"></div>
watch:{
  num(new,old){
    if(new === old){
      // 不更新
    }else {
      //  强制 更新
      this.ids++
    }
  }
}

