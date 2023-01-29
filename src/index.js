const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    for (let key in MORSE_TABLE) {

    }
    let arrExpr = expr.match(/.{1,2}/g);
    let result = [];
    for (let j = 0; j < arrExpr.length; j = j + 5) {
        let str = '';
        for (let i = j; i < j + 5; i++){
            switch (arrExpr[i]) {
                case '11': arrExpr[i] = '-';
                str = `${str}${'-'}`;
                break;
                case '10': arrExpr[i] = '.';
                str = `${str}${'.'}`;
                break;
                case '**': arrExpr[i] = '**';
                str = '**';
                break;
            }   
        }
        if (str === '**') {
            result.push(' ');
        }
            for (let key in MORSE_TABLE) {
                if (key === str) {
                    result.push(MORSE_TABLE[key]);
                }
        }
    }
    return result.join('');
}

module.exports = {
    decode
}