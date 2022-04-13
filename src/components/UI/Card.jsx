import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // acting as 2 seperate classes because a white space is used.

  return <div className={classes}>{props.children}</div>;
};

/*

* props.children => children is a reserved name, we actually don't send a children prop in a custom component that we will make.

! The value of the children prop is the content (all the content) that is present between your custom card component.

* we can also say that with the help of the props.children, we can make the card class act as a utility class just like a css framework does.

*/

export default Card;
