
  let caixaTexto = document.querySelector('#box-exibir-texto')

function copiartxt(){
    caixaTexto.select()
    document.execCommand('copy')
}

function clickCopy(trat){
    if (trat == 1){
        caixaTexto.value = tratUmMomentoEntraremosEmContato.value
        copiartxt()
        tratUmMomentoEntraremosEmContato.focus()
    
    }else if (trat == 2){
        caixaTexto.value = tratSouSuporteComoPossoAjudar.value
        copiartxt()
        tratSouSuporteComoPossoAjudar.focus()

    }else if (trat == 3){
        caixaTexto.value = tratSouSuporteTecnico.value
        copiartxt()
        tratSouSuporteTecnico.focus()

    }else if (trat == 4){
        caixaTexto.value = tratComoPossoAjudar.value
        copiartxt()
        tratComoPossoAjudar.focus()

    }else if (trat == 5){
        caixaTexto.value = tratMeConfirmeNomeECpf.value
        copiartxt()
        tratMeConfirmeNomeECpf.focus()

    }else if (trat == 6){
        caixaTexto.value = tratUmMomentoVouVerificar.value
        copiartxt()
        tratUmMomentoVouVerificar.focus()

    }else if (trat == 7){
        caixaTexto.value = tratSemRetornoEstamosNoAguardo.value
        copiartxt()
        tratSemRetornoEstamosNoAguardo.focus()

    }else if (trat == 8){
        caixaTexto.value = tratAtendimentoEncerrado.value
        copiartxt()
        tratAtendimentoEncerrado.focus()

    }else if (trat == 9){
        caixaTexto.value = tratAInfotecAgradeceOContato.value
        copiartxt()
        tratAInfotecAgradeceOContato.focus()

    }else if (trat == 10){
        caixaTexto.value = tratDisponhaQualquerDuvida.value
        copiartxt()
        tratDisponhaQualquerDuvida.focus()

    }else if(trat == 11){
        caixaTexto.value = tratAcessoNormalizadoSemIntervencao.value
        copiartxt()
        tratAcessoNormalizadoSemIntervencao.focus()
    
    }else if(trat == 12){
        caixaTexto.value = tratSolicitacaoAtendida.value
        copiartxt()
        tratSolicitacaoAtendida.focus()
    
    }else if(trat == 13){
        caixaTexto.value = tratEncaminhadaParaOSetorResponsavel.value
        copiartxt()
        tratEncaminhadaParaOSetorResponsavel.focus()

    }else if(trat == 14){
        caixaTexto.value = tratNosRespondaNoPrivado.value
        copiartxt()
        tratNosRespondaNoPrivado.focus()
    
    }else if(trat == 15){
        caixaTexto.value = tratAjudoEmAlgoMais.value
        copiartxt()
        tratAjudoEmAlgoMais.focus()
    }
    }
 