/*! jquery-select-utils - v0.2.0 - 2016-07-07
* Copyright (c) 2016 Antonis Balasas; Licensed MIT */
(function( $ ) {

    function NotASelectElementException() {
        this.message = "This plugin can be applied only to SELECT elements";
        this.name = "NotASelectElementException";
        this.toString = function() {
            return this.message;
        };
    }

    var checkElementValidity = function(elem) {
        if ( ! elem.is("select")) {
            throw new NotASelectElementException();
        }
    };

    var getPromptArgument = function(prompt) {
        if ($.type(prompt) === 'string') {
            prompt = prompt;
        } else if ($.type(prompt) === 'boolean' && prompt) {
            prompt = "Please select";
        } else {
            prompt = null;
        }

        return prompt;
    };

    var getOffsetArgument = function(offset) {
        if ($.type(offset) === 'number') {
            offset = offset;
        } else {
            offset = 0;
        }

        return offset;
    };

    var methods = {
        setEmpty: function(defaultTxt) {
            $(this).find('option').remove().end();
            // force re-render (for chrome)
            $(this).parent().hide().show(0);

            if ($.type(defaultTxt) === 'string') {
                $(this).append($('<option>', { 
                    text : defaultTxt
                }));
            }

            return $(this);
        },
        populateFromObjectList: function(items, keyProp, valueProp, prompt) {

            var list = $(this);            
            prompt = getPromptArgument(prompt);
            
            $(this).selectUtils('setEmpty', prompt);
            
            $.each(items, function (i, item) {
                list.append($('<option>', { 
                    value: item[keyProp],
                    text: item[valueProp] 
                }));
            });

            return $(this);
        },
        populateFromArray: function(items, prompt, offset) {

            var list = $(this);
            prompt = getPromptArgument(prompt);
            
            $(this).selectUtils('setEmpty', prompt);

            offset = getOffsetArgument(offset);
            
            $.each(items, function (i, item) {
                list.append($('<option>', { 
                    value: (i + offset),
                    text: item 
                }));
            });

            return $(this);
        }
    };
 
    $.fn.selectUtils = function(methodOrOptions) {

        try {
            checkElementValidity($(this));
        } catch(e) {
            $.error( e );
            return;
        }

        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.listUtils' );
        }
    };
 

}( jQuery ));
