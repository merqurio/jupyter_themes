# Jupyter themes

## Notebook theme selector

It's a Jupyter notebook extension to select CSS themes. The selected theme is stored in the browsers local storage so when opening a notebook it will automatically load the theme you selected the las time.

Installation:

    $ curl -L XXXXX/master/theme_selector.js > $(ipython locate)/nbextensions/theme_selector.js
    $ wget -r --no-parent  XXXX/themes > $(ipython locate)/nbextensions/themes

Then, load it with the following code in your `custom.js`:

```javascript
$([IPython.events]).on("app_initialized.NotebookApp", function () {
    IPython.load_extensions('theme_toggle');
});
```

Themes where built using [base-15 builder](https://github.com/chriskempson/base16-builder).

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
