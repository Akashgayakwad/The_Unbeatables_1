export function PostData(type, userData) {
    let BaseURL = 'https://a1d4d44f.ngrok.io/'

    return new Promise((resolve,reject) => {
        fetch(BaseURL+type, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
            reject(error);
        });
    });
}