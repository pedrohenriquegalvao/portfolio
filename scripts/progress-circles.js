// Será utilizado apenas para definir qual linguagem terá qual progresso.
const linguagens = [
    {nome: "html", progresso: 70},
    {nome: "css", progresso: 50},
    {nome: "js", progresso: 50},
    {nome: "php", progresso: 30},
    {nome: "java", progresso: 40},
    {nome: "python", progresso: 50},
    {nome: "swift", progresso: 15},
    {nome: "kotlin", progresso: 15}
];

posicao_html = linguagens.map(object => object.nome).indexOf('html'); 
prog_html = linguagens[posicao_html]['progresso'];

posicao_css = linguagens.map(object => object.nome).indexOf('css'); 
prog_css = linguagens[posicao_css]['progresso'];

posicao_js = linguagens.map(object => object.nome).indexOf('js'); 
prog_js = linguagens[posicao_js]['progresso'];

posicao_php = linguagens.map(object => object.nome).indexOf('php'); 
prog_php = linguagens[posicao_php]['progresso'];

posicao_java = linguagens.map(object => object.nome).indexOf('java'); 
prog_java = linguagens[posicao_java]['progresso'];


posicao_python = linguagens.map(object => object.nome).indexOf('python'); 
prog_python = linguagens[posicao_python]['progresso'];


posicao_swift = linguagens.map(object => object.nome).indexOf('swift'); 
prog_swift = linguagens[posicao_swift]['progresso'];


posicao_kotlin = linguagens.map(object => object.nome).indexOf('kotlin'); 
prog_kotlin = linguagens[posicao_kotlin]['progresso'];


var circulo_html = document.querySelector('#progresso-html');
document.querySelector('#porcentagem-html').innerHTML = prog_html + '%';
circulo_html.style.strokeDashoffset = 315 - (315 * prog_html / 100);

var circulo_css = document.querySelector('#progresso-css');
document.querySelector('#porcentagem-css').innerHTML = prog_css + '%';
circulo_css.style.strokeDashoffset = 315 - (315 * prog_css / 100);

var circulo_js = document.querySelector('#progresso-js');
document.querySelector('#porcentagem-js').innerHTML = prog_js + '%';
circulo_js.style.strokeDashoffset = 315 - (315 * prog_js / 100);

var circulo_php = document.querySelector('#progresso-php');
document.querySelector('#porcentagem-php').innerHTML = prog_php + '%';
circulo_php.style.strokeDashoffset = 315 - (315 * prog_php / 100);

var circulo_java = document.querySelector('#progresso-java');
document.querySelector('#porcentagem-java').innerHTML = prog_java + '%';
circulo_java.style.strokeDashoffset = 315 - (315 * prog_java / 100);

var circulo_python = document.querySelector('#progresso-python');
document.querySelector('#porcentagem-python').innerHTML = prog_python + '%';
circulo_python.style.strokeDashoffset = 315 - (315 * prog_python / 100);

var circulo_swift = document.querySelector('#progresso-swift');
document.querySelector('#porcentagem-swift').innerHTML = prog_swift + '%';
circulo_swift.style.strokeDashoffset = 315 - (315 * prog_swift / 100);

var circulo_kotlin = document.querySelector('#progresso-kotlin');
document.querySelector('#porcentagem-kotlin').innerHTML = prog_kotlin + '%';
circulo_kotlin.style.strokeDashoffset = 315 - (315 * prog_kotlin / 100);





