# Jupyter themes

Modify CodeMirror's Color Syntax.
**NEW IN 0.2** -> Uses CodeMirrors own api & themes

![ example image ](http://postimg.org/image/pj4yu1vyx/)

## Notebook theme selector

This is a Jupyter notebook extension to select code syntax highlighting. The selected theme is stored in Jupyter notebooks config file so every time you open a notebook it will automatically load the theme you selected the last time.

Installation:

    # Create required directory in case (optional)
    $ mkdir -p $(jupyter --data-dir)/nbextensions
    $ cd $(jupyter --data-dir)/nbextensions
    $ mkdir jupyter_themes && cd jupyter_themes
    $ wget https://raw.githubusercontent.com/merqurio/jupyter_themes/master/theme_selector.js
    # Activate the extension
    $ jupyter nbextension enable jupyter_themes/theme_selector

## License

The MIT License (MIT)

Copyright (c) 2015, 2016 Gabi de Maeztu

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
