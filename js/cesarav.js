
function Cifradov() {
    var y=document.getElementById("semilla").value;
    var txt=document.getElementById("txt").value;
    var txt= txt.toLowerCase()
    var textov=/^[a-zñ\s]+$/
    var numerov=/^[0-9\s]+$/
    if (txt.length>=1) {
        if (!textov.test(txt) || !numerov.test(y)) {
            document.getElementById('resultado').innerHTML="Metió un dato mal en la cadena o seleccione el número de desplazamiento"    
        }else{
            Cifrar();
        }
    }else{
        document.getElementById('resultado').innerHTML="Debe insertar algo para cifrar"
        
    }
}

function Decifradov() {
    var y=document.getElementById("semilla").value;
    var txt=document.getElementById("txt").value;
    var txt= txt.toLowerCase()
    var textov=/^[a-zñ\s]+$/
    var numerov=/^[0-9\s]+$/
    if (txt.length>=1) {
        if (!textov.test(txt) || !numerov.test(y)) {
            document.getElementById('resultado').innerHTML="Metió un dato mal en la cadena o seleccione el número de desplazamiento"    
        }else{
            Decifar();
        }
    }else{
        document.getElementById('resultado').innerHTML="Debe insertar algo para cifrar"
        
    }
}


function Cifradovmej() {
    var y=document.getElementById("semilla").value;
    var txt=document.getElementById("txt").value;
    var txt= txt.toLowerCase()
    var textov=/^[a-zñ\s]+$/
    var numerov=/^[0-9\s]+$/
    if (txt.length>=1) {
        if (!textov.test(txt) || !numerov.test(y)) {
            document.getElementById('resultado').innerHTML="Metió un dato mal en la cadena o seleccione el número de desplazamiento"    
        }else{
            Cifrarmej();
        }
    }else{
        document.getElementById('resultado').innerHTML="Debe insertar algo para cifrar"
        
    }
}

function Decifradovmej() {
    var y=document.getElementById("semilla").value;
    var txt=document.getElementById("txt").value;
    var txt= txt.toLowerCase()
    var textov=/^[a-zñ\s]+$/
    var numerov=/^[0-9\s]+$/
    if (txt.length>=1) {
        if (!textov.test(txt) || !numerov.test(y)) {
            document.getElementById('resultado').innerHTML="Metió un dato mal en la cadena o seleccione el número de desplazamiento"    
        }else{
            Decifarmej();
        }
    }else{
        document.getElementById('resultado').innerHTML="Debe insertar algo para cifrar"
        
    }
}

function Cifrar(){
    var y=Number(document.getElementById("semilla").value);
    var txt=document.getElementById("txt").value;
    var txt= txt.toLowerCase()
    var abc="abcdefghijklmnñopqrstuvwxyz"
    var ci="";
    console.log(txt)
    for (var i = 0; i < txt.length; i++) {
        if (abc.indexOf(txt.charAt(i)) != -1) {
            ci+=(abc.indexOf(txt.charAt(i))!= -1)? abc.charAt(((abc.indexOf(txt.charAt(i)))+y)% abc.length):abc.charAt(((abc.indexOf(txt.charAt(i)))+y)% abc.length+1);
            console.log(((abc.indexOf(txt.charAt(i)))+y)% abc.length)
        }else{
            ci+= txt.charAt(i);
        }
        
    }
    document.getElementById('resultado').innerHTML = ci
}

function Decifar(){
    var y=Number( document.getElementById("semilla").value);
    var txt=document.getElementById("txt").value;
    var txt= txt.toLowerCase()
    var abc="abcdefghijklmnñopqrstuvwxyz"
    var ci="";
    console.log(txt)
    for (var i = 0; i < txt.length; i++) {
        if (abc.indexOf(txt.charAt(i)) != -1) {
            if ((abc.indexOf(txt.charAt(i))-y)<0){
                ci+=abc.charAt((abc.length)+((abc.indexOf(txt.charAt(i)))-y))
            }else{
                ci+=(abc.indexOf(txt.charAt(i))!= -1)? abc.charAt(((abc.indexOf(txt.charAt(i)))-y)% abc.length):abc.charAt(((abc.indexOf(txt.charAt(i)))-y)% abc.length+1);
            console.log(((abc.indexOf(txt.charAt(i)))-y)% abc.length)
            }
        }else{
            ci+= txt.charAt(i);
        }
        
    }
    document.getElementById('resultado').innerHTML = ci
}


function Cifrarmej(){
    var y=Number( document.getElementById("semilla").value);
    var txt=document.getElementById("txt").value;
    var txt= txt.toLowerCase()
    var abc="abcdefghijklmnñopqrstuvwxyz"
    var ci="";
    console.log(txt)
    for (var i = 0; i < txt.length; i++) {
        if (abc.indexOf(txt.charAt(i)) != -1) {
            ci+=(abc.indexOf(txt.charAt(i))!= -1)? abc.charAt((11*(abc.indexOf(txt.charAt(i)))+y)% abc.length):abc.charAt(((abc.indexOf(txt.charAt(i)))+y)% abc.length+1);
            console.log((11*(abc.indexOf(txt.charAt(i)))+y)% abc.length)
        }else{
            ci+= txt.charAt(i);
        }
        
    }
    document.getElementById('resultado').innerHTML = ci
}

function Decifarmej(){
    var y=Number( document.getElementById("semilla").value);
    var txt=document.getElementById("txt").value;
    var txt= txt.toLowerCase()
    var abc="abcdefghijklmnñopqrstuvwxyz"
    var ci="";
    var inversa=abc.length%11
    console.log(inversa)
    console.log(txt)
    for (var i = 0; i < txt.length; i++) {
        if (abc.indexOf(txt.charAt(i)) != -1) {
            if ((abc.indexOf(txt.charAt(i))-y)<0){
                ci+=abc.charAt((abc.length)+((abc.indexOf(txt.charAt(i)))-y))
            }else{
                ci+=(abc.indexOf(txt.charAt(i))!= -1)? abc.charAt(((abc.indexOf(txt.charAt(i)))-y)*inversa% abc.length):abc.charAt(((abc.indexOf(txt.charAt(i)))-y)% abc.length+1);
            console.log(((abc.indexOf(txt.charAt(i)))-y)*inversa% abc.length)
            }
        }else{
            ci+= txt.charAt(i);
        }
        
    }
    document.getElementById('resultado').innerHTML = ci
}
