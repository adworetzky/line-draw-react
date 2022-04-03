export default function Button(props) {
  const { ...rest } = props;
  return <button {...rest}>{props.children}</button>;
}
