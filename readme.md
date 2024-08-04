<div align="center">
	<img alt="LesliCSS logo" width="200px" src="./docs/lesli-css-logo.svg" />
	<h3>SCSS Utilities for websites and web applications</h3>
</div>

<hr/>

<p align="center" class="is-flex is-justify-content-center">
    <a target="blank" href="https://www.npmjs.com/package/lesli-css">
        <img height="22" alt="NPM Version" src="https://img.shields.io/npm/v/lesli-css" />
    </a>
	<a class="mx-2" href="https://codecov.io/gh/LesliTech/lesli-css" > 
		<img height="22" src="https://codecov.io/gh/LesliTech/lesli-css/graph/badge.svg?token=WYB6XTWZWN"/> 
	</a>
	<a href="https://codecov.io/github/LesliTech/lesli-css"> 
        <img height="22" src="https://sonarcloud.io/api/project_badges/measure?project=LesliTech_lesli-css&metric=sqale_rating"/> 
    </a>
</p>


#### Installation
--------
```console
npm install lesli-css --save
```


#### Structure
--------
```text
lesli-css  
├── source/  
│    ├── components/  
│    │    ├── blockquote.scss  
│    │    ├── columns.scss  
│    │    ├── container.scss  
│    │    └── navigation.scss  
│    ├── functions/  
│    │    └── colors.scss  
│    ├── helpers/  
│    │    └── units.scss  
│    ├── mixins/  
│    │    ├── breakpoint.scss  
│    │    ├── flex.scss  
│    │    ├── fonts.scss  
│    │    ├── normalize.scss  
│    │    └── scrollbar.scss  
│    ├── settings/  
│    │    └── variables.scss  
│    └── vendor/  
│         └── bulma.scss  
├── tests  
└── vendor  
```


#### Usage
--------
```scss

// Import the library
@import "lesli-css";


// Include your custom fonts for titles and body
@include lesli-css-fonts-standard("Domine", "OpenSans");


// Work with the color pallete
.test {
	color: lesli-css-color(blue);
	color: lesli-css-color(blue, 100);
	color: lesli-css-color(blue, 300);
	color: lesli-css-color(blue, 500); // default
	color: lesli-css-color(blue, 700);
	color: lesli-css-color(blue, 900);
}


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
