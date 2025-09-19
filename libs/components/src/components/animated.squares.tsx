import { Canvas, Rect } from "@shopify/react-native-skia";
import { useEffect, useMemo } from "react";
import {
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const colors = [
  "blue",
  "red",
  "green",
  "yellow",
  "brown",
  "orange",
  "cyan",
  "magenta",
];

export type AnimatedSquaresProps = {
  width: number;
  height: number;
  squares: number;
  speed: number;
};

export const AnimatedSquares = ({
  width,
  height,
  squares,
  speed,
}: AnimatedSquaresProps): React.JSX.Element => {
  const xPos = useSharedValue(0);
  const size = Math.min(height / squares, width / 4);

  useEffect(() => {
    xPos.value = withRepeat(
      withSequence(
        withTiming(width - size, { duration: speed }),
        withTiming(0, { duration: speed }),
      ),
      -1,
    );
    return () => {
      xPos.value = 0;
    };
  }, [xPos, width, size, speed]);

  const rectList = useMemo(
    () =>
      Array(squares)
        .fill(0)
        .map((_, i) => i),
    [squares],
  );

  return (
    <Canvas style={{ width, height, borderColor: "#FFF", borderWidth: 1 }}>
      {rectList.map((i) => {
        return (
          <Rect
            key={`Animated-Squares-${i}`}
            x={xPos}
            y={i * size}
            width={size}
            height={size}
            color={colors[i % colors.length]}
          />
        );
      })}
    </Canvas>
  );
};
