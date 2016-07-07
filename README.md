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
    $('your-select-element').selectUtils('setEmpty'); // To empty a select list
    $('your-select-element').selectUtils('setEmpty', 'default prompt'); // To empty the list and leave a prompt
    $('your-select-element').selectUtils('populateFromObjectList', [{id: 1, name: "Name 1"}, {id: 2, name: "Name 2"}], 'id', 'name', 'Please Select'); // to populate from an object list (the last argument stands for the prompt and is optional)
  });
</script>
```


## License

MIT © Antonis Balasas
