/**
 * Torbara Refraction Template for Joomla, exclusively on Envato Market: http://themeforest.net/user/torbara?ref=torbara
 * @encoding     UTF-8
 * @version      1.0
 * @copyright    Copyright (C) 2015 Torbara (http://torbara.com). All rights reserved.
 * @license      GNU General Public License version 2 or later, see http://www.gnu.org/licenses/gpl-2.0.html
 * @author       Vadim Kozhukhov (support@torbara.com)
 */


jQuery(function ($) {

    var config = $('html').data('config') || {};

    // Social buttons
    $('article[data-permalink]').socialButtons(config);

    UIkit.on('domready.uk.dom', function () {
        $('.tt-switcher').on('show.uk.switcher', function (event, index, item, slider) {
            setTimeout(function () {
                $(window).resize();
            }, 300);
        });
    });
    
    jQuery('.core-wrap li').click(function(){
        jQuery(this).addClass('tt-active').siblings().removeClass('tt-active');
    });
    
    function setBarHeight(dataElement, barElement, cssProperty, barPercent) {
        var listData = [];
        jQuery(dataElement).each(function () {
            listData.push(jQuery(this).html());
        });
        var listMax = Math.max.apply(Math, listData);
        jQuery(barElement).each(function (index) {
            jQuery(this).css(cssProperty, (listData[index] / listMax) * barPercent + "%");
        });
    }
    
    function unsetBarHeight(dataElement, barElement, cssProperty, barPercent) {
        var listData = [];
        jQuery(dataElement).each(function () {
            listData.push(jQuery(this).html());
        });
        var listMax = Math.max.apply(Math, listData);
        jQuery(barElement).each(function (index) {
            jQuery(this).css(cssProperty, "0%");
        });
    }
    
    jQuery('[data-uk-scrollspy]').on('init.uk.scrollspy', function () {
        setBarHeight(".why-us .item .digit span", ".why-us .item .digit .border", "height", 100);
    });
    
    jQuery('[data-uk-scrollspy]').on('inview.uk.scrollspy', function () {
        setBarHeight(".why-us .item .digit span", ".why-us .item .digit .border", "height", 100);
    });

    jQuery('[data-uk-scrollspy]').on('outview.uk.scrollspy', function () {
        unsetBarHeight(".why-us .item .digit span", ".why-us .item .digit .border", "height", 100);
    });
    
   
});



jQuery(window).load(function(){
    
    jQuery('.preloader').addClass('loaded');  
    setTimeout( function() {
        jQuery('.preloader').hide();
    }, 1000 );

});
