##### Sample Chrome extension:


* Demonstration of the main [chrome extension packager script](https://github.com/scarrillo/ChromeExtensionPackage/).
* Demonstration of using the google chrome compiler to optimize, obfuscate, and concat javascript files. 

I've included the closure compiler.jar for completeness and so that I can reuse it quickly in new projects.
The sample starter project is setup to build using closure with advanced optimizations enabled.
Demonstrating externs, annotations, and minified and concat packages.

##### Build scripts
 * build.xml:
    This is the master build file that executes the closure and extension build scripts in order.
    
    - Sublime Text users:
    
        This is the entry point script I use with Sublime's build system. Command + b
        Sublime Text really shows the power of these build scripts. (windows and mac)
        http://www.sublimetext.com/

 * [Details for the main extension build script.](https://github.com/scarrillo/ChromeExtensionPackage/)

 * build-closure.xml

	The javascript compilation script. This is where you declare your compiled packages and the scripts that comprise them.
	Credit to google for the [closure ant script/compile task](http://code.google.com/p/closure-compiler/wiki/BuildingWithAnt)

	Parameters of note:

	- compilationLevel="advanced"

	    > "Compilation with ADVANCED_OPTIMIZATIONS achieves extra compression by being more aggressive in the ways that it transforms code and renames symbols. However, this more aggressive approach means that you must take greater care to ensure that the output code works the same way as the input code"
            other options: simple | whitespace | advanced

	- warning="verbose"

		other options quiet | verbose | default

	- prettyPrint="false"

		This preserves spacing and line breaks. Even during advanced compilation. enable for debugging, disable for production.

	- forceRecompile="false"

		Force closure to recompile your scripts even if they have not been modified. For instance, when changing library dependencies or compiler settings.

	- debug="false"

		Leaves debug flags in the compressed code.


### Closure Compiler
	This project bundles a version of closure compiler library so that this is a complete working set of build scripts.
	Version: r1918 - Apr 30, 2012

	Please do update your version of compiler.jar as needed.
	http://code.google.com/p/closure-compiler/downloads/list

##### Scripts
 * /js-src/goog/externs.js

	Externs, hints for the compiler. This is only a starter externs file. Contains entries for closure, chrome extensions, and jquery.
	More information: https://developers.google.com/closure/compiler/docs/api-tutorial3

 * /js-src/utils.js

	Example starter code to see the effects of google closure compiler. Feel free to junk it or use.
	utils.log(...) is also an example of static conditionals. It takes advantage of the compiler removing unreachable code for debug logging. Logging statements will never make it into production.

 * /js-src/info.js

	Example of using the @preserve declaration to tell closure compiler to preserve comments in the compiled source files. Added in an external javascript so that I can keep the auther comments at the top.

 * /js/background.js

	The closure compiled js file. This is the only file that will make it into production.


