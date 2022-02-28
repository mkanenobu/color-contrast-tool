import { ChangeEvent, useState } from "react";
import Color from "color";
import styles from "./ColorForm.module.css";
import { Spacer, Input, Grid } from "@geist-ui/core";
import { parseColor } from "../logic/parse_color";
import { classNames } from "../logic/class_names";

const ColorTile: React.VFC<{ color: Color | null }> = (props) => {
  if (props.color) {
    return (
      <div
        style={{ backgroundColor: props.color.string() }}
        className={styles.tile}
      />
    );
  }

  return <div className={classNames([styles.tile, styles.tileDisabled])} />;
};

interface ColorFormProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
}

export const ColorForm: React.VFC<ColorFormProps> = (props) => {
  return (
    <Grid className={styles.container}>
      <Input
        placeholder="input color..."
        value={props.value}
        onChange={props.onChange}
      />
      <Spacer width={"4px"} />
      <ColorTile color={parseColor(props.value)} />
    </Grid>
  );
};
