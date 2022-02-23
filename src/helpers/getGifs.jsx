
export const getGifs = async ( category ) =>{     
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=50&api_key=TOH7KYyn452h30J4PokPr9IC8piozssx`;
    const resp = await fetch(url)
    const {data} = await resp.json();
    const gifs = data.map( ({id, title, images}) => {
        return {
            id : id,
            title : title,
            url :images.fixed_width_downsampled.url
    }});
    return gifs
}   