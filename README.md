# vanilla-select.js 
A vanilla, lightweight (~2.5kb gzipped), configurable select box component. 

[Demo](https://jsfiddle.net/5y2stLn6/)

## TL;DR
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
            onSelected: item => callback(item)
        }).componentMount({
            el: document.querySelector('[ref="select"]')
        });
```

## Development
To setup a local environment: clone this repo, navigate into it's directory in a terminal window and run the following command:

```npm install```

### Gulp tasks
| Task                | Usage                                                        |
| ------------------- | ------------------------------------------------------------ |
| `gulp build`         | Build JS an CSS                                              |
| `gulp serve`         | Fire up local server for development                         |

## License
MIT License


