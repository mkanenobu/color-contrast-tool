import type { useWCAGStatus, Status } from "../logic/wcag";
import { Spacer, Text, Badge, Card } from "@geist-ui/core";
import type { BadgeTypes } from "@geist-ui/core/dist/badge";

const statusMap: Record<Status, BadgeTypes> = {
  AA: "warning",
  AAA: "success",
  Failed: "error",
  Untestable: "secondary",
};

const StatusBadge: React.VFC<{ status: Status }> = ({ status }) => {
  return <Badge type={statusMap[status]}>{status}</Badge>;
};

export const WCAGStatus: React.VFC<{
  wcagStatus: ReturnType<typeof useWCAGStatus>;
}> = ({ wcagStatus }) => {
  return (
    <Card>
      <Text>WCAG 2.0</Text>
      <Card>
        <Text>Normal Text</Text>
        <StatusBadge status={wcagStatus.normalText} />
      </Card>

      <Spacer />

      <Card>
        <Text>Large Text</Text>
        <StatusBadge status={wcagStatus.largeText} />
      </Card>
    </Card>
  );
};
