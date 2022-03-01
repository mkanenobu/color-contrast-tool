import { useState, useMemo } from "react";
import { Page, Text, Grid } from "@geist-ui/core";
import { parseColor } from "./logic/parse_color";
import { useWCAGStatus } from "./logic/wcag";
import { LayoutLeft } from "./components/LayoutLeft";
import { LayoutRight } from "./components/LayoutRight";

export const App: React.VFC = () => {
  const [textColor, setTextColor] = useState<string>("#000000");
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF");

  const parsedTextColor = useMemo(() => parseColor(textColor), [textColor]);
  const parsedBackgroundColor = useMemo(
    () => parseColor(backgroundColor),
    [backgroundColor]
  );

  const contrastRatio = useMemo<number | null>(() => {
    if (!parsedTextColor || !parsedBackgroundColor) {
      return null;
    }
    return parsedTextColor.contrast(parsedBackgroundColor);
  }, [parsedTextColor, parsedBackgroundColor]);

  const wcagStatus = useWCAGStatus({
    textColor: parsedTextColor,
    backgroundColor: parsedBackgroundColor,
  });

  return (
    <Page>
      <Text h1>Color Contrast Tool</Text>
      <Grid.Container gap={2} direction="row" justify="space-evenly">
        <Grid xs={12} direction="column">
          <LayoutLeft
            textColor={textColor}
            backgroundColor={backgroundColor}
            onChangeTextColor={setTextColor}
            onChangeBackgroundColor={setBackgroundColor}
            onClickSwapButton={() => {
              const _textColor = textColor;
              setTextColor(backgroundColor);
              setBackgroundColor(_textColor);
            }}
            contrast={contrastRatio}
          />
        </Grid>

        <Grid xs={12} direction="column">
          <LayoutRight
            textColor={parsedTextColor}
            backgroundColor={parsedBackgroundColor}
            wcagStatus={wcagStatus}
          />
        </Grid>
      </Grid.Container>
    </Page>
  );
};
