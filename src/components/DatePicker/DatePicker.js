import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setMeetingDate } from '../../redux/meetingSlice';
import styles from "./DatePicker.module.scss";

const DatePicker = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState("2022-07-06");

  return (
    <div className={styles.container} data-testid="date-picker">
      <label for="meeting" className={styles.label}>
        Start date:
      </label>

      <input
        type="date"
        id="meeting"
        name="meeting"
        value={date}
        min="2022-07-06"
        max="2022-12-31"
        className={styles.input}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch(setMeetingDate(e.target.value));
        }}
      ></input>
    </div>
  );
}

export default DatePicker