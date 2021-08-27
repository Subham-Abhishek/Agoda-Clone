import { Select } from "antd";
import styles from "./roomSelect.module.css";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

export default function RoomSelect({ setFocus }) {
  return (
    <Select
      className={styles.roomSelect}
      size="large"
      showSearch
      placeholder="1 adult / 1 room"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value={1}>1 adult / 1 room</Option>
      <Option value={2}>1 adult / 2 room</Option>
    </Select>
  );
}
