import Color from "color";

type Status = "AA" | "AAA" | "failed" | "untestable";

interface WCAGCheckProps {
  textColor: Color | null;
  backgroundColor: Color | null;
}

export const WCAGCheck: React.VFC<WCAGCheckProps> = (props) => {
  return <div />;
};
