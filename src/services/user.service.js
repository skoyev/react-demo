import axios from 'axios';

export const userService = {
    fetchAll
};

const URL = 'https://www.stackadapt.com/coinmarketcap/map';

/**
 * Load Data
 */
function fetchAll(){
    return axios.get(URL);
}