# Jupyter themes

Modify CodeMirror's Color Syntax.

<img width="987" alt="preview1" src="https://cloud.githubusercontent.com/assets/1485056/14063819/abe2dc18-f3e2-11e5-94d9-978ec774156e.png">
<img width="989" alt="preview2" src="https://cloud.githubusercontent.com/assets/1485056/14063820/abfab572-f3e2-11e5-9fee-4b6be0fbc9bb.png">

This **_Jupyter_ Notebook Extension** let's you select the code syntax highlighting. The selected theme is stored in _notebooks config file_ so every time you open a notebook it will automatically load the theme you selected the last time.

### Installation:

```shell
# Create required directory in case (optional)
$ mkdir -p $(jupyter --data-dir)/nbextensions
$ cd $(jupyter --data-dir)/nbextensions
$ mkdir jupyter_themes && cd jupyter_themes
$ wget https://raw.githubusercontent.com/merqurio/jupyter_themes/master/theme_selector.js
# Activate the extension
$ jupyter nbextension enable jupyter_themes/theme_selector
```

### Usage:
Find your preferred theme and font at Cell's menu.

<img width="960" alt="screen shot 2016-03-27 at 06 09 53" src="https://cloud.githubusercontent.com/assets/1485056/14063821/ac094150-f3e2-11e5-9f6f-7861aaa69ec0.png">

-----
#### Changelog
###### NEW in 0.3.0
- Adds Font modification
- Adds line number toggle

###### NEW IN 0.2.0
- Uses CodeMirrors own api & themes



## License

The MIT License (MIT) | See LICENSE.md

Copyright (c) 2015, 2016 Gabi de Maeztu
