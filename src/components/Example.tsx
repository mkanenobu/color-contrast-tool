import Color from "color";
import { Text, Grid } from "@geist-ui/core";
import { convertToStyle } from "../logic/parse_color";

interface ExampleProps {
  text: string;
  textColor: Color | null;
  backgroundColor: Color | null;
}

export const Example: React.VFC<ExampleProps> = (props) => {
  return (
    <Grid>
      <Text style={{ ...convertToStyle(props), padding: "4px 8px" }}>
        Hello, World!
      </Text>
      <Text
        style={{
          ...convertToStyle(props),
          padding: "4px 8px",
        }}
      >
        Hello, World!
      </Text>
      <Text
        style={{
          ...convertToStyle(props),
          padding: "4px 8px",
          fontSize: "18px",
        }}
      >
        Hello, World!
      </Text>
    </Grid>
  );
};
