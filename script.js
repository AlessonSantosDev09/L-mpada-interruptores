// Estados das lâmpadas e interruptores
let interruptorA = false;
let interruptorB = false;
let interruptorC = false;
let lampadaAQuente = false;

// Funções para ligar/desligar os interruptores
function ligarA() {
    interruptorA = !interruptorA;
    document.getElementById('statusA').textContent = interruptorA ? 'Ligado' : 'Desligado';
    
    // Se desligar o interruptor A, marca a lâmpada como quente
    if (!interruptorA) lampadaAQuente = true;
}

function ligarB() {
    interruptorB = !interruptorB;
    document.getElementById('statusB').textContent = interruptorB ? 'Ligado' : 'Desligado';
}

function ligarC() {
    interruptorC = !interruptorC;
    document.getElementById('statusC').textContent = interruptorC ? 'Ligado' : 'Desligado';
}

// Função para verificar o estado das lâmpadas
function irParaSala() {
    let resultado = '';

    if (interruptorB) {
        resultado += 'Lâmpada B: Acesa<br>';
    } else {
        resultado += 'Lâmpada B: Apagada<br>';
    }

    if (lampadaAQuente) {
        resultado += 'Lâmpada A: Apagada, mas quente<br>';
    } else {
        resultado += 'Lâmpada A: Apagada e fria<br>';
    }

    resultado += 'Lâmpada C: Apagada e fria<br>';

    document.getElementById('resultado').innerHTML = resultado;
}
