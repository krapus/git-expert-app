export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Rb8wbCXBdw5ZItHImPzbRy0lCy6aNe6j`;    
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(item => {
        return {
            id: item.id,
            title: item.title.substring(0,10),
            url: item.images?.downsized_medium.url
        }
    })
    return gifs;
}