const paginate = (followers) => {
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })
  return newFollowers
}

export default paginate


/*

This code exports a function called paginate that takes 
an array of follower objects as its argument. The 
function first sets the itemsPerPage constant to 10 
and calculates the numberOfPages by dividing the length 
of the followers array by itemsPerPage and rounding up 
to the nearest integer using the Math.ceil method.

The function then creates a new array of length 
numberOfPages using the Array.from method. For each 
element of the new array, the function uses the index 
of the element to calculate the start and end indices 
of the corresponding subset of the followers array. 
It does this using the slice method, which returns a 
new array containing the elements of the followers 
array from the start index up to, but not including, 
the end index.

Finally, the function returns the new array, which 
contains a subset of followers for each page.

Overall, this code defines a function that paginates 
an array of follower objects by dividing it into 
subsets of a fixed size and returning an 
array of arrays, where each sub-array represents a 
page of followers.

*/