import { Select } from "antd";
import styles from "./roomSelect.module.css";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onFocus() {
  console.log("focus");
}
export default function RoomSelect() {
  return (
    <Select
      className={styles.roomSelect}
      size="large"
      showSearch
      placeholder="1 adult / 1 room"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value={1}>1 adult / 1 room</Option>
      <Option value={2}>1 adult / 2 room</Option>
    </Select>
  );
}
