import { useState } from "react";
import { Page, Display, Spacer, Text, Button } from "@geist-ui/core";
import { ChevronUpDown } from "@geist-ui/icons";
import { ColorForm } from "./components/ColorForm";
import { Example } from "./components/Example";
import { parseColor } from "./logic/parse_color";

export const App: React.VFC = () => {
  const [textColor, setTextColor] = useState<string>("#000000");
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF");

  const [sampleText, setSampleText] = useState<string>("Hello World!");

  return (
    <Page>
      <Display>
        <Text>Text color</Text>
        <ColorForm
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />

        <Spacer />

        <Button
          onClick={() => {
            const _textColor = textColor;
            setTextColor(backgroundColor);
            setBackgroundColor(_textColor);
          }}
          icon={<ChevronUpDown />}
          auto
          scale={2 / 3}
        />

        <Text>Background color</Text>

        <ColorForm
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />

        <Spacer />

        <Text>Example</Text>
        <Example
          text={sampleText}
          textColor={parseColor(textColor)}
          backgroundColor={parseColor(backgroundColor)}
        />

        <Text>WCAG 2.0</Text>
      </Display>
    </Page>
  );
};
