### 区别
区别在于子元素继承
- 父元素设置line-height:1.5会直接继承给子元素，子元素根据自己的font-size再去计算子元素自己的line-height。
- 父元素设置line-height:150%是计算好了line-height值，然后把这个计算值给子元素继承，子元素继承拿到的就是最终的值了。此时子元素设置font-size就对其line-height无影响了。

### 举例
比如父元素设置属性：font- size:14px;line-height:1.5,child设置font-size:26px;
那么父元素：line-height = 14px * 1.5 = 21px，子元素：line-height = 26px * 1.5 = 39px。

父元素设置属性：font-size:14px;line-height:150%,child设置font-size:26px;
那么父元素：line-height = 14px * 150% = 21px，子元素：line-height = 父元素的line-height = 21px。