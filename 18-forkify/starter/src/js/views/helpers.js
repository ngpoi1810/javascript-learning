const timeout = function (s) {
   return new Promise(function (_, reject) {
       setTimeout(function () {
           reject(new Error(`Request took too long! Timeout after ${s} second`));
       }, s * 1000);
   });
};

export const getJSON = async function(url) {
<<<<<<< HEAD
    try {
        const res = await fetch(url)
    } catch (err){
        throw err;
    }
=======
   try{
    const res = await fetch(url)
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`)
    return data
   }catch(err) {
    console.log(err);
   }
>>>>>>> 24f5ea31b1432fa9513e6c393e0e89df6cc622b4
}