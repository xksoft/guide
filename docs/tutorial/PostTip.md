---
pageClass: tip-page
sidebarDepth: 2
---

# 发帖教程

本站的编辑器支持markdown和GitHub Flavored Markdown语法，更多的语法请参考[Mastering Markdown](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown)和[Markdown官网](https://daringfireball.net/projects/markdown/)！

## 块级元素

### 标题
  
* 使用 `=` 和 `-` 标记一级和二级标题。
```
一级标题   
=========
二级标题  
---------
```

效果：
<div>
    <p class="h1">一级标题<p>
    <p class="h2">二级标题</p>
</div>

* 使用`#`，可表示1-6级标题。
```
# 一级标题   
## 二级标题   
### 三级标题   
#### 四级标题   
##### 五级标题   
###### 六级标题  
```  

效果：

<div>
    <p class="h1">一级标题<p>
    <p class="h2">二级标题</p>
    <p class="h3">三级标题</p>
    <p class="h4">四级标题</p>
    <p class="h5">五级标题</p>
    <p class="h6">六级标题</p>
</div>          

### 段落

段落的前后要有空行，所谓的空行是指没有文字内容。若想在段内强制换行的方式是使用两个以上空格加上回车（引用中换行省略回车）。

### 区块引用

在段落的每行或者只在第一行使用符号`>`,还可使用多个嵌套引用，如：
```
> 区块引用
>> 嵌套引用    
```
效果：
> 区块引用  
>> 嵌套引用

### 代码区块

代码区块的建立是在每行加上4个空格或者一个制表符（如同写代码一样）。如    
普通段落：

void main(){    
    printf("欢迎来到侠客！");    
}    

代码区块：

    void main(){
        printf("欢迎来到侠客！");
    }

注意:需要和普通段落之间存在空行。

代码高亮：    

    ```html
        <div>Syntax Highlighting</div>
    ```
    ```javascript
        var s = "JavaScript syntax highlighting";
        alert(s);
    ```
效果：
```html
    <div>Syntax Highlighting</div>
```

```javascript
    var s = "JavaScript syntax highlighting";
    alert(s);
```

### 列表

使用`·`、`+`、或`-`标记无序列表，如：
```
* 无序列表
* 子项
* 子项
 
+ 无序列表
+ 子项
+ 子项
 
- 无序列表
- 子项
- 子项
```
效果：
* 无序列表
* 子项
* 子项

有序列表的标记方式是将上述的符号换成数字,并辅以`.`，如：
```
1. 第一行
2. 第二行
3. 第三行
```

效果：
1. 第一行
2. 第二行
3. 第三行

注意：标记后面最少有一个_空格_或_制表符_。若不在引用区块中，必须和前方段落之间存在空行。


### 分割线
分割线可以使用是三个或以上`*` ,`-`和`_`,可以在星号或是减号中间插入空格。
```
* * *
***
*****
- - -
---------------------------------------
```
## 行内元素
### 代码
* 如果要标记一小段行内代码，你可以用反引号把它包起来 `` ` `` ,例
``` 
Use the `printf()` function.
```
效果:
Use the `printf()` function.

* 如果要在代码区段内插入反引号，你可以用多个反引号来开启和结束代码区段,例:
```
``There is a literal backtick (`) here.``
```
效果:
``There is a literal backtick (`) here.``


### 链接
```
[侠客云官网](https://www.xky.com/)
```
效果：
[侠客云官网](https://www.xky.com/)

### 强调

在强调内容两侧分别加上`*`或者`_`，如
```
*斜体*，_斜体
**粗体**，__粗体__
***粗斜体***,___粗斜体___
```
效果：

*斜体*,_斜体_    
**粗体**,__粗体__  
***粗斜体***,___粗斜体___  

### 图片

```
![名字](图片链接)
![侠客.png](https://static.xky.com/topic/files/167_1540956831241.png)
```

![侠客.png](https://static.xky.com/topic/files/167_1540956831241.png)


## 其他

### 反斜杠转义

相当于**反转义**作用。使符号成为普通符号
```
\*literal asterisks\*
```
效果：
\*literal asterisks\*

Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：
```
\反斜杠  
`反引号  
*星号  
_下划线  
{}花括号  
[]方括号  
()括弧  
#井字号  
+加号  
-减号  
.英文句 
!感叹号
```  

### 表格  

使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行，如：  
```
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```  
效果：  

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column  

在表头下方的分隔线标记中加入 :，即可标记下方单元格内容的对齐方式：  
+  :----- 代表左对齐
+  :----: 代表居中对齐
+  -----: 代表右对齐  

如：  

```
| left | center | right |
| :--- | :----: | ----: |
| aaaa | bbbbbb | ccccc |
| a    | b      | c     |
```  
效果：  

| left | center | right |
| :---- | :----: | ----: |
| aaaa | bbbbbb | ccccc |
| a    | b      | c     |