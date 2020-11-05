
var resultado;
var mostra_resultado = document.querySelector('.mensagem');
let shadow = document.querySelector('.shadow');
//dados volume
//li
var tri = document.getElementById("triv");
var quad = document.getElementById("quadv");
var ret = document.getElementById("retv");
var esf = document.getElementById("esfv");
var trap = document.getElementById("trapv");
//Conteiner volume
var triangulo = document.getElementById("triangulo");
var quadrado = document.getElementById("quadrado");
var retangulo = document.getElementById("retangulo");
var esfera = document.getElementById("esfera");
var trapezio = document.getElementById("trapezio");
//Inputs Volume
var triR = document.getElementById("triR");
var triA = document.getElementById("triA");
var quadA = document.getElementById("quadA");
var retA = document.getElementById("retA");
var retB = document.getElementById("retB");
var retC = document.getElementById("retC");
var esfR = document.getElementById("esfR");
var trapB = document.getElementById("trapB");
var trapb = document.getElementById("trapb");
var trapH = document.getElementById("trapH");

//dados Perimetro--------------------------
//li 
var trip = document.getElementById("trip");
var quadp = document.getElementById("quadp");
var retp = document.getElementById("retp");
var esfp = document.getElementById("esfp");
var trapp = document.getElementById("trapp");
//Conteiner
var triangulo_p = document.getElementById("peri-triangulo");
var quadrado_p = document.getElementById("peri-quadrado");
var retangulo_p = document.getElementById("peri-retangulo");
var esfera_p = document.getElementById("peri-esfera");
var trapezio_p = document.getElementById("peri-trapezio");
//Inputs
var peri1 = document.getElementById("peri1");
var peri2 = document.getElementById("peri2");
var peri3 = document.getElementById("peri3");
var quad1 = document.getElementById("quad1");
var ret1 = document.getElementById("ret1");
var ret2 = document.getElementById("ret2");
var esf1 = document.getElementById("esf1");
var trap1 = document.getElementById("trap1");
var trap2 = document.getElementById("trap2");
var trap3 = document.getElementById("trap3");
var trap4 = document.getElementById("trap4");
//dados Area--------------------------
//Conteiner
var triangulo_a = document.getElementById("conteiner-area-triangulo");
var quadrado_a = document.getElementById("conteiner-area-quadrado");
var retangulo_a = document.getElementById("conteiner-area-retangulo");
var esfera_a = document.getElementById("conteiner-area-esfera");
var trapezio_a = document.getElementById("conteiner-area-trapezio");
//Inputs
var area1 = document.getElementById("area1");
var area2 = document.getElementById("area2");
var area_quad1 = document.getElementById("area_quad1");
var area_ret_1 = document.getElementById("area_ret_1");
var area_ret_2 = document.getElementById("area_ret_2");
var area_esf_1 = document.getElementById("area_esf_1");
var area_trap_B = document.getElementById("area_trap_B");
var area_trap_b = document.getElementById("area_trap_b");
var area_trap_h = document.getElementById("area_trap_h");
//calculadora
var btn_calculator = document.getElementById("calculator");
var calculator = document.getElementById("calc");
//Conversão temperatura
var all_result = document.getElementById('all-resultado');
var All = document.getElementsByClassName('seletor');
var conversao = document.getElementById("conversao");
var k1 = document.getElementById('k1');
var k2 = document.getElementById('k2');
var f1 = document.getElementById('f1');
var f2 = document.getElementById('f2');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
//cronometro
var stopwatch = document.getElementById('stopwatch');
var btn_stop = document.getElementsByClassName('btn-stop');
var sec = document.getElementsByClassName('sec');
var hours = document.getElementsByClassName('hou');
var minutes = document.getElementsByClassName('min'); 
var millisecounds = document.getElementsByClassName('mill');

function aparecer(aparece){    
  switch(aparece){
    case 'triv':
        triangulo.style.display = "flex";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";
        mostra_resultado.style.display = "none";       
        triR.value = "";
        triA.value = "";
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        retangulo_a.style.display = "none";
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;

    case 'quadv':
        triangulo.style.display = "none";
        quadrado.style.display = "flex";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";
        mostra_resultado.style.display = "none";    
        quadA.value = "";
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        retangulo_a.style.display = "none";
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;

    case 'retv':
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "flex";
        esfera.style.display = "none";
        trapezio.style.display = "none";
        mostra_resultado.style.display = "none";    
        retA.value = "";
        retB.value = "";
        retC.value = "";   
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";  
        calculator.style.display = "none";  
        resultado = '';
        conversao.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        retangulo_a.style.display = "none";
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;

    case 'esfv':
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "flex";
        trapezio.style.display = "none";
        mostra_resultado.style.display = "none";   
        esfR.value = "";   
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";  
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        retangulo_a.style.display = "none";
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;

    case 'trapv':
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "flex";
        mostra_resultado.style.display = "none";    
        trapb1.value = "";
        trapb2.value = "";
        trapH.value = "";
        traph.value = "";
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        retangulo_a.style.display = "none";
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;
    
    case 'trip':
        triangulo_p.style.display = "flex";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";
        mostra_resultado.style.display = "none";        
        peri1.value = "";
        peri2.value = "";
        peri3.value = "";
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        retangulo_a.style.display = "none";
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;

    case 'quadp':
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "flex";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";
        mostra_resultado.style.display = "none";               
        quad1.value = "";
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        retangulo_a.style.display = "none";
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;

    case 'retp':
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "flex";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";
        mostra_resultado.style.display = "none";       
        ret1.value = "";
        ret2.value = "";   
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";  
        calculator.style.display = "none"; 
        resultado = '';
        conversao.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        retangulo_a.style.display = "none";
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;

    case 'esfp':
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "flex";
        trapezio_p.style.display = "none";
        mostra_resultado.style.display = "none";         
        esf1.value = "";
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";   
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        retangulo_a.style.display = "none";
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;

    case 'trapp':
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "flex";
        mostra_resultado.style.display = "none";        
        trap1.value = "";
        trap2.value = "";
        trap3.value = "";
        trap4.value = "";
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        retangulo_a.style.display = "none";
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;

    case 'calculator':
        calculator.style.display = "inline-block";
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";
        mostra_resultado.style.display = "none";   
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";
        resultado = '';
        visor.style.backgroundColor = '#cecece';
        conversao.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        retangulo_a.style.display = "none";
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;
    case 'temperatura':
        conversao.style.display = "flex";
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";
        mostra_resultado.style.display = "none";    
        retA.value = "";
        retB.value = "";
        retC.value = "";   
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";  
        calculator.style.display = "none";  
        resultado = '';
        stopwatch.style.display = "none";
        triangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        retangulo_a.style.display = "none";
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;
    case 'stopwatch':
        stopwatch.style.display = "flex";
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";
        mostra_resultado.style.display = "none";        
        triR.value = "";
        triA.value = "";  
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";   
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";
        triangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        retangulo_a.style.display = "none";
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;
    case 'tripa':
        triangulo_a.style.display = "flex";
        stopwatch.style.display = "none";
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";
        mostra_resultado.style.display = "none";        
        triR.value = "";
        triA.value = "";  
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";   
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";    
        quadrado_a.style.display = "none";  
        retangulo_a.style.display = "none"; 
        esfera_a.style.display = "none";
        trapezio_a.style.display = "none";
        area1.value = '';
        area2.value = '';
        shadow.style.display = 'none';
    break;
    case 'quada':
        quadrado_a.style.display = "flex";
        triangulo_a.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";
        mostra_resultado.style.display = "none";         
        area_quad1.value = "";         
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";   
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";   
        retangulo_a.style.display = "none";   
        esfera_a.style.display = "none";  
        trapezio_a.style.display = "none";
        shadow.style.display = 'none';
    break;
    case 'reta':
        retangulo_a.style.display = "flex";
        quadrado_a.style.display = "none";
        triangulo_a.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";
        mostra_resultado.style.display = "none";        
        area_ret_1.value = "";
        area_ret_2.value = "";  
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";   
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";  
        esfera_a.style.display = "none";   
        trapezio_a.style.display = "none";  
        shadow.style.display = 'none'; 
    break;
    case 'esfa':
        esfera_a.style.display = "flex";
        retangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        triangulo_a.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";
        mostra_resultado.style.display = "none";        
        area_esf_1.value = "";        
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";   
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";   
        trapezio_a.style.display = "none";    
        shadow.style.display = 'none'; 
    break;
    case 'trapa':
        trapezio_a.style.display = "flex";
        esfera_a.style.display = "none";
        retangulo_a.style.display = "none";
        quadrado_a.style.display = "none";
        triangulo_a.style.display = "none";
        stopwatch.style.display = "none";
        triangulo_p.style.display = "none";
        quadrado_p.style.display = "none";
        retangulo_p.style.display = "none";
        esfera_p.style.display = "none";
        trapezio_p.style.display = "none";
        mostra_resultado.style.display = "none";        
        area_trap_B.value = "";
        area_trap_b.value = "";
        area_trap_h.value = "";  
        triangulo.style.display = "none";
        quadrado.style.display = "none";
        retangulo.style.display = "none";
        esfera.style.display = "none";
        trapezio.style.display = "none";   
        calculator.style.display = "none";
        resultado = '';
        conversao.style.display = "none";   
        shadow.style.display = 'none';     
    break;

  }
}
//Calculo Volume
function calctriangulo(){      
    resultado = (3.1415926535 * (Number(triR.value) * Number(triR.value)) * Number(triA.value)) / 3; 
    mostra_resultado.innerHTML = 'O volume do Cone é '+ resultado.toFixed(2);   
    mostra_resultado.style.display = "flex";    
}

function calcquadrado(){     
    resultado = (Number(quadA.value) * Number(quadA.value) * Number(quadA.value));      
    mostra_resultado.innerHTML = 'O volume do Quadrado é '+ resultado.toFixed(2) ;
    mostra_resultado.style.display = "flex";    
}

function calcretangulo(){     
    resultado = (Number(retA.value) * Number(retB.value) * Number(retC.value));      
    mostra_resultado.innerHTML = 'O volume do Retângulo é '+ resultado.toFixed(2) ;
    mostra_resultado.style.display = "flex";    
}

function calcesfera(){     
    resultado = (4 * 3.1415926535 * (Number(esfR.value) * Number(esfR.value) * Number(esfR.value))) / 3;      
    mostra_resultado.innerHTML = 'O volume da Esfera é '+ resultado.toFixed(2);
    mostra_resultado.style.display = "flex";    
}
//Calculo Perímetro
function calctriangulo_p(){      
    resultado = Number(peri1.value) + Number(peri2.value) + Number(peri3.value); 
    mostra_resultado.innerHTML = 'O Perímetro do Triângulo é '+ resultado.toFixed(2) ;   
    mostra_resultado.style.display = "flex";
}

function calcquadrado_p(){      
    resultado = 4 * Number(quad1.value); 
    mostra_resultado.innerHTML = 'O Perímetro do Quadrado é '+ resultado.toFixed(2) ;   
    mostra_resultado.style.display = "flex";
}

function calcretangulo_p(){      
    resultado = ((2 * Number(ret1.value)) + (2 * Number(ret2.value))); 
    mostra_resultado.innerHTML = 'O Perímetro do Retângulo é '+ resultado.toFixed(2) ;   
    mostra_resultado.style.display = "flex";
}

function calcesfera_p(){      
    resultado = 2 * 3.1415926535 * Number(esf1.value); 
    mostra_resultado.innerHTML = 'O Perímetro da Esfera é '+ resultado.toFixed(2) ;   
    mostra_resultado.style.display = "flex";
}

function calctrapezio_p(){      
    resultado = Number(trap1.value) +  Number(trap2.value) +  Number(trap3.value) +  Number(trap4.value); 
    mostra_resultado.innerHTML = 'O Perímetro do Trapézio é '+ resultado.toFixed(2) ;   
    mostra_resultado.style.display = "flex";
}
//calculo Area
function calctriangulo_a(){      
    resultado = (Number(area1.value) *  Number(area2.value)) / 2; 
    mostra_resultado.innerHTML = 'Area do Triângulo é '+ resultado.toFixed(2) ;   
    mostra_resultado.style.display = "flex";
}
function calcquadrado_a(){      
    resultado = Number(area_quad1.value) *  Number(area_quad1.value); 
    mostra_resultado.innerHTML = 'Area do Quadrado é '+ resultado.toFixed(2);   
    mostra_resultado.style.display = "flex";
}
function calcretangulo_a(){      
    resultado = Number(area_ret_1.value) * Number(area_ret_2.value); 
    mostra_resultado.innerHTML = 'Area do Retângulo é '+ resultado.toFixed(2);   
    mostra_resultado.style.display = "flex";
}
function calcesfera_a(){      
    resultado = 4 * 3.1415926 * Number(area_esf_1.value) * Number(area_esf_1.value); 
    mostra_resultado.innerHTML = 'Area da Esfera é '+ resultado.toFixed(2);   
    mostra_resultado.style.display = "flex";
}
function calctrapezio_a(){    
    resultado = ((Number(area_trap_B.value) + Number(area_trap_b.value)) * Number(area_trap_h.value)) / 2; 
    mostra_resultado.innerHTML = 'Area do Trapézio é '+ resultado.toFixed(2);  
    mostra_resultado.style.display = "flex";   
}


//Calculadora----------------------------------------------------
var visor = document.getElementById("visor-calc");
var parcela1, parcela2, operador; 

function pegarValor(valor){    
    visor.value += valor;    
    visor.style.backgroundColor = '#fff';     
}
function limpador(valor){
    parcela1 = visor.value;
    operador = valor;    
    visor.value = '';
    visor.focus();   
    visor.style.backgroundColor = '#cecece'     
}
function calcularValor(){    
    parcela2 = visor.value;
    
    switch(operador){
        case '+':
        resultado = Number(parcela1) + Number(parcela2);
        visor.value = resultado;
        break;
        case '-':
        resultado = Number(parcela1) - Number(parcela2);
        visor.value = resultado;
        break;
        case '*':
        resultado = Number(parcela1) * Number(parcela2);
        visor.value = resultado;
        break;
        default:
        resultado = Number(parcela1) / Number(parcela2);
        visor.value = resultado;
        break;
    }   
}


//Conversão Temperatura
function selecao(valor){
    switch(valor){
        case '0':
            All[1].checked = false;
            All[2].checked = false;
            All[3].checked = false;
            All[4].checked = false;
            All[5].checked = false;
            break;
        case '1':
            All[0].checked = false;
            All[2].checked = false;
            All[3].checked = false;
            All[4].checked = false;
            All[5].checked = false;
            break;
        case '2':
            All[1].checked = false;
            All[0].checked = false;
            All[3].checked = false;
            All[4].checked = false;
            All[5].checked = false;
            break;
        case '3':
            All[1].checked = false;
            All[0].checked = false;
            All[2].checked = false;
            All[4].checked = false;
            All[5].checked = false;
            break;
        case '4':
            All[1].checked = false;
            All[0].checked = false;
            All[3].checked = false;
            All[2].checked = false;
            All[5].checked = false;
            break; 
        default:
            All[1].checked = false;
            All[0].checked = false;
            All[3].checked = false;
            All[4].checked = false;
            All[2].checked = false;
            break;            
    }   
}
/*
    k1.disabled = true;
    k2.disabled = true;
    f1.disabled = true;
    f2.disabled = true;
    c1.disabled = true;
    c2.disabled = true; 
*/

function all_calc(){  
     
    if(All[0].checked){  
        k1.disabled = false;
        k2.disabled = true;
        f1.disabled = true;
        f2.disabled = true;
        c1.disabled = true;
        c2.disabled = true;     
        resultado = (Number(k1.value) - 273.15); 
        all_result.style.position = 'absolute';
        all_result.style.marginLeft = '-312px';
        all_result.style.marginTop = '-224px';
        all_result.style.borderTopLeftRadius = '20px';               
        all_result.style.display = 'none';
        All[1].style.display = 'flex';
        All[2].style.display = 'flex';
        All[3].style.display = 'flex';
        All[4].style.display = 'flex';
        All[5].style.display = 'flex';
        k2.value = '';
        f1.value = '';
        f2.value = '';
        c1.value = '';
        c2.value = '';
        all_result.innerHTML = k1.value+'°K (Kelvin) são '+resultado.toFixed(2)+'°C (Celsius)';   
    }
    else if(All[1].checked){   
        k1.disabled = true;
        k2.disabled = false;
        f1.disabled = true;
        f2.disabled = true;
        c1.disabled = true;
        c2.disabled = true;    
        resultado = (9*(Number(k2.value)-273.15)/5)+32; 
        all_result.style.position = 'absolute';
        all_result.style.marginLeft = '280px';
        all_result.style.marginTop = '-224px';
        all_result.style.borderTopLeftRadius = '20px';     
        all_result.style.display = 'none';     
        All[0].style.display = 'flex';
        All[2].style.display = 'flex';
        All[3].style.display = 'flex';
        All[4].style.display = 'flex';
        All[5].style.display = 'flex'; 
        k1.value = '';
        f1.value = '';
        f2.value = '';
        c1.value = '';
        c2.value = '';   
        all_result.innerHTML = k2.value+'°K (Kelvin) são '+resultado.toFixed(2)+'°F (Fahrenheit)';   
    } 
    else if(All[2].checked){  
        k1.disabled = true;
        k2.disabled = true;
        f1.disabled = false;
        f2.disabled = true;
        c1.disabled = true;
        c2.disabled = true;   
        resultado = (5*(Number(f1.value)-32))/9; 
        all_result.style.position = 'absolute';
        all_result.style.marginLeft = '-313px';
        all_result.style.marginTop = '-10px';            
        all_result.style.display = 'none';     
        All[0].style.display = 'flex';
        All[1].style.display = 'flex';
        All[3].style.display = 'flex';
        All[4].style.display = 'flex';
        All[5].style.display = 'flex';  
        k2.value = '';
        k1.value = '';
        f2.value = '';
        c1.value = '';
        c2.value = '';  
        all_result.innerHTML = f1.value+'°F (Fahrenheit) são '+resultado.toFixed(2)+'°C (Celsius)';   
    }
    else if(All[3].checked){  
        k1.disabled = true;
        k2.disabled = true;
        f1.disabled = true;
        f2.disabled = false;
        c1.disabled = true;
        c2.disabled = true;    
        resultado = (5*(Number(f2.value)-32)/9)+273.15; 
        all_result.style.position = 'absolute';
        all_result.style.marginLeft = '280px';
        all_result.style.marginTop = '-4px';           
        all_result.style.display = 'none';     
        All[0].style.display = 'flex';
        All[1].style.display = 'flex';
        All[2].style.display = 'flex';
        All[4].style.display = 'flex';
        All[5].style.display = 'flex';  
        k2.value = '';
        f1.value = '';
        k1.value = '';
        c1.value = '';
        c2.value = '';  
        all_result.innerHTML = f2.value+'°F (Fahrenheit) são '+resultado.toFixed(2)+'°K (Kelvin)';   
    } 
    else if(All[4].checked){  
        k1.disabled = true;
        k2.disabled = true;
        f1.disabled = true;
        f2.disabled = true;
        c1.disabled = false;
        c2.disabled = true;     
        resultado = Number(c1.value)+273.15; 
        all_result.style.position = 'absolute';
        all_result.style.marginLeft = '-313px';
        all_result.style.marginTop = '224px';
        all_result.style.borderBottomLeftRadius = '20px';     
        all_result.style.display = 'none';     
        All[0].style.display = 'flex';
        All[1].style.display = 'flex';
        All[2].style.display = 'flex';
        All[3].style.display = 'flex';
        All[5].style.display = 'flex';  
        k2.value = '';
        f1.value = '';
        f2.value = '';
        k1.value = '';
        c2.value = '';  
        all_result.innerHTML = c1.value+'°C (Celcius) são '+resultado.toFixed(2)+'°K (Kelvin)';   
    }   
    else{            
        k1.disabled = true;
        k2.disabled = true;
        f1.disabled = true;
        f2.disabled = true;
        c1.disabled = true;
        c2.disabled = false;
        resultado = (9*Number(c2.value)/5)+32; 
        all_result.style.position = 'absolute';
        all_result.style.marginLeft = '280px';
        all_result.style.marginTop = '224px';
        all_result.style.borderTopLeftRadius = '20px';     
        all_result.style.display = 'none';     
        All[0].style.display = 'flex';
        All[1].style.display = 'flex';
        All[2].style.display = 'flex';
        All[3].style.display = 'flex';
        All[4].style.display = 'flex';   
        k2.value = '';
        f1.value = '';
        f2.value = '';
        c1.value = '';
        k1.value = ''; 
        all_result.innerHTML = c2.value+'°C (Celcius) são '+resultado.toFixed(2)+'°F (Fahrenheit)';          
    }
}
function aparecer_resultado(){
    if(All[0].checked){
        All[0].style.display = 'none';   
    }
    else if(All[1].checked){
        All[1].style.display = 'none';
    }
    else if(All[2].checked){
        All[2].style.display = 'none';
    }
    else if(All[3].checked){
        All[3].style.display = 'none';
    }
    else if(All[4].checked){
        All[4].style.display = 'none';
    }
    else{
        All[5].style.display = 'none';
    }
    
    all_result.style.display = 'flex';    
}
//Cronometro
   var hour = '0';  
   var minute = '0';   
   var secounds = '0';     
   var milli = '0';    
   var time;
    
function comecar(){ 
     time = setInterval(cronometro, 1000/100)
};
function pausar(){
    clearInterval(time);
}
function stop(){
    clearInterval(time);
    sec[0].innerHTML = '00';
    hours[0].innerHTML = '00';
    minutes[0].innerHTML = '00';
    millisecounds[0].innerHTML = '00';
}
function cronometro(){   
   milli++;      
   Number(milli) < 10 ? millisecounds[0].innerHTML = '0'+milli : millisecounds[0].innerHTML = milli;
    if(milli == '101'){
        milli = '0';        
    }
    if(milli == '100'){
        secounds++;            
        if(secounds == '60'){
            secounds = '0'
            minute++;
            if(minute == '60'){
                minute = '0'
                hour++;       
                Number(hour) < 10 ? hours[0].innerHTML = '0'+hour : hours[0].innerHTML = hour;
            }            
            Number(minute) < 10 ? minutes[0].innerHTML = '0'+minute : minutes[0].innerHTML = minute;
        }
        Number(secounds) < 10 ? sec[0].innerHTML = "0"+ secounds:sec[0].innerHTML = secounds;        
    }    
}

//Unidades de medidas
    let qs = (ele)=>{
        return document.querySelector(ele)
    }

    qs('.value').addEventListener('keyup',()=>{
   //milimetro
   if(qs('#select-value').value == 'milimetro' && qs('#select-convert').value == 'centimetro'){
    qs('.select-result').value = parseFloat(qs('.value').value) / 10 +' cm'
   }
    if(qs('#select-value').value == 'milimetro' && qs('#select-convert').value == 'decimetro'){
    qs('.select-result').value = parseFloat(qs('.value').value) / 100 +' dm'
    }
    if(qs('#select-value').value == 'milimetro' && qs('#select-convert').value == 'metro'){
        qs('.select-result').value = parseFloat(qs('.value').value) / 1000 +' m'
    }
    if(qs('#select-value').value == 'milimetro' && qs('#select-convert').value == 'quilometro'){
        qs('.select-result').value = parseFloat(qs('.value').value) / 1000000 +' km'
    }
    if(qs('#select-value').value == 'milimetro' && qs('#select-convert').value == 'polegada'){
        qs('.select-result').value = parseFloat(qs('.value').value) / 25.4 +' pol'
    }
    if(qs('#select-value').value == 'milimetro' && qs('#select-convert').value == 'milimetro'){
        qs('.select-result').value = parseFloat(qs('.value').value) +' mm'
    }
    //centimetro
    if(qs('#select-value').value == 'centimetro' && qs('#select-convert').value == 'milimetro'){
        qs('.select-result').value = parseFloat(qs('.value').value) * 10 +' mm'
       }
        if(qs('#select-value').value == 'centimetro' && qs('#select-convert').value == 'decimetro'){
        qs('.select-result').value = parseFloat(qs('.value').value) / 10 +' dm'
        }
        if(qs('#select-value').value == 'centimetro' && qs('#select-convert').value == 'metro'){
            qs('.select-result').value = parseFloat(qs('.value').value) / 100 +' m'
        }
        if(qs('#select-value').value == 'centimetro' && qs('#select-convert').value == 'quilometro'){
            qs('.select-result').value = parseFloat(qs('.value').value) / 100000 +' km'
        }
        if(qs('#select-value').value == 'centimetro' && qs('#select-convert').value == 'polegada'){
            qs('.select-result').value = (parseFloat(qs('.value').value) * 10) / 25.4 +' pol'
        }
        if(qs('#select-value').value == 'centimetro' && qs('#select-convert').value == 'centimetro'){
            qs('.select-result').value = parseFloat(qs('.value').value) +' cm'
        }
        //decimetro
        if(qs('#select-value').value == 'decimetro' && qs('#select-convert').value == 'milimetro'){
        qs('.select-result').value = parseFloat(qs('.value').value) * 100 +' mm'
        }
        if(qs('#select-value').value == 'decimetro' && qs('#select-convert').value == 'centimetro'){
        qs('.select-result').value = parseFloat(qs('.value').value) * 10 +' cm'
        }
        if(qs('#select-value').value == 'decimetro' && qs('#select-convert').value == 'metro'){
            qs('.select-result').value = parseFloat(qs('.value').value) / 10 +' m'
        }
        if(qs('#select-value').value == 'decimetro' && qs('#select-convert').value == 'quilometro'){
            qs('.select-result').value = parseFloat(qs('.value').value) / 10000 +' km'
        }
        if(qs('#select-value').value == 'decimetro' && qs('#select-convert').value == 'polegada'){
            qs('.select-result').value = (parseFloat(qs('.value').value) * 100) / 25.4 +' pol'
        }
        if(qs('#select-value').value == 'decimetro' && qs('#select-convert').value == 'decimetro'){
            qs('.select-result').value = parseFloat(qs('.value').value) +' dm'
        }
        //metro
        if(qs('#select-value').value == 'metro' && qs('#select-convert').value == 'milimetro'){
            qs('.select-result').value = parseFloat(qs('.value').value) * 1000 +' mm'
        }
        if(qs('#select-value').value == 'metro' && qs('#select-convert').value == 'centimetro'){
            qs('.select-result').value = parseFloat(qs('.value').value) * 100 +' cm'
        }
        if(qs('#select-value').value == 'metro' && qs('#select-convert').value == 'decimetro'){
            qs('.select-result').value = parseFloat(qs('.value').value) * 10 +' dm'
        }
        if(qs('#select-value').value == 'metro' && qs('#select-convert').value == 'quilometro'){
            qs('.select-result').value = parseFloat(qs('.value').value) / 1000 +' km'
        }
        if(qs('#select-value').value == 'metro' && qs('#select-convert').value == 'polegada'){
            qs('.select-result').value = (parseFloat(qs('.value').value) * 1000) / 25.4 +' pol'
        }
        if(qs('#select-value').value == 'metro' && qs('#select-convert').value == 'metro'){
            qs('.select-result').value = parseFloat(qs('.value').value) +' m'
        }
        //quilometro
        if(qs('#select-value').value == 'quilometro' && qs('#select-convert').value == 'milimetro'){
            qs('.select-result').value = parseFloat(qs('.value').value) * 1000000 +' mm'
        }
        if(qs('#select-value').value == 'quilometro' && qs('#select-convert').value == 'centimetro'){
            qs('.select-result').value = parseFloat(qs('.value').value) * 100000 +' cm'
        }
        if(qs('#select-value').value == 'quilometro' && qs('#select-convert').value == 'decimetro'){
            qs('.select-result').value = parseFloat(qs('.value').value) * 10000 +' dm'
        }
        if(qs('#select-value').value == 'quilometro' && qs('#select-convert').value == 'metro'){
            qs('.select-result').value = parseFloat(qs('.value').value) * 1000 +' m'
        }
        if(qs('#select-value').value == 'quilometro' && qs('#select-convert').value == 'polegada'){
            qs('.select-result').value = (parseFloat(qs('.value').value) * 1000) / 25.4 +' pol'
        }
        if(qs('#select-value').value == 'quilometro' && qs('#select-convert').value == 'quilometro'){
            qs('.select-result').value = parseFloat(qs('.value').value) +' km'
        }
         //polegada
         if(qs('#select-value').value == 'polegada' && qs('#select-convert').value == 'milimetro'){
            qs('.select-result').value = parseFloat(qs('.value').value) * 25.4 +' mm'
        }
        if(qs('#select-value').value == 'polegada' && qs('#select-convert').value == 'centimetro'){
            qs('.select-result').value = parseFloat(qs('.value').value) * 25.4 / 10 +' cm'
        }
        if(qs('#select-value').value == 'polegada' && qs('#select-convert').value == 'decimetro'){
            qs('.select-result').value = parseFloat(qs('.value').value) * 25.4 / 100 +' dm'
        }
        if(qs('#select-value').value == 'polegada' && qs('#select-convert').value == 'metro'){
            qs('.select-result').value = parseFloat(qs('.value').value) * 25.4 / 1000 +' m'
        }
        if(qs('#select-value').value == 'polegada' && qs('#select-convert').value == 'quilometro'){
            qs('.select-result').value = parseFloat(qs('.value').value) * 25.4 / 1000000 +' km'
        }
        if(qs('#select-value').value == 'polegada' && qs('#select-convert').value == 'polegada'){
            qs('.select-result').value = parseFloat(qs('.value').value) +' pol'
        }
})

function submenu(){
    let menu = document.querySelector('.menu')
    if(menu.style.marginLeft == '-70px'){
        menu.style.marginLeft = '162px'
    }else{
        menu.style.marginLeft = '-70px'
    }
}




