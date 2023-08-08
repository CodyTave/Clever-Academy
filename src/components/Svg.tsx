interface props {
  src: string;
  Class?: string;
}
function Svg({ src, Class }: props) {
  return (
    <object className={`${Class}`} type="image/svg+xml" data={src}></object>
  );
}

export default Svg;
