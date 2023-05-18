import avatar from '../../../assets/default-avatar.svg';
const Person = ({ name, nickName = 'shakeAndBake', images }) => {
  // before optional chaining

  // const img =
  //   (images && images[0] && images[0].small && images[0].small.url) || avatar;
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
};
export default Person;


/*

This is a React component that renders a person's name, nickname, and image. It also uses optional chaining to safely access nested properties of the images object. If any of the nested properties are undefined, it will use a default avatar image. Here's a breakdown of the code:

    The component imports a default avatar image.
    The Person component takes in three props: name, nickName, and images.
    The component first uses optional chaining to safely access the first image's small.url property, and if that is undefined, it falls back to the default avatar image.
    The component then renders the image, name, and nickname in a div.


*/