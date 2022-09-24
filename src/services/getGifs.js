const apiKey = 'api_key=KEHi0uOEGfS6mAKCAgbgP0MdJanif1eZ'


export default function getGifs ({keyword}) {
    const apiURL= `https://api.giphy.com/v1/gifs/search?${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
        return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            const gifsFetch = data.map(image =>{
            const {images, title, id} = image
            const {url} = images.downsized_medium
             return {title, id, url}
            })
            return gifsFetch
})
}    