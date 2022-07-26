export default function scopeTest() {
    // async作为一个关键字放在函数的前面，表示该函数是一个异步函数，该函数的执行不会阻塞后续代码的执行
    // async function timeout() {
    //     return "hello word";

    // }

    // const a = timeout();
    // //  Promise   __proto__: Promise  [[PromiseStatus]]: "resolved"   [[PromiseValue]]: "hello word"
    // //async返回的是 promise 对象
    // console.log(a);
    // // 我在后面，但是我是先执行的
    // console.log("我在后面，但是我是先执行的");
    // a.then(res => {
    //     console.log(res)
    // })


    const func = function(msg){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(msg)
            }, 2000);
        })
    
    }
    const test = async () => {
        let message = "hello1";
        let result = await func(message);
        console.log(result);
        console.log("我是hello2");
        return result;
    };
    test().then(result => {
        console.log("输出", result);
    });

    // let a;
    // async function f5(){
    //     await Promise.reject("error");
    //     a = await 1;
    // }
    // f5().then(v=>console.log(a)).catch(err => {
    //     console.log(err)
    // });

    // let a3;
    // async function f6(){
    //     try{
    //          await Promise.reject("error");
    //     }catch{
    //         console.log(error);
    //     }
    //     a3 = await 123;
    //     return a3;
    // }

    // f6().then((v)=>console.log(a3));
}