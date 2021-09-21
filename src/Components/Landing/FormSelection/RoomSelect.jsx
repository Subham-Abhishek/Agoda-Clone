import { Select } from "antd";
import styles from "./roomSelect.module.css";
import PeopleIcon from "@material-ui/icons/People";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

export default function RoomSelect({ setFocus }) {
  return (
    <div className={styles.select_the_room}>
      <PeopleIcon className={styles.peopleIcon} />
      <Select
        className={styles.roomSelect}
        dropdownClassName={styles.roomSelectOptions}
        size="large"
        showSearch
        bordered={false}
        placeholder="1 adult / 1 room"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value={1}>Solo Traveller</Option>
        <Option value={2}>Couple / Pair</Option>
      </Select>
    </div>
  );
}
