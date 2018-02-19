/*
 *
 * @author    Gabriel de Maeztu <gabriel.maeztu@gmail.com>
 * @version   2.0.1
 * @license   MIT license
 * @see       http://github.com/merqurio/jupyter_themes
 * @copyright 2015-2016-2017-2018, Gabriel de Maeztu, http://merqur.io
 *
 */

 define([
   'require',
   'jquery',
   'base/js/namespace'
 ], function(require, $, Jupyter) {
   'use strict';

    var themes = {
      "Default": null,
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
    };

    var fonts = {
      "Default": {
        "css": "monospace",
        "url": null
      },
      "Hack": {
        "css": "Hack",
        "url": "//cdn.jsdelivr.net/font-hack/2.019/css/hack-extended.min.css"
      },
      "Inconsolata": {
        "css": "Inconsolata",
        "url": "//fonts.googleapis.com/css?family=Inconsolata"
      },
      "Source Code Pro": {
        "css": "Source Code Pro",
        "url": "//fonts.googleapis.com/css?family=Source+Code+Pro"
      },
      "Roboto Mono": {
        "css": "Roboto Mono",
        "url": "//fonts.googleapis.com/css?family=Roboto+Mono"
      },
      "Droid Sans Mono": {
        "css": "Droid Sans Mono",
        "url": "//fonts.googleapis.com/css?family=Droid+Sans+Mono"
      },
      "Ubuntu Mono": {
        "css": "Ubuntu Mono",
        "url": "//fonts.googleapis.com/css?family=Ubuntu+Mono"
      },
      "PT Mono": {
        "css": "PT Mono",
        "url": "//fonts.googleapis.com/css?family=PT+Mono"
      },
      "Fira Mono":{
        "css": "Fira Mono",
        "url": "//fonts.googleapis.com/css?family=Fira+Mono"
      }
    };

    var CELLS, CODE_CELL;


    function add_to_toolbar(current_theme) {

        var cell_menu = $('#cell_menu'),
          divider = $('<li/>').addClass('divider'),
          theme_btn = $('<li/>').addClass('dropdown-submenu'),
          theme_txt = $('<a/>').text('Code Syntax Theme').attr('href', '#'),
          theme_list = $('<ul/>').addClass('dropdown-menu').attr('id', 'theme_select'),
          font_btn = $('<li/>').addClass('dropdown-submenu'),
          font_txt = $('<a/>').text('Code Font').attr('href', '#'),
          font_list = $('<ul/>').addClass('dropdown-menu').attr('id', 'font_select'),
          line_btn = $('<li/>'),
          line_txt = $('<a/>').text('Code Line Numbers').attr('href', '#');

        // Add label to the toolbar
        cell_menu
          .append(divider)
          .append(theme_btn.append(theme_txt).append(theme_list))
          .append(font_btn.append(font_txt).append(font_list))
          .append(line_btn.append(line_txt));

        // Add themes to the selector
        for (var key in themes){
            theme_list.append(
              $('<li/>').append(
                $('<a/>').text(key)
                  .attr('href', '#')
                  .attr('data-value', key)
              )
            );
        }

        theme_list.click(
          function(e){
            e.preventDefault;
            if (e.target.tagName === "A"){
                theme_toggle($(e.target).data("value"));
            }
          }
        );

        // Add fonts to the selector
        for (var key in fonts){
            font_list.append(
              $('<li/>').append(
                $('<a/>').text(key)
                  .attr('href', '#')
                  .attr('data-key', key)
                  .attr('data-css', fonts[key].css)
                  .attr('data-url', fonts[key].url)
              )
            );
        }

        font_list.click(
          function(e){
            e.preventDefault;
            if (e.target.tagName === "A"){
                font_toggle(
                  $(e.target).data("key"),
                  $(e.target).data("css"),
                  $(e.target).data("url")
                );
            }
          }
        );

        // Toggle line numbers
        line_txt.click(
          function(e){
            e.preventDefault;

            var opt = CODE_CELL.config.data.CodeCell.cm_config.lineNumbers;
            var config = CODE_CELL.config;
            var patch = {
              CodeCell:{
                cm_config:{
                  lineNumbers: !opt
                }
              }
            }
            config.update(patch);

            for (var i = 0; i < CELLS.length; i++){
              if(CELLS[i].cell_type == "code"){
                CELLS[i].code_mirror.setOption('lineNumbers', !opt);
              }
            }

          }
        );

    }

    function load_css(theme) {
        // Create a link element to attach the styles
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = window.location.origin + require.toUrl(themes[theme]);
        link.id = theme + "-css";
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    function load_font(href) {
      // Create a link element to attach the font
      var link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = href;
      document.getElementsByTagName("head")[0].appendChild(link);
    }

    function css_toggle(font) {

      var style = document.getElementById("font-css");

      if (!style){
        // Create a style element
        var style = document.createElement("style");
        style.type = "text/css";
        style.id = "font-css"
        document.head.appendChild(style);
      }

      style.innerText = ".CodeMirror {font-family: z;}".replace("z", font);

    }

    function theme_toggle(new_theme) {

      new_theme = (new_theme === "Default")? "ipython" : new_theme;

      if(new_theme !== "ipython") load_css(new_theme);

      var config = CODE_CELL.config;
      var patch = {
        CodeCell:{
          cm_config:{
            theme: new_theme
          }
        }
      }
      config.update(patch);

      for (var i = 0; i < CELLS.length; i++){
        if(CELLS[i].cell_type == "code"){
          CELLS[i].code_mirror.setOption('theme', new_theme);
        }
      }

    }

    function font_toggle(key, css, url) {

      var config = CODE_CELL.config;
      var patch = {
        CodeCell:{
          cm_config:{
            font_family: key
          }
        }
      }
      config.update(patch);

      if (key !== "default") {
        load_font(url);
      }

      css_toggle(css);

    }


    function load_cells() {

        for (var i = 0; i < CELLS.length; i++){
          if(CELLS[i].cell_type == "code"){
            CODE_CELL = CELLS[i];
            break;
          }
        }

        try {
          var theme = CODE_CELL.config.data.CodeCell.cm_config.theme;
          var key = CODE_CELL.config.data.CodeCell.cm_config.font_family;

          load_css(theme);

          if (key !== "default") {
            load_font(fonts[key].url);
            css_toggle(fonts[key].css);
          }
        }
        catch(error) {
          console.log(error);
        }

        add_to_toolbar();
    }


    function load_ipython_extension() {

        CELLS = Jupyter.notebook.get_cells();

        if (CELLS.length < 1) {
            setTimeout(function(){
                load_ipython_extension();
            },250);
        }
        else {
            load_cells()
        }

    }

    return { load_ipython_extension: load_ipython_extension };

});
