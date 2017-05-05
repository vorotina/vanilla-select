# vanilla-select
A vanilla, lightweight (~2.5kb gzipped), configurable select box component. 

[Demo Page](https://vorotina.github.io/vanilla-select/)

## Advantages
* Lightweight
* No jQuery dependency
* Elegant API - inspiration taken from [React.Component](https://facebook.github.io/react/docs/react-component.html) 

### Features
* Dropdown should show the font preview
* Font should update in the font face selected
* Dropdown should not exceed the limits of the screen
* Dropdown should always be on top of other elements in the editor (zIndex)
* Font select box has extended width
* Font dropdown menu opens to the top or the bottom
* Keyboard navigation
* Search


## Installation
With [NPM](https://www.npmjs.com/package/vanilla-select):
```zsh
npm install vanilla-select --save-dev
```

With [Bower](https://bower.io/):
```zsh
bower install vanilla-select --save-dev
```

Or include directly:

```html
<!-- Include CSS -->
<link rel="stylesheet" href="dist/vanilla-select.min.css">
<!-- Include JavaScript -->
<script src="/dist/vanilla-select.min.js"></script>
```
## Setup	

```js
  const source = [{
        icon: 'fa-font',
        value: 'Amatic SC'
    }];
  		
  const select = new Select({
            placeholder: 'Select Font',
            dataset: source,
            search: true,
            noResults: 'No results found',
            onSelected: item => callback(item)
        }).componentMount({
            el: document.querySelector('[ref="select"]')
        });
```

## Configuration 
| Option       | Definition |
| ------------ | ---------- |
| placeholder  | Type: String <br />Default: '' <br />Placeholder text |
| dataset      | Type: Array <br />Default: [] <br />Equivelant to the <option></option> element within a select   |
| search       | Type: Boolean <br />Default: false <br />Whether a user should be allowed to search |
| noResults    | Type: String <br />Default: '' <br />The text that is shown when search has returned no results |
| selected     | Type: Object <br />Default: null <br/>Default selected option 
| onSelected   | Arguments: item </br>Callback, invoked each time the item is selected, regardless if it changes the value 

## Development
To setup a local environment: clone this repo, navigate into it's directory in a terminal window and run the following command:

```npm install```

## Browser compatibility
vanilla-select is compiled using [Closure Compiler](https://developers.google.com/closure/compiler/) to enable support for [ES5 browsers](http://caniuse.com/#feat=es5). 

### Gulp tasks
| Task                | Usage                                                        |
| ------------------- | ------------------------------------------------------------ |
| `gulp build`         | Build JS an CSS                                              |
| `gulp serve`         | Fire up local server for development                         |

## License
MIT License


