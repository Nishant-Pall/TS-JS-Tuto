const uno = () => {
    return "I am one"
}

// const dos = () => {
//     setTimeout(() => {
//         return "I am two"
//     }, 3000);
// }
// adding async for now gives us Promise {undefined}

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am two")
        }, 1000);
    })
}

const tres = () => {
    return "I am three"
}

// const callMe = () => {
//     let valOne = uno()
//     console.log(valOne);

//     let valTwo = dos()
//     console.log(valTwo);

//     let valThree = tres()
//     console.log(valThree);
// }

// the upper portion gives us:
// I am one
// undefined
// I am three

const callMe = async () => {
    let valOne = uno()
    console.log(valOne);

    // will get output after 3 seconds, as in, it makes a queue
    let valTwo = await dos()
    console.log(valTwo);

    let valThree = tres()
    console.log(valThree);
}

callMe()


// Promise is something that has two states, either
// It's gonna fulfil or fail
