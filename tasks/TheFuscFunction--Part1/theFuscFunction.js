function fusc(n){
    if(n === 0) return 0
    if(n === 1) return 1
    if(n % 2) return fusc(Math.floor(n/2)) + fusc(Math.ceil(n/2))
    return fusc(n/2)
}