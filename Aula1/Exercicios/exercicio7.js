let alturas = [1.70,1.65,1.55,1.89,1.90,1.56,1.63,1.71,1.73,1.81,1.89,1.64,1.59,1.49,1.98]
let idades = [15,16,18,15,17,25,34,37,49,56,57,24,23,19,23]
let opiniao = [1,3,2,1,3,2,2,1,3,3,3,1,1,2,1]

let alturas1 = []
let idades1 = []
let alturas2 = []
let idades2 = []
let alturas3 = []
let idades3 = []

let mediaalturas1= 0
let mediaidades1 = 0
let mediaalturas2 = 0
let mediaidades2 = 0
let mediaalturas3 = 0
let mediaidades3 = 0

for ( i = 0; i < alturas.length ; i++ ){
    if ( opiniao[i] == 1 ) {
        alturas1.push(alturas[i])
        idades1.push(idades[i])
    }else if ( opiniao[i] == 2 ) {
        alturas2.push(alturas[i])
        idades2.push(idades[i])
    }else if ( opiniao[i] == 3 ) {
        alturas3.push(alturas[i])
        idades3.push(idades[i])
    }
}
// alert(`Media das alturas1 ${alturas1}, idades ${idades1}`)

for ( i = 0 ; i < alturas1.length ; i++ ) {
    mediaalturas1 = mediaalturas1 + alturas1[i]
    mediaidades1 = mediaidades1 + idades1[i]
}
alert(`Media de altura após somada ${mediaalturas1}`)
mediaalturas1 = ( mediaalturas1 / alturas1.length)
mediaidades1 = ( mediaidades1 / idades1.length )



for ( i = 0 ; i < alturas1.length ; i++ ) {
    mediaalturas2 = mediaalturas2 + alturas2[i]
    mediaidades2 = mediaidades2 + idades2[i]
}
mediaalturas2 = mediaalturas2 / alturas2.length
mediaidades2 = mediaidades2 / idades2.length

for ( i = 0 ; i < alturas3.length ; i++ ) {
    mediaalturas3 = mediaalturas3 + alturas3[i]
    mediaidades3 = mediaidades3 + idades3[i]
}
mediaalturas3 = mediaalturas3 / alturas3.length
mediaidades3 = mediaidades3 / idades3.length

alert(`A media de altura para quem respondeu regular é ${mediaalturas3} e a media de idade é ${mediaidades3}, Já para quem respondeu BOM a media de altura é ${mediaalturas2} e a media de idade é ${mediaidades2}, 
porem para quem respondeu Otimo a media de altura é ${mediaalturas1} e a media de idade é ${mediaidades1}`)


