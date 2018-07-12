# Portfolio Site

###### Project Overview

Project #1 of Udacity's [Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). The task was to replicate a design mockup in HTML and CSS and develop a responsive website that displays images, descriptions and links to each of the portfolio projects completed throughout the course of the Front-End Web Developer Nanodegree.

## Getting Started

###### Live

Point your browser to http://portfolio.mikejoyce.io

###### Local

###### 1. Clone this repo

```
$ git clone https://github.com/mikejoyceio/portfolio-site
````

###### 2. Serve the website

```
$ python -m SimpleHTTPServer
```

Detailed Python Simple Server instructions can been found [here](https://docs.python.org/2/library/basehttpserver.html).

###### 3. Open the website

```
$ open "http://localhost:8000"
```

## The Build

The [Gulp](http://gulpjs.com/) streaming build system is used in this project to minify, concatenate and move files to the appropriate directories. Build files have already been added to the repo and can be found in the [dist](dist) directory.

[Gulp Sass](https://www.npmjs.com/package/gulp-sass) and [Gulp Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) are used to generate cross-browser CSS.

If you would like to run the build yourself locally, you will need to:

###### Install Yarn

Yarn can be installed through the [Homebrew package manager](https://brew.sh/). This will also install [Node.js](https://nodejs.org/) (which is required) if it is not already installed.

Details installation instructions for all operating systems can be found [here](https://yarnpkg.com/en/docs/install)

To make sure you have Yarn installed, run the following command to check the version:

```
$ yarn -v
```

###### Install Dependencies

```
$ yarn install 
```

## Running the Build

[Gulp](http://gulpjs.com/) minifies, concatenates and moves files to the appropriate directories by utilizing pre-defined [tasks](https://github.com/gulpjs/gulp/blob/master/docs/CLI.md#tasks) which can be found in [gulpfile.js](gulpfile.js). The following commands need to be ran from the root of the project.

###### Gulp Tasks

```
$ gulp
```

Runs the default Gulp task in [gulpfile.js](gulpfile.js). 

```
$ gulp styles
```

Runs the styles task, which concatenates and minifies all of the [Sass](http://sass-lang.com/) partials in [source/sass](source/sass) and compiles to a single file ([app.css](dist/css/app.css)) in [dist/css](dist/css).

```
$ gulp scripts
```

Runs the scripts task, which concatenates and minifies all JavaScript files in [source/js](source/js) and compiles to a single file ([app.js](dist/js/app.js)) in [dist/js](dist/js).

###### Watch Task

```
$ gulp watch
```

Runs the watch task, which watches both the [source/sass](source/sass) and [source/js](source/js) directories for changes and runs their respective tasks.

###### Images Task

```
$ gulp images
```

Runs the images task in [gulpfile.js](gulpfile.js). Images in [source/images](source/images) will be optimized and moved to [dist/images](dist/images).

###### Fonts Task

```
$ gulp fonts
```

Runs the fonts task, which transfers the Font Awesome font files to [dist/fonts](dist/fonts).

## Resources

###### ZURB Foundation 

- [Foundation 5 Docs](https://foundation.zurb.com/sites/docs/v/5.5.3/)

###### Web Fonts

- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
- [Rubik](https://fonts.google.com/specimen/Rubik)

###### Icon Font

- [Font Awesome](https://fontawesome.com/v4.7.0/icons/)
- [CSS Tricks: Accessible Icon Fonts](http://css-tricks.com/html-for-icon-font-usage/)
