import React, { useState } from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import styles from "./calendar.module.css";
// import moment from "moment";

const { RangePicker } = DatePicker;

export const Calendar = ({ setFocus }) => {
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();

  // const dateFormat = 'YYYY/MM/DD';

  const disabledDate = (current) => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "days") > 29;
    const tooEarly = dates[1] && dates[1].diff(current, "days") > 29;
    return tooEarly || tooLate;
  };

  const onOpenChange = (open) => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };

  return (
    <RangePicker
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      className={styles.calendar}
      value={hackValue || value}
      disabledDate={disabledDate}
      onCalendarChange={(val) => setDates(val)}
      onChange={(val) => setValue(val)}
      onOpenChange={onOpenChange}
      // defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
      // format={dateFormat}
      showToday
    />
  );
};
