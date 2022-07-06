import React from 'react'
import { useDispatch } from "react-redux";
import { setBuilding } from "../../redux/meetingSlice";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ label, options }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <label className={styles.label} for="building-select">{label}</label>

      <select name="building" className={styles.select} onChange={(e) => {
        dispatch(setBuilding(e.target.value))
      }}>
        {
          options && options.length &&
            options.map((option, index) => {
              return <option key={`Dropdown-${index}-${label}`} value={option} style={styles.option}>{option}</option>;
            })
        }
      </select>
      </div>
  );
}

export default Dropdown