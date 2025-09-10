const players = require('./data/kartCharacters.json');
const { gerarRandom } = require('./utils/gerarRandom.js');
const { actionRacer } = require('./controller/action.js');
const pista = require('./data/blocoDePista.js');

const player01 = players.players[1];
const player02 = players.players[3];

console.log(`\nPersonagens escolhidos... Vamos começar!!!`)
console.log(`\nA disputa será entre ${player01.name.toUpperCase()} e ${player02.name.toUpperCase()}...\n`);

(async function main() {
    for (let i = 0; i < 5; i++) {
        let escolherPista = gerarRandom(3);
        let dadoPlayer01 = gerarRandom(6) + 1;
        let dadoPlayer02 = gerarRandom(6) + 1;

        console.log(`\n🏁 Volta: 0${i + 1} -------------------`);
        console.log(`Bloco de pista: ${pista[escolherPista]}`);

        await actionRacer(escolherPista, dadoPlayer01, dadoPlayer02, player01, player02);
    };

    console.log('Corrida finalizada.');

    console.log('Placar final:');
    console.log(`${player01.name.toUpperCase()}: ${player01.pontos}`);
    console.log(`${player02.name.toUpperCase()}: ${player02.pontos}\n`);
    console.log("#####################");
    if (player01.pontos > player02.pontos) {
        console.log(` O campeão é: ${player01.name.toUpperCase()} 🏆`);
    } else {
        console.log(` O campeão é: ${player02.name.toUpperCase()} 🏆`);
    }
    console.log("#####################");
})()