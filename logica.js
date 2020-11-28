
function pegarValor() {
    var receita = parseFloat(document.getElementById('receita').value)
    var investimento = parseFloat(document.getElementById('investimento').value)
    var tma = parseFloat(document.getElementById('tma').value)
    var valor = document.getElementById('resultado')
    var resultado = calcular(receita, investimento, tma)
    
    valor.value = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    

}

function calcular(receita, investimento, tma) {
    var resultado = (receita - investimento) - investimento * tma
    return resultado
}


    function formatarMoeda() {
        var receita = document.getElementById('receita');
        var valor = receita.value;

        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }

        receita.value = valor;
        if(valor == 'NaN') receita.value = '';
    }

    function formatarMoedaInv() {
        var investimento = document.getElementById('investimento');
        var valor = investimento.value;

        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }

        investimento.value = valor;
        if(valor == 'NaN') investimento.value = '';
    }

    function formatarPorcTma() {
        var tma = document.getElementById('tma');
        var aux = parseInt(tma.value)
        var aux = Number(aux/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}); 
        tma.value = aux
    }


