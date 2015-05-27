/*
 *  // Theme selector
 *  // Select your favorite code coloring
 */

define(["require"], function(require) {
    "use strict";

    var themes = {
        Default: "./themes/theme_default.css",
        _3024_Dark : "./themes/base16-3024-dark.css",
        _3024_Light : "./themes/base16-3024-light.css",
        Apathy_Dark : "./themes/base16-apathy-dark.css",
        Apathy_Light : "./themes/base16-apathy-light.css",
        Ashes_Dark : "./themes/base16-ashes-dark.css",
        Ashes_Light : "./themes/base16-ashes-light.css",
        Atelierdune_Dark : "./themes/base16-atelierdune-dark.css",
        Atelierdune_Light : "./themes/base16-atelierdune-light.css",
        Atelierforest_Dark : "./themes/base16-atelierforest-dark.css",
        Atelierforest_Light : "./themes/base16-atelierforest-light.css",
        Atelierheath_Dark : "./themes/base16-atelierheath-dark.css",
        Atelierheath_Light : "./themes/base16-atelierheath-light.css",
        Atelierlakeside_Dark : "./themes/base16-atelierlakeside-dark.css",
        Atelierlakeside_Light : "./themes/base16-atelierlakeside-light.css",
        Atelierseaside_Dark : "./themes/base16-atelierseaside-dark.css",
        Atelierseaside_Light : "./themes/base16-atelierseaside-light.css",
        Bespin_Dark : "./themes/base16-bespin-dark.css",
        Bespin_Light : "./themes/base16-bespin-light.css",
        Brewer_Dark : "./themes/base16-brewer-dark.css",
        Brewer_Light : "./themes/base16-brewer-light.css",
        Bright_Dark : "./themes/base16-bright-dark.css",
        Bright_Light : "./themes/base16-bright-light.css",
        Chalk_Dark : "./themes/base16-chalk-dark.css",
        Chalk_Light : "./themes/base16-chalk-light.css",
        Codeschool_Dark : "./themes/base16-codeschool-dark.css",
        Codeschool_Light : "./themes/base16-codeschool-light.css",
        Colors_Dark : "./themes/base16-colors-dark.css",
        Colors_Light : "./themes/base16-colors-light.css",
        Default_Dark : "./themes/base16-default-dark.css",
        Default_Light : "./themes/base16-default-light.css",
        Eighties_Dark : "./themes/base16-eighties-dark.css",
        Eighties_Light : "./themes/base16-eighties-light.css",
        Embers_Dark : "./themes/base16-embers-dark.css",
        Embers_Light : "./themes/base16-embers-light.css",
        Flat_Dark : "./themes/base16-flat-dark.css",
        Flat_Light : "./themes/base16-flat-light.css",
        Google_Dark : "./themes/base16-google-dark.css",
        Google_Light : "./themes/base16-google-light.css",
        Grayscale_Dark : "./themes/base16-grayscale-dark.css",
        Grayscale_Light : "./themes/base16-grayscale-light.css",
        Greenscreen_Dark : "./themes/base16-greenscreen-dark.css",
        Greenscreen_Light : "./themes/base16-greenscreen-light.css",
        Harmonic16_Dark : "./themes/base16-harmonic16-dark.css",
        Harmonic16_Light : "./themes/base16-harmonic16-light.css",
        Hopscotch_Dark : "./themes/base16-hopscotch-dark.css",
        Hopscotch_Light : "./themes/base16-hopscotch-light.css",
        Isotope_Dark : "./themes/base16-isotope-dark.css",
        Isotope_Light : "./themes/base16-isotope-light.css",
        Londontube_Dark : "./themes/base16-londontube-dark.css",
        Londontube_Light : "./themes/base16-londontube-light.css",
        Marrakesh_Dark : "./themes/base16-marrakesh-dark.css",
        Marrakesh_Light : "./themes/base16-marrakesh-light.css",
        Mocha_Dark : "./themes/base16-mocha-dark.css",
        Mocha_Light : "./themes/base16-mocha-light.css",
        Monokai_Dark : "./themes/base16-monokai-dark.css",
        Monokai_Light : "./themes/base16-monokai-light.css",
        Ocean_Dark : "./themes/base16-ocean-dark.css",
        Ocean_Light : "./themes/base16-ocean-light.css",
        Paraiso_Dark : "./themes/base16-paraiso-dark.css",
        Paraiso_Light : "./themes/base16-paraiso-light.css",
        Pop_Dark : "./themes/base16-pop-dark.css",
        Pop_Light : "./themes/base16-pop-light.css",
        Railscasts_Dark : "./themes/base16-railscasts-dark.css",
        Railscasts_Light : "./themes/base16-railscasts-light.css",
        Shapeshifter_Dark : "./themes/base16-shapeshifter-dark.css",
        Shapeshifter_Light : "./themes/base16-shapeshifter-light.css",
        Solarized_Dark : "./themes/base16-solarized-dark.css",
        Solarized_Light : "./themes/base16-solarized-light.css",
        Summerfruit_Dark : "./themes/base16-summerfruit-dark.css",
        Summerfruit_Light : "./themes/base16-summerfruit-light.css",
        Tomorrow_Dark : "./themes/base16-tomorrow-dark.css",
        Tomorrow_Light : "./themes/base16-tomorrow-light.css",
        Twilight_Dark : "./themes/base16-twilight-dark.css",
        Twilight_Light : "./themes/base16-twilight-light.css",
    };


    function add_to_toolbar(current_theme) {

        var ipython_toolbar = $(IPython.toolbar.element),
        	label = $('<span/>').addClass("navbar-text permissions-list").text('Theme:'),
        	select = $('<select/>').attr('id', 'permissions-select').attr('class', 'permissions-list form-control select-xs');

        // Add label to the toolbar
        ipython_toolbar.append(label).append(select);

        // Add themes to the selector
        for (var key in themes){
            select.append($('<option/>').attr('value', key).text(key));
        }

        // If actually a theme, select it
        if (current_theme){
            select.val(current_theme);
        }

        // Add an action when value is changed
        select.change( function(){
            theme_toggle($(this).val());
        });

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

    function unload_css(theme) {

        // Select the theme to unload and remove the link node
        var css = document.getElementById(theme + "-css");
        css.parentNode.removeChild(css);
    }


    function theme_toggle(new_theme) {
    	
        var current_theme = window.localStorage.getItem('nb-theme');

        // Check if there is a theme actually loaded
        if (current_theme) {
            unload_css(current_theme);
        }

		load_css(new_theme);
        window.localStorage.setItem('nb-theme', new_theme);
    }

    function load_theme_selector() {
        
        var current_theme = window.localStorage.getItem('nb-theme');

        add_to_toolbar(current_theme);

        if (current_theme) {
            load_css(current_theme);
        }
                
    }

    return {
        load_ipython_extension: load_theme_selector
    };

});
