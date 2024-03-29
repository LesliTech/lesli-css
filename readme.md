<p align="center">
	<a href="#" target="_blank">
		<img alt="LesliCSS logo" width="200px" src="./lesli-css-logo.svg" />
	</a>
</p>

<h3 align="center">SCSS Utilities for websites and web applications</h3>

<hr/>

Version 1.5.0


#### Installation
--------
```console
npm install lesli-css --save
```


#### Structure
--------
```text
lesli-css  
├── src/  
│    ├── base/  
│    │    ├── fonts.scss  
│    │    └── normalize.scss  
│    ├── components/  
│    │    ├── blockquote.scss  
│    │    ├── columns.scss  
│    │    ├── container.scss  
│    │    └── navigation.scss  
│    ├── functions/  
│    │    └── colors.scss  
│    ├── mixins/  
│    │    ├── breakpoint.scss  
│    │    ├── flex.scss  
│    │    └── scrollbar.scss  
│    └── settings/  
│         └── variables.scss  
├── tests  
└── vendor  
```


#### Usage
--------
```scss

@import "lesli-css";


// Initialize your styles
@include lesli-css-normalize;

// Include Montserrat and Open Sans fonts from google
@include lesli-css-fonts-standard;


// Work with the color pallete
.test {
	color: lesli-css-color(blue);
	color: lesli-css-color(blue, 100);
	color: lesli-css-color(blue, 300);
	color: lesli-css-color(blue, 500); // default
	color: lesli-css-color(blue, 700);
	color: lesli-css-color(blue, 900);

}

// Standard font configuration
@include lesli-css-fonts-standard()

// Standarize html elements to Lesli standards
@include lesli-css-normalize()

// Breakpoints
@include lesli-css-breakpoint("small") {
	// your code
}

@include lesli-css-breakpoint-only("mobile") {
	// styles for min-width: 320px and max-width: 768px only
}

@include lesli-css-breakpoint-custom(100px) {
	// styles start at 100px
}

@include lesli-css-breakpoint-custom(200px, 300px) {
	// styles for min-width: 200px and max-width: 300px only
}


// customize the scrollbar (if supported)
@include lesli-css-scrollbar()

```


### License  
------
Software developed in [Guatemala](http://visitguatemala.com/) distributed under the *General Public License v 3.0* you can read the full license [here](http://www.gnu.org/licenses/gpl-3.0.html)

<p align="center">
	<a href="https://www.lesli.tech" target="_blank">
		<img alt="LesliTech logo" width="150" src="https://cdn.lesli.tech/leslitech/brand/leslitech-logo.svg" />
	</a>
</p>






scss
	bulma
	components
	elements
	lesli
	
	
	
