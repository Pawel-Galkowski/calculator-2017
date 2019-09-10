var i=0;
function math(val) {
    "use strict";
    document.getElementById("show2").value += val;
}

function char(val) {
    "use strict";
    if(val!==i) {
        document.getElementById("show2").value += val;
        i=val;
    } 
}


function CharSet(val) {
    "use strict";
    
    document.getElementById("show2").value=val;
}

    
function Endfunc() {
    "use strict";
    
    try{
        var ende;
        ende = document.getElementById("show2").value;
        CharSet(eval( document.getElementById("show2").value));
        document.getElementById("show").value = document.getElementById("show2").value;
        document.getElementById("show2").value = ende;
    }
    catch(Endfunc)
        {
            document.getElementById("show").value = 'Wrong query';
        }
}

function ClearIt() {
    "use strict";
    
    document.getElementById("show2").value = '';
    document.getElementById("show").value = document.getElementById("show2").value;
    val = '';
}