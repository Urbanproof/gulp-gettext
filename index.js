const through = require( 'through2' );
const { po: { parse }, mo: { compile } } = require( 'gettext-parser' );

module.exports = () => {
	return through.obj( ( file, encoding, callback ) => {
		if ( file.isNull() ) {
			return callback( null, file );
		}
		file.contents = compile( parse( file.contents ) );
		file.extname = '.mo';
		callback( null, file );
	  } );
}
