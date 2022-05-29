function january(name) {
    console.log(name === null || name === void 0 ? void 0 : name.split(','));
}
function february(name) {
    console.log(name === null || name === void 0 ? void 0 : name.split(','));
}
function march(name) {
    console.log(name === null || name === void 0 ? void 0 : name.split(','));
}
var brand = 'ja,nua,ry';
january(brand);
february(brand);
march(brand);
var monday = [{ a: 1 }, { b: 1 }, { c: 1 }];
console.log({ monday: monday });
// let tuesday = monday.find(curr => curr.a === 2)
