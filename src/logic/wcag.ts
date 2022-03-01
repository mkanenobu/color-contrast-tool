import { useMemo } from "react";
import type Color from "color";

export type Status = "AA" | "AAA" | "Failed" | "Untestable";

interface WCAGStatusParams {
  textColor: Color | null;
  backgroundColor: Color | null;
}

const threshold = {
  normalText: {
    AA: 4.5,
    AAA: 7,
  },
  largeText: {
    AA: 3,
    AAA: 4.5,
  },
};

interface Result {
  normalText: Status;
  largeText: Status;
}

const calcWCAGStatus = (
  params: WCAGStatusParams & { size: "normalText" | "largeText" }
): Status => {
  if (params.textColor === null || params.backgroundColor === null) {
    return "Untestable";
  }

  const contrast = params.textColor.contrast(params.backgroundColor);
  if (contrast < threshold[params.size].AA) {
    return "Failed";
  }

  if (contrast > threshold[params.size].AAA) {
    return "AAA";
  }

  return "AA";
};

export const useWCAGStatus = (params: WCAGStatusParams): Result => {
  const normalText = useMemo(
    () => calcWCAGStatus({ ...params, size: "normalText" }),
    [params]
  );
  const largeText = useMemo(
    () => calcWCAGStatus({ ...params, size: "largeText" }),
    [params]
  );

  return { normalText, largeText };
};
