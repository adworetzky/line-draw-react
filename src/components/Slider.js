export default function Slider(props) {
  const { id, max, min, ...rest } = props;
  return <input type="range" id={id} max={max} min={min} {...rest} />;
}
