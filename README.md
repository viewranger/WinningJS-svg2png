## Usage

You'll want to have set up a Gruntfile for your project. Inside of it, you register and configure the task like so:

```js
grunt.loadNpmTasks("winningjs-svg2png");

grunt.initConfig({
    "winningjs-svg2png": ["images/**/*.svg"]
});
```

It will automatically create PNG images as siblings to the SVGs specified in the configuration. That is, if you have
a file at `images/foo.svg`, WinningJS-svg2png will create:

* `images/foo.svg.width-30.png`
* `images/foo.svg.width-60.png`
* `images/foo.svg.width-90.png`
* `images/foo.svg.width-500.png`
