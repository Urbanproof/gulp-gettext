# gulp-gettext
This is a super simple alpha-state project I put together to be a part of my WordPress tooling. It ingests po-files, and outputs mo-files.

Contributions & issues welcome.

# Usage
Simply require the module, and pipe po-file through it.

## Example gulpfile.js
*If this example seems overly complicated or just plain weird, its a tiny piece of my personal WP tooling so the context here isn't right.*
```js
const mocompile = require( 'gulp-gettext' );

const yourThemePath = 'Whatever. Harcoded string, environment variable, you name it...';
const assets = {
	l18n: [
		{
			taskName: 'theme.l18n',
			input:    `${ yourThemePath }/languages/*.po`,
			output:   `${ yourThemePath }/languages/`,
        },
        // define any number of files
    ],
};

const localizationTasks = assets.l18n.map( asset => asset.taskName );
assets.l18n.forEach( asset => {
	gulp.task( asset.taskName, () => {
		return gulp.src( asset.input )
			.pipe( mocompile() )
			.pipe( gulp.dest( asset.output ) );
	} );
} );
gulp.task( 'localize', gulp.series( localizationTasks ) );
```
And just run it with `gulp localize`.
