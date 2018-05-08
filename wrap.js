function wrap(string, num) {
    let result = '';
    for(let i = 0; i < string.length; i++) {
        if((i+1) % num === 0 ) {
            result += string[i] + '\n';
        } else {
            result += string[i];
        }
    } 
    return result;
}

module.exports = wrap;