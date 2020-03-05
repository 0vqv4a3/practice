/* const prm = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("jd")
    }, 10000)
    const a = "asdfjklgjiouewyabfjkdsavdafsafdsagsagdsagdatgferwqgtfasgdas"
    const b = function () {
        for (let i of a) {
            console.log(i);
        }
    }
    b();
}); */

/* prm.then((res) => {
    console.log(res);
}); */

const prom = (x, y) => {
    return new Promise((resolve, rejected) => {

        if (typeof x !== "number" || typeof y !== "number") {
            rejected();
        } else {
            resolve(x + y);
        }
    });
};

prom(0, 0)
    .then((response) => {
        console.log(response);
        console.log('s');
        return response.json()
    })
    .then((response) => {
        console.log(promise.value);
    })
    .catch((response) => {
        console.log("error");
        console.log(response);
    });