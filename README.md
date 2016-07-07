# jQuery Select Utils

A collection of methods to handle HTML's SELECT elements.

[![Build Status](https://travis-ci.org/antoniom/jquery-select-utils.svg?branch=master)](https://travis-ci.org/antoniom/jquery-select-utils)

## Installation
```
bower install jquery-select-utils
```

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/antoniom/jquery-jquery-select-utils/master/dist/jquery.jquery-select-utils.min.js
[max]: https://raw.githubusercontent.com/antoniom/jquery-jquery-select-utils/master/dist/jquery.jquery-select-utils.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery-select-utils.min.js"></script>
<script>
  jQuery(function ($) {
  	// Empty a select list
    $('your-select-element').selectUtils('setEmpty');
    // Empty the list and leave a prompt
    $('your-select-element').selectUtils('setEmpty', 'default prompt'); 
    // Populate from an object list (the last argument stands for the prompt and is optional)
    $('your-select-element').selectUtils('populateFromObjectList', [{id: 1, name: "Name 1"}, {id: 2, name: "Name 2"}], 'id', 'name', 'Please Select');
    // Populate from an array. The array key is used for the lists value. The last argument is used in order to add an offset from the array's key.
    $('your-select-element').selectUtils('populateFromArray', ["DATA 1", "DATA 2", "DATA 3", "DATA 4"], 'Please Select', 1);

  });
</script>
```


## License

MIT © Antonis Balasas
