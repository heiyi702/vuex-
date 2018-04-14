# vuex-使用说明
从所有代码都在一个stroe.js文件，到拆分文件，最后再拆分模块
此demo只说明用法，不说明原理 【原理自己也没搞明白呢 ૮（༼༼Ծ◞◟Ծ༽༽）ა 

## 文件说明

### vuex1
所有vuex代码都写在一个文件中的使用方法
介绍state、mutations、actions、getters用法

### vuex2

基于vuex1的demo进行代码拆分
拆分出state、mutations、actions、getters四个js文件，并加入新的mutation-type.js
types的用法举例

### vuex3

更加细致的拆分vuex文件，使其模块化
demo内容为在一个组件中引入两个（store1和store2）vuex模块
其中store1和store2的变量名称、方法名故意起的完全一样

***
### 遇到的问题

再映射mutations时使用 ...mapGetters([{getState:'STATE_GET'}, 'NUB_GET', 'INFO_GET']) 这种写法时{}中的方法【有时候】会报错
说找不到 getState 不是一个function；而$store上解析出来是[object object]  
【具体报的啥的记不清了，总之 {}中的内容能挂到$store，但是解析不出来

问题暂未解决，替代方案为

...mapGetters(['STATE_GET','NUB_GET','INFO_GET']) 或
...mapGetters({getState:'STATE_GET',INFO_GET:'INFO_GET',NUB_GET:'NUB_GET'})
