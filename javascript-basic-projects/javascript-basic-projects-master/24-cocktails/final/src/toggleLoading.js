import get from './getElement.js';

const loading = get('.loading');

export const showLoading = () => {
  loading.classList.remove('hide-loading');
};
export const hideLoading = () => {
  loading.classList.add('hide-loading');
};


/*

These are utility functions for showing and hiding a 
loading spinner on the page while data is being fetched 
or loaded. The showLoading function removes the 
hide-loading class from the loading element, which is 
responsible for hiding it by default using CSS. The 
hideLoading function adds the hide-loading class back 
to the loading element to hide it again.

*/
