function print(firstChar, secondChar) {
    let result = '';
    let star =  Math.min(firstChar.charCodeAt(),secondChar.charCodeAt());
    let end = Math.max(firstChar.charCodeAt(),secondChar.charCodeAt());
    for (let i = star+1; i <= end-1; i++) {
        const currentChar = String.fromCharCode(i);
        result += `${currentChar} `;

    }
    console.log(result.trimEnd());
}
print('C','#');