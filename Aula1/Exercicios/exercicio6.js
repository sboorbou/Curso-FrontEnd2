let alturas_ = [1.70,1.65,1.55,1.89,1.90,1.56,1.63,1.71,1.73,1.81,1.89,1.64,1.59,1.49,1.98]

let menor = 4
let maior = 0

for ( let i = 0 ; i <= alturas_.length ; i++ ) {
    if ( menor >= alturas_[i] ) {
        menor = alturas_[i]
    }
    if ( maior <= alturas_[i]) {
        maior = alturas_[i]
    }

}

alert(`a maior altura foi ${maior} e a menor altura foi ${menor}`)