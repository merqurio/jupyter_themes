# Jupyter themes

75 syntax highlighting themes to choose from:

![ example image ](http://lh3.googleusercontent.com/7Oc3PuBnm79ES9bK65hX4tfNvYwpW5oSU_G1FwKGe6xDlsWUzirnedFBtXgdUjkKh0tePzvG6W3sHfmucZWZiKScqQ=s1600)

## Notebook theme selector

This is a Jupyter notebook extension to select a CSS file for code syntax highlighting. The selected theme is stored in the browsers local storage so every time you open a notebook it will automatically load the theme you selected the last time.

Installation:

    $ cd jupyter_themes
    $ cp -r **  $(ipython locate)/nbextensions/
    $ nano $(ipython locate)/profile_default/static/custom/custom.js

Add the following code at the end of your `custom.js` and you are done.

```javascript
if (Jupyter) {
  $(Jupyter.events).on("app_initialized.NotebookApp", function() {

    var utils = require("base/js/utils");
    utils.load_extensions('theme_selector');
  });
} else {
  $([IPython.events]).on("app_initialized.NotebookApp", function() {
    IPython.load_extensions('theme_selector');
  });
}
```

Syntax highlighting was built using [base-16 builder](https://github.com/chriskempson/base16-builder).

## License

The MIT License (MIT)

Copyright (c) 2015 Gabi de Maeztu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
