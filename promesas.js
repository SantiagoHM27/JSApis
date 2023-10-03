const datos = [1, 2, 3, 4, 5];

const getDataPromise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            //resolve(datos);
            reject('no se pudo :(');
        }, 3000);
    }
);

//console.log(getDataPromise);

console.log('inicia promesa')
getDataPromise.then((result) => {
    console.log(result);
    console.log('termina promesa')
}).catch(error => console.log(error));