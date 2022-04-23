
const alphabet = "AhojElpřejivšcnšíktýmdaárz!. ,:-)/BCDFGHKLMNST"
const res = "Ahoj Elo, přeji všechno nejlepší k Tvým devatenáctým narozeninám! :-)";
const target = document.querySelector("#js_target");
const result = document.querySelector("#js_output");
let GLOBAL_BLOCK = false;
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

class Config {
    constructor() {
        this.block_it = false;
    }

    set block(x) {
        this.block_it = x;
    }
    get status() {
        return this.block_it;
    }
}

let info = new Config();

let confetti = new Confetti('js_target');

confetti.setCount(175);
confetti.setSize(3);
confetti.setPower(25);
confetti.setFade(false);
confetti.destroyTarget(false);

target.addEventListener("click", () => {

    const to = setTimeout(() => {
        info.block = true;
    }, 9900);

    setTimeout(() => {
        result.style.wordBreak = "initial";
    }, 7000);

    target.classList.add("c-wrapper__button--active");
    result.parentElement.classList.add("c-wrapper__output--active");

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
        result.innerHTML = joined;

        if (block && !info.status) {
            setTimeout(() => {
                cycle(joined);
            }, 50);
        }
        else {
            clearTimeout(to);
            result.innerHTML = res;
        }
    }
    cycle(output);

});