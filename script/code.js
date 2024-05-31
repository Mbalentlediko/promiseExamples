document.querySelector('[divisiion]').addEventListener('click',)

function division() {
    let fOp = document.querySelector('[firstOp]').value
    let Output= document.querySelector('[Output]')
    let sOp= +document.querySelector('[secOp]').value
    //Make a promise
    let myPromise = new Promise( (resolve , reject) => {
        if (fOp<1 && sOp<1) {
            reject('You can not a number by zero')
            resolve(fOp/sOp)
        }
    }) 
}