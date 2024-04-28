function dynamic_e(n){
    if(n === 0) return 1
    let f = 1
    let e = 1
    for(let i = 1; i <= n; i++){
        f *= i
        e += 1/f
    }
    return e
}

// console.log(e(100))

// console.log(dynamic_e(15))
// console.log(e(15))
module.exports = {dynamic_e};
