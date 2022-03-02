import { useState } from "react";
import Color from "color";
import { Text, Card, Input } from "@geist-ui/core";
import { convertToStyle } from "../logic/parse_color";

interface ExampleProps {
  textColor: Color | null;
  backgroundColor: Color | null;
}

export const Example: React.VFC<ExampleProps> = (props) => {
  const [sampleText, setSampleText] = useState<string>("Hello World!");

  return (
    <>
      <Input
        value={sampleText}
        onChange={(e) => setSampleText(e.target.value)}
        width="100%"
      />

      <Text
        style={{
          ...convertToStyle(props),
          padding: "4px 8px",
          whiteSpace: "pre",
        }}
      >
        {sampleText || " "}
      </Text>

      <Text
        style={{
          ...convertToStyle(props),
          padding: "4px 8px",
          fontWeight: "bold",
          whiteSpace: "pre",
        }}
      >
        {sampleText || " "}
      </Text>

      <Text
        style={{
          ...convertToStyle(props),
          padding: "4px 8px",
          fontSize: "18px",
          whiteSpace: "pre",
        }}
      >
        {sampleText || " "}
      </Text>
    </>
  );
};
