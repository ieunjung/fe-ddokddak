interface Props {
  x?: number;
  y?: number;
}
const Spacer = (props: Props) => {
  return <div style={{ width: props.x, height: props.y }}></div>;
};

export default Spacer;
