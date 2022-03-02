import { Text, Spacer, Button, Card } from "@geist-ui/core";
import ChevronUpDown from "@geist-ui/icons/ChevronUpDown";
import { ColorForm } from "./ColorForm";

interface LayoutLeftProps {
  textColor: string;
  backgroundColor: string;
  onChangeTextColor: (color: string) => void;
  onChangeBackgroundColor: (color: string) => void;
  onClickSwapButton: () => void;
  contrast: number | null;
}

export const LayoutLeft: React.VFC<LayoutLeftProps> = (props) => {
  return (
    <>
      <Card>
        <Text>Text color</Text>
        <ColorForm value={props.textColor} onChange={props.onChangeTextColor} />
      </Card>

      <Spacer />

      <Button
        onClick={props.onClickSwapButton}
        icon={<ChevronUpDown size={16} />}
        style={{ width: "32px" }}
        auto
        scale={2 / 3}
      />

      <Spacer />

      <Card>
        <Text>Background color</Text>
        <ColorForm
          value={props.backgroundColor}
          onChange={props.onChangeBackgroundColor}
        />
      </Card>

      <Spacer height={2} />

      <Card>
        <Text>Color Contrast</Text>
        <Text b i>
          {typeof props.contrast === "number"
            ? Math.floor(props.contrast * 100) / 100
            : "Untestable"} : 1
        </Text>
      </Card>
    </>
  );
};
