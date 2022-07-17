
const alphabet = "wertuiopasdfghjklycvbnm ,.-!¨()/HSELMIAO"
const res = "Hi Silvia, wish you all the best for your birthday! Enjoy your trip to Sicily :)";
const target = document.querySelector("#js_target");
const result = document.querySelector("#js_output");
let GLOBAL_BLOCK = false;
const output = (() => {
    let res = [];
    for(let i = 0; i < 68; i++) {
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
confetti.destroyTarget(true);

target.addEventListener("click", () => {

    target.classList.add("c-wrapper__button--hiding");

    setTimeout(() => {
        target.children[0].innerHTML = "Všechno nejlepší!!!";
        target.classList.remove("c-wrapper__button--hiding");
        target.classList.add("c-wrapper__button--shown");

    }, 300);

    const to = setTimeout(() => {
        info.block = true;
    }, 6000);

    setTimeout(() => {
        result.style.wordBreak = "initial";
    }, 4000);

    setTimeout(() => {
        result.parentElement.classList.add("c-wrapper__output--finish");
    }, 6500);

    target.classList.add("c-wrapper__button--active");
    result.parentElement.classList.add("c-wrapper__output--active");

    let i = 0;
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
        if (block && !info.status && i < 50) {
            setTimeout(() => {
                cycle(joined);
            }, 30);
        }
        else {
            clearTimeout(to);
            result.innerHTML = res;
        }
    }
    cycle(output);

});