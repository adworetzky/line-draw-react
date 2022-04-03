export default function Input(props) {
  const { id, placeholder, ...rest } = props;
  return (
    <>
      <input type="text" id={id} placeholder={placeholder} {...rest}></input>
    </>
  );
}
