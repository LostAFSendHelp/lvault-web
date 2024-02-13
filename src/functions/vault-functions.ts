import axios from 'axios';

export const getVaults = () => {
    return axios.get<Result<[Vault]>>("http://127.0.0.1:8080/vaults").then(response => {
        console.log(response);
        return response.data.data;
    });
}

export const wait = (duration: number) => {
    return new Promise(resolve => setTimeout(resolve, duration));
}