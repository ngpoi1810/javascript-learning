export const getJSON = async function(url) {
    try {
        const res = await fetch(url)
    } catch (err){
        throw err;
    }
}