import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import DatePicker from '../../components/DatePicker/DatePicker';
import Dropdown from '../../components/Dropdown/Dropdown';
import TimePicker from '../../components/TimePicker/TimePicker';
import styles from "./AddMeeting.module.scss";
import { addTitle, state } from "../../redux/meetingSlice";

const AddMeeting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currState = useSelector(state);
  const [title, setTitle] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/select-rooms");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add meeting</h2>
      <input 
        type="text" 
        onChange={(e) => {
          dispatch(addTitle(title))
          setTitle(e.target.value)
        }}
        value={title}
        placeholder="Enter title"
        className={styles.inputBox}
        />
      <DatePicker />
      <TimePicker label="Start Time" />
      <TimePicker label="End Time" />
      <Dropdown
        label={"Select a Building"}
        options={[...currState.meeting.buildings]}
      />
      <div onClick={handleClick}>
        <Button label="Next" />
      </div>
    </div>
  );
}

export default AddMeeting