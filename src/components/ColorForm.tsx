import { useMemo } from "react";
import Color from "color";
import { HexColorPicker } from "react-colorful";
import { Spacer, Input, Modal, Text, useModal } from "@geist-ui/core";
import styles from "./ColorForm.module.css";
import { parseColor } from "../logic/parse_color";
import { classNames } from "../logic/class_names";
import { ModalHooksBindings } from "@geist-ui/core/dist/use-modal";

const ColorTile: React.VFC<{ color: Color | null; onClick?: () => void }> = (
  props
) => {
  if (props.color) {
    return (
      <div
        style={{ backgroundColor: props.color.string() }}
        className={styles.tile}
        onClick={props.onClick}
      />
    );
  }

  return <div className={classNames([styles.tile, styles.tileDisabled])} />;
};

interface ColorFormProps {
  value: string;
  onChange: (color: string) => unknown;
}

interface PickerModalProps {
  modalBindings: ModalHooksBindings;
  formProps: ColorFormProps;
  onClose: () => void;
}

const PickerModal: React.VFC<PickerModalProps> = ({
  modalBindings,
  formProps,
  onClose,
}) => {
  const parsedColor = useMemo(
    () => parseColor(formProps.value),
    [formProps.value]
  );

  return (
    <Modal {...modalBindings}>
      <Modal.Content className={styles.modalContent}>
        <HexColorPicker
          color={parsedColor?.hex() ?? undefined}
          onChange={(color) => formProps.onChange(color)}
        />

        <Spacer />

        <Text>{formProps.value}</Text>
        <ColorTile color={parsedColor} />
      </Modal.Content>

      <Modal.Action passive onClick={onClose}>
        Close
      </Modal.Action>
    </Modal>
  );
};

export const ColorForm: React.VFC<ColorFormProps> = (props) => {
  const { setVisible, bindings } = useModal(false);

  return (
    <div className={styles.container}>
      <Input
        placeholder="input color..."
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />

      <Spacer width={1} />

      <ColorTile
        color={parseColor(props.value)}
        onClick={() => setVisible(true)}
      />

      <PickerModal
        modalBindings={bindings}
        formProps={props}
        onClose={() => setVisible(false)}
      />
    </div>
  );
};
