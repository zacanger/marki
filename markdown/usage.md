#### Markdown


This is intended as a quick reference and showcase. For more complete info, see [John Gruber's original spec](http://daringfireball.net/projects/markdown/), the [Github-flavored Markdown info page](http://github.github.com/github-flavored-markdown/), or the [Markdown-Here Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).


# H1
## H2
### H3
#### H4
##### H5
###### H6

_Emphasis_ (*italics*).
__Strong__ (**bold**).
**Combined _emphasis and strong_**
__Combined emphasis and *strong*__
~~We done did this task, aww yiss.~~

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

* Unordered list can use asterisks
- Or minuses
+ Or pluses


###### Links

[I'm an inline-style link](https://www.google.com)
[I'm an inline-style link with title](https://www.google.com "Google's Homepage")
[I'm a reference-style link][Arbitrary case-insensitive reference text]
<http://www.example.com>

[arbitrary case-insensitive reference text]: https://www.mozilla.org

###### Code and Syntax Highlighting

Inline `code` only needs one backtick (grave accent); blocks of code take three:

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

###### Tables

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

###### Blockquotes

> Once upon a time a thing happened.
> It was pretty swell.

###### Horizontal Rule

---

Hyphens

***

Asterisks

___

Underscores


###### Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

Traditional markdown needs two spaces at the end of a line to start a newline (like so: `  `).
To switch back to that method, simply set `breaks` to `false` in the options near the bottom of `scripts/markdown.js`
