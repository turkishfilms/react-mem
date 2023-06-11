interface Titleprops {
  children: string;
}
const Title = ({ children }: Titleprops) => {
  return <h1 className= "h1">{children}</h1>;
};

export default Title;
