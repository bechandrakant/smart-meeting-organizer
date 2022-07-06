import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setStartTime, setEndTime } from "../../redux/meetingSlice";
import styles from './Timepicker.module.scss'

const TimePicker = ({label}) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState("00:00");

  return (
    <div className={styles.container}>
      <label className={styles.label} for="timepicker">{label}</label>

      <input 
        className={styles.input} 
        type="time" 
        name="timepicker" 
        required  
        value={time} 
        onChange={(e) => {
          setTime(e.target.value);
          if (label.toLowerCase().includes("start")) {
            dispatch(setStartTime(e.target.value))
          } else {
            dispatch(setEndTime(e.target.value))
          }
        }}/>
    </div>
  )
}

export default TimePicker