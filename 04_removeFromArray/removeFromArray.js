const removeFromArray = function(...args) {
    let array = args[0];
    let modifiedArray = [];

    array.forEach((item) =>{
    if(!args.includes(item)) {
        modifiedArray.push(item);
     }
    });

    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
