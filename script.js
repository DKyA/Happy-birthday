
const alphabet = "AhojElpřejivšcnšíktýmdaárz!. ,:-)/BCDFGHIJKLMNST"
const res = "Ahoj Elo, přeji všechno nejlepší k Tvým devatenáctým narozeninám! :-)";
const output = (() => {
    let res = [];
    for(let i = 0; i < 65; i++) {
        res.push("_");
    }
    res = res.join('');
    return res;
})();
let random_character = (() => {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
});

let confetti = new Confetti('js_target');

confetti.setCount(175);
confetti.setSize(3);
confetti.setPower(25);
confetti.setFade(false);
confetti.destroyTarget(false);

document.querySelector("#js_target").addEventListener("click", () => {

    function cycle(base) {
        let block = false;
        let splitted = base.split('');
        for (let i = 0; i < res.length; i++) {
            if (splitted[i] == res[i]) {
                continue;
            };
            splitted[i] = random_character();
            block = true;
        }
        let joined = splitted.join('')
        document.querySelector("#js_output").innerHTML = joined;

        if (block) {
            setTimeout(() => {
                cycle(joined);
            }, 50);
        }
        else {
            document.querySelector("#js_output").style.wordBreak = "initial";
        }
    }
    cycle(output);

});