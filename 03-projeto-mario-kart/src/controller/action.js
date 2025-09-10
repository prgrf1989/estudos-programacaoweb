
function actionRacer(escolherPista, dadoPlayer01, dadoPlayer02, player01, player02) {
    let resultPlay01 = 0;
    let resultPlay02 = 0;

    if (escolherPista === 0) {
        console.log(`${player01.name.toUpperCase()} jogou o dado e deu: ${dadoPlayer01}`);
        resultPlay01 = player01.velocidade + dadoPlayer01;
        console.log(`Velocidade: ${player01.velocidade} + dado: ${dadoPlayer01} = ${resultPlay01}\n`);
        console.log(`${player02.name.toUpperCase()} jogou o dado e deu: ${dadoPlayer02}`);
        resultPlay02 = player02.velocidade + dadoPlayer02;
        console.log(`Velocidade: ${player02.velocidade} + dado: ${dadoPlayer02} = ${resultPlay02}\n`);

        if (resultPlay01 > resultPlay02) {
            player01.pontos++
            console.log(`\n#### ${player01.name.toUpperCase()} venceu. ####\n`);
        } else if (resultPlay02 > resultPlay01) {
            player02.pontos++
            console.log(`\n#### ${player02.name.toUpperCase()} venceu ####\n`);
        } else {
            console.log(`\n#### EMPATOU! ####\n`);
        }

    } else if (escolherPista === 1) {
        console.log(`${player01.name.toUpperCase()} jogou o dado e deu: ${dadoPlayer01}`);
        resultPlay01 = player01.manobrabilidade + dadoPlayer01;
        console.log(`Manobrabilidade: ${player01.manobrabilidade} + dado: ${dadoPlayer01} = ${resultPlay01}\n`);
        console.log(`${player02.name.toUpperCase()} jogou o dado e deu: ${dadoPlayer02}`);
        resultPlay02 = player02.manobrabilidade + dadoPlayer02;
        console.log(`Manobrabilidade: ${player02.manobrabilidade} + dado: ${dadoPlayer02} = ${resultPlay02}\n`);

        if (resultPlay01 > resultPlay02) {
            player01.pontos++
            console.log(`\n#### ${player01.name.toUpperCase()} venceu. ####\n`);
        } else if (resultPlay02 > resultPlay01) {
            player02.pontos++
            console.log(`\n#### ${player02.name.toUpperCase()} venceu. ####\n`);
        } else {
            console.log(`\n#### EMPATOU! ####\n`);
        }
    } else if (escolherPista === 2) {
        console.log(`${player01.name.toUpperCase()} jogou o dado e deu: ${dadoPlayer01}`);
        resultPlay01 = player01.poder + dadoPlayer01;
        console.log(`Poder: ${player01.poder} + dado: ${dadoPlayer01} = ${resultPlay01}\n`);
        console.log(`${player02.name.toUpperCase()} jogou o dado e deu: ${dadoPlayer02}`);
        resultPlay02 = player02.poder + dadoPlayer02;
        console.log(`Poder: ${player02.poder} + dado: ${dadoPlayer02} = ${resultPlay02}\n`);

        if (resultPlay01 > resultPlay02) {
            player01.pontos++
            player02.pontos--
            console.log(`\n#### ${player01.name.toUpperCase()} venceu. ####\n`);

            if (player02.pontos < 0) {
                player02.pontos = 0;
            }
        } else if (resultPlay02 > resultPlay01) {
            player02.pontos++
            player01.pontos--
            console.log(`\n#### ${player02.name.toUpperCase()} venceu. ####\n`);
            if (player01.pontos < 0) {
                player01.pontos = 0;
            }
        } else {
            console.log(`\n#### EMPATOU! ####\n`);
        }
    }
}

module.exports = { actionRacer };