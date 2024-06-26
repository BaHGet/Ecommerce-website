import * as Query from './queries';
const url = 'https://server-serve.000webhostapp.com/graphql'; 

export const getAllProducts = async () => {
    const query = Query.GET_PRODUCTS; 
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });
        
        const responseBody = await response.json();
        
        if (response.ok) {
        return responseBody.data;
        } else {
        throw new Error(responseBody.errors ? responseBody.errors.map(e => e.message).join(', ') : 'Unknown error');
    }
}