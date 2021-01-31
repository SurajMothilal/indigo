/**
 * 
 * This file exports fetching utils
 */
const getImages = async (url = "https://picsum.photos/v2/list") => {
    const results = await fetch(url).then((response) => response.json())
    return results
}

export default getImages