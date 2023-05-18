const URL = 'https://randomuser.me/api/';

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  // destructure
  const person = data.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;


/*

The code appears to be fetching a random user from 
the "randomuser.me" API and then extracting various 
information from the response, such as the user's name, 
age, phone number, email, address, and password. 
The extracted information is then returned as an object.

*/