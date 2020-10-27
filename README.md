# vanilla-select [![npm version](https://badge.fury.io/js/vanilla-select.svg)](https://www.npmjs.com/package/vanilla-select)
A vanilla, lightweight (~2.5kb gzipped), configurable select box component. 

[Demo Page](https://vorotina.github.io/vanilla-select/)

## Advantages
* Lightweight
* No Dependencies
* Elegant API - inspiration taken from [React.Component](https://facebook.github.io/react/docs/react-component.html) 
* Fast search


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
<link rel="stylesheet" href="dist/vanilla-select.css">
<!-- Include JavaScript -->
<script src="/src/vanilla-select.js"></script>
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

```yarn install```

### Browsers
Edge 15+
Chrome 41+
FireFox 35+
Opera 28+
Safari 9+


### Gulp tasks
| Task                | Usage                                                        |
| ------------------- | ------------------------------------------------------------ |
| `yarn build`         | Build JS an CSS                                             |
| `yarn serve`         | Fire up local server for development                        |
| `yarn release`       | Bump a version                                              |

### Roadmap
* Keyboard navigation


## License
MIT License


