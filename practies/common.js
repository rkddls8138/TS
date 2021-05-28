const removeHypen = (param) => { param.replace(/-/g, '') };
const removeComma = (param) => { param.replace(/,/g, '') };

function reMind(param) {
    return param.replace(/-/g, '')
};
console.log(removeHypen);
console.log(reMind("2021-05-28"));

