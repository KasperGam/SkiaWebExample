import { Canvas, Circle, Group } from "@shopify/react-native-skia";

export type HelloWorldProps = {
  width: number;
  height: number;
  r: number;
};

export const HelloWorld = ({
  width,
  height,
  r,
}: HelloWorldProps): React.JSX.Element => {
  return (
    <Canvas style={{ width, height }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
};
