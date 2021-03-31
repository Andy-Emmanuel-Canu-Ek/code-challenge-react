const baseUrl = "http://localhost:3001/api";

export const fetchWitoutToken = ( endpoint: string, data: {}, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    console.log('fetch to', url, 'with data ', data);
    console.log('Method', method);

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

export const fetchWithToken = ( endpoint: string, data: {}, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    }
}
