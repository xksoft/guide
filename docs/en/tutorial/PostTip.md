---
pageClass: tip-page
sidebarDepth: 2
---

# Posting Tutorial

The site's editor supports Markdown syntax and GitHub Flavored Markdown syntax,see also:[Mastering Markdown](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown) and [Markdown](https://daringfireball.net/projects/markdown/).

## Block Elements

### Headers

* Alternatively, on the line below the text, add any number of == characters for heading level 1 or -- characters for heading level 2.
```
Heading level 1
=========
Heading level 2
---------
```

Rendered Output：
<div>
    <p class="h1">Heading level 1<p>
    <p class="h2">Heading level 2</p>
</div>

* To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three (`<h3>`), use three number signs (e.g., ### My Header).

```
# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6
```

Rendered Output：

<div>
    <p class="h1">Heading level 1</p>
    <p class="h2">Heading level 2</p>
    <p class="h3">Heading level 3</p>
    <p class="h4">Heading level 4</p>
    <p class="h5">Heading level 5</p>
    <p class="h6">Heading level 6</p>
</div>

### Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text. You should not indent paragraphs with spaces or tabs.To create a line break (<br>), end a line with two or more spaces, and then type return.

### Blockquotes

To create a blockquote, add a `>` in front of a paragraph,Blockquotes can be nested. For example：
```
> Blockquotes
>> Nested Blockquotes
```
Output：
> Blockquotes
>> Nested Blockquotes

### Code Blocks

To create code blocks, indent every line of the block by at least four spaces or one tab. For example：

    void main(){
        printf("Hi！");
    }

Code highlighting：

    ```html
        <div>Syntax Highlighting</div>
    ```
    ```javascript
        var s = "JavaScript syntax highlighting";
        alert(s);
    ```
Output：
```html
    <div>Syntax Highlighting</div>
```

```javascript
    var s = "JavaScript syntax highlighting";
    alert(s);
```

### Lists

To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list. For example：

```
- First item
- Second item
- Third item
- Fourth item

* First item
* Second item
* Third item
* Fourth item

- First item
- Second item
- Third item
- Fourth item
```
Output：
* First item
* Second item
* Third item
* Fourth item

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one. For example：

```
1. First item
2. Second item
3. Third item
4. Fourth item
```

Output：
1. First item
2. Second item
3. Third item
4. Fourth item


### Horizontal Rules

To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.
```
* * *
***
*****
- - -
---------------------------------------
```
Output:
***

## Span Elements
### Code
* To denote a word or phrase as code, enclose it in tick marks (`). For example：
```
Use the `printf()` function.
```
Output:
Use the `printf()` function.

* If the word or phrase you want to denote as code includes one or more tick marks, you can escape it by enclosing the word or phrase in double tick marks (``). For example：

```
``There is a literal backtick (`) here.``
```
Output:
``There is a literal backtick (`) here.``


### Links
To create a link, enclose the link text in brackets (e.g., [www.xky.com]) and then follow it immediately with the URL in parentheses (e.g., (https://www.xky.com/)).You can optionally add a title for a link. This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in parentheses after the URL.

```
The official website is [www.xky.com](https://www.xky.com/)
```
Output：
The official website is [www.xky.com](https://www.xky.com/)

### Emphasis
You can add emphasis by making text bold or italic.

To add emphasis, add asterisks or underscores before and after a word or phrase. for example:

```
*Italic*，_Italic_
**Bold**，__Bold__
***Bold and Italic***,___Bold and Italic___
```
Output：

*Italic*，_Italic_
**Bold**，__Bold__
***Bold and Italic***,___Bold and Italic___

### Images

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses. for example:

```
![name](link)
![侠客.png](https://static.xky.com/topic/files/167_1540956831241.png)
```

![侠客.png](https://static.xky.com/topic/files/167_1540956831241.png)


## Miscellaneous

###  Backslash escapes

Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown’s formatting syntax. For example, if you wanted to surround a word with literal asterisks (instead of an HTML `<em>` tag), you can use backslashes before the asterisks, like this:

```
\*literal asterisks\*
```
Output：
\*literal asterisks\*

Markdown provides backslash escapes for the following characters:

```
\backslash
`tick mark
*asterisk
_underscore
{}curly braces
[]brackets
()parentheses
#pound sign
+plus sign
-minus sign (hyphen)
.dot
!exclamation mark
```

### Tables

To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column. You can optionally add pipes on either end of the table. For example：

```
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```
Output：

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right, or on both side of the hyphens within the header row. For example：

```
| left | center | right |
| :--- | :----: | ----: |
| aaaa | bbbbbb | ccccc |
| a    | b      | c     |
```
Output：

| left | center | right |
| :---- | :----: | ----: |
| aaaa | bbbbbb | ccccc |
| a    | b      | c     |