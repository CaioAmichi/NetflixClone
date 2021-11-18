const API_KEY = 'fd7d97c1844e64ff54b4c61c17af9496'
const API_BASE = 'https://api.themoviedb.org/3'


const basicFatch = async (endPoint) => {

    const req = await fetch(`${API_BASE}${endPoint}`)
    const json = await req.json()

    console.log(json)
    return json
}


export default {    

    getHomeList: async () => {
        return [
            {
                slug:'originals',
                title: 'Originais do Netflix',
                items: await basicFatch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
                
            },
            {
                slug:'trendings',
                title: 'Recomendados pra você',
                items: await basicFatch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title: 'Em alta',
                items: await basicFatch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug:'action',
                title: 'Ação',
                items:await basicFatch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title: 'Comedia',
                items:await basicFatch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title: 'Terror',
                items:await basicFatch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title: 'Romance',
                items:await basicFatch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'documentary',
                title: 'Documentarios',
                items:await basicFatch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },

        ]
    },

    getMovieInfo: async(movieId,type) =>{
        let info = {}

        if(movieId){
            switch(type){
                case 'movie':
                   info = await basicFatch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`) 
                break;
                case 'tv':
                    info = await basicFatch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info=null

            }
        }


        return info
    }

}