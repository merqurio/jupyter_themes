/*
 *
 * @author    Gabriel de Maeztu <gabriel.maeztu@gmail.com>
 * @version   2.0.0
 * @license   MIT license
 * @see       http://github.com/merqurio/jupyter_themes
 * @copyright 2015-2016, Gabriel de Maeztu, http://merqur.io
 *
 */

 define([
   'require',
   'jquery',
   'base/js/namespace'
 ], function(require, $, Jupyter) {
   'use strict';

    var themes = {
      "3024-day": "/static/components/codemirror/theme/3024-day.css",
      "3024-night": "/static/components/codemirror/theme/3024-night.css",
      "ambiance-mobile": "/static/components/codemirror/theme/ambiance-mobile.css",
      "ambiance": "/static/components/codemirror/theme/ambiance.css",
      "base16-dark": "/static/components/codemirror/theme/base16-dark.css",
      "base16-light": "/static/components/codemirror/theme/base16-light.css",
      "blackboard": "/static/components/codemirror/theme/blackboard.css",
      "cobalt": "/static/components/codemirror/theme/cobalt.css",
      "colorforth": "/static/components/codemirror/theme/colorforth.css",
      "dracula": "/static/components/codemirror/theme/dracula.css",
      "eclipse": "/static/components/codemirror/theme/eclipse.css",
      "elegant": "/static/components/codemirror/theme/elegant.css",
      "erlang-dark": "/static/components/codemirror/theme/erlang-dark.css",
      "icecoder": "/static/components/codemirror/theme/icecoder.css",
      "lesser-dark": "/static/components/codemirror/theme/lesser-dark.css",
      "liquibyte": "/static/components/codemirror/theme/liquibyte.css",
      "material": "/static/components/codemirror/theme/material.css",
      "mbo": "/static/components/codemirror/theme/mbo.css",
      "mdn-like": "/static/components/codemirror/theme/mdn-like.css",
      "midnight": "/static/components/codemirror/theme/midnight.css",
      "monokai": "/static/components/codemirror/theme/monokai.css",
      "neat": "/static/components/codemirror/theme/neat.css",
      "neo": "/static/components/codemirror/theme/neo.css",
      "night": "/static/components/codemirror/theme/night.css",
      "paraiso-dark": "/static/components/codemirror/theme/paraiso-dark.css",
      "paraiso-light": "/static/components/codemirror/theme/paraiso-light.css",
      "pastel-on-dark": "/static/components/codemirror/theme/pastel-on-dark.css",
      "rubyblue": "/static/components/codemirror/theme/rubyblue.css",
      "seti": "/static/components/codemirror/theme/seti.css",
      "solarized": "/static/components/codemirror/theme/solarized.css",
      "the-matrix": "/static/components/codemirror/theme/the-matrix.css",
      "tomorrow-night-bright": "/static/components/codemirror/theme/tomorrow-night-bright.css",
      "tomorrow-night-eighties": "/static/components/codemirror/theme/tomorrow-night-eighties.css",
      "ttcn": "/static/components/codemirror/theme/ttcn.css",
      "twilight": "/static/components/codemirror/theme/twilight.css",
      "vibrant-ink": "/static/components/codemirror/theme/vibrant-ink.css",
      "xq-dark": "/static/components/codemirror/theme/xq-dark.css",
      "xq-light": "/static/components/codemirror/theme/xq-light.css",
      "yeti": "/static/components/codemirror/theme/yeti.css",
      "zenburn": "/static/components/codemirror/theme/zenburn.css"
    },
      cells = Jupyter.notebook.get_cells(),
      code_cell;

    function add_to_toolbar(current_theme) {

        var cell_menu = $('#cell_menu'),
        	divider = $('<li/>').addClass('divider'),
        	theme_btn = $('<li/>').addClass('dropdown-submenu'),
          theme_txt = $('<a/>').text('Cell Syntax Theme').attr('href', '#'),
          theme_list = $('<ul/>').addClass('dropdown-menu').attr('id', 'theme_select');

        // Add label to the toolbar
        cell_menu.append(divider).append(theme_btn.append(theme_txt).append(theme_list));

        // Add themes to the selector
        for (var key in themes){
            theme_list.append($('<li/>').append($('<a/>').text(key).attr('href', '#').attr('data-value', key)));
        }

        theme_list.click(
          function(e){
            e.preventDefault;
            if (e.target.tagName === "A"){
                theme_toggle($(e.target).data("value"));
            }
          }
        );

    }

    function load_css(theme) {
        // Create a link element to attach the styles
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = require.toUrl(themes[theme]);
        link.id = theme + "-css";
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    function theme_toggle(new_theme) {

    		load_css(new_theme);
        var config = code_cell.config;
        var patch = {CodeCell:{cm_config:{theme: new_theme}}}
        config.update(patch);
        code_cell.code_mirror.setOption('theme', new_theme);
    }

    function load_ipython_extension() {

        for (var i = 0; i < cells.length; i++){
          if(cells[i].cell_type == "code"){
            code_cell = cells[i];
            break;
          }
        }

        add_to_toolbar();
        load_css(code_cell.config.data.CodeCell.cm_config.theme);

    }

    return { load_ipython_extension: load_ipython_extension };

});
