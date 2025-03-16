// Generally, it is safer to use 'use strict' mode to reduce the chances of errors in your code.
// 'use strict' mode is a way to tell the browser to execute your code in strict mode.
// Strict mode makes it easier to write "secure" JavaScript.
// Strict mode changes previously accepted "bad syntax" into real errors.
// Rarely will someone want to refer to the global object, so it is better to use 'use strict' mode to avoid this.
// 'use strict' mode is declared at the beginning of a script or a function.


'use strict'

function printThis () {
        console.log(this);
} // this refers to undefined   

printThis(); // undefined