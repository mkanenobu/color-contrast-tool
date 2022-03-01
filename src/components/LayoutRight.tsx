import { Text, Card, Spacer } from "@geist-ui/core";
import type Color from "color";
import { Example } from "./Example";
import { WCAGStatus } from "./WCAGStatus";
import type { useWCAGStatus } from "../logic/wcag";

interface LayoutRightProps {
  textColor: Color | null;
  backgroundColor: Color | null;
  wcagStatus: ReturnType<typeof useWCAGStatus>;
}

export const LayoutRight: React.VFC<LayoutRightProps> = (props) => {
  return (
    <>
      <Card>
        <Text>Example</Text>
        <Example
          textColor={props.textColor}
          backgroundColor={props.backgroundColor}
        />
      </Card>

      <Spacer />

      <WCAGStatus wcagStatus={props.wcagStatus} />
    </>
  );
};
