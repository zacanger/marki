### what's this, then?

i like [markdown](http://daringfireball.com/projects/markdown). i write [my blog](http://zacanger.com/blog) in it, and use it [in my email](http://markdown-here.com/). i use it to take notes. it's super handy for documentation. it makes long-form writing of any kind a much smoother, simpler process. markdown-specific editors have been described (not entirely inaccurately) as [an antipattern](https://honza.ca/2015/02/markdown-editors-are-an-anti-pattern), but given the wide range of markdown derivatives, plugins, and extensions in use--not to mention the complete lack of standardization of the original spec--it's sometimes helpful to see what one is working on in realtime.

there are likely thousands of decent markdown editors, a large majority of them available [for free](https://npmjs.com/search?q=markdown), including [source code](https://github.com/search?utf8=%E2%9C%93&q=markdown)… and [for multiple languages](https://pypi.python.org/pypi?%3Aaction=search&term=markdown+editor&submit=search). why not use one of those? i've used several. a lot of them are really great. none of them were what i was looking for.

**markvi** won't be for everyone. with a bit of hacking (and a crash course in vimscript) something could be worked up in vim itself. any one of a dozen popular IDEs and editors could be configured to preview markdown without much trouble. i put this one together because it satisfied _my_ need for a **no-config**, fast-as-heck, always-available-everywhere setup with keybinds that make manipulating large blocks of text easy and lightning-quick.

if you're not so much into the vi/vim way of life, simply removing or commmenting out the relevant lines (see the scripts directory) will make this
a plain old markdown editor. if you're an emacs heathen, i'm sure there's a mode for that. :)

--------

oh, by the way--i'm [zac](http://zacanger.com/me). i'm told i'm a _technology hipster_, but i'm okay with that. please feel free to check out [this project on github](https://github.com/zacanger/markvi), fork or clone away, use however you like; my own code is under the [wtfpl](http://www.wtfpl.net); please be respectful of the licenses of any dependencies.

--------

if you'd like to use **markvi** super quickly, just go ahead and `npm i -g markvi` and `npm run`; or, if bower's more your style, `bower install markvi`, `npm i .`, and then go ahead and spin it up!
