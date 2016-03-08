# angular-ui-container
An angular ui-container directive.

The main purpose of the directive is to space out the main content.
The directive extends the angular material framework.  


## How can i use it?

In the main angular app include the `ui.directive` as a dependency.

```javascript
 angular.module('app', [
            ...
            'ngMaterial',
            'ui.container'
        ])
```


Than you can use the directive as follow.

```html

<div layout="row">

	<ui-container>
		<h1>Some Title</h1>

		<div layout="row">
			<!-- you main content -->
		</div>

	</ui-container>
	
</div>
```

## Configure

In the configure phase of your main angular app you can inject the `$uiContainerDirective` to configure the flex 
width and the brakepoint.

```javascript
    .config(function($uiContainerProvider) {
            $uiContainerProvider.setUiFlex(20);
            $uiContainerProvider.setUiShowOn('gt-sm');
        })
```

The default flex width is `20` and the brakepoint is set to `gt-sm`. 

The Breakpoints are uses the material design breakpoint.
See the [Angular Material](https://material.angularjs.org/latest/layout/introduction) documentation for more information.


