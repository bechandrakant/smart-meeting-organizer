import { useQuery, useMutation } from '@apollo/client';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { GET_ALL_MEETING_ROOMS, ADD_MEETING } from "../../graphql/queries";
import { setMeetingRoomId, state } from '../../redux/meetingSlice';

const SelectRooms = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currState = useSelector(state => state.meeting);

  const [addMeetingMutation, mutationState] = useMutation(ADD_MEETING, {
    context: { headers: { token: "a123gjhgjsdf6576" } },
  });

  const { loading, error, data } = useQuery(GET_ALL_MEETING_ROOMS, {
    context: { headers: { token: "a123gjhgjsdf6576" } },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const saveMeeting = (e) => {
    e.preventDefault();
    addMeetingMutation({
      variables: {
        id: parseInt(Math.random() * 10000),
        title: currState.title,
        date: currState.date,
        startTime: currState.startTime,
        endTime: currState.endTime,
        meetingRoomId: currState.meetingRoomId
      }
    });

    const { loading, error, data } = mutationState;
    if (loading) console.log("loading")
    else if (error) console.log("error")
    else {
      navigate("/");
    }
  }

  const handleClick = (id) => {
    dispatch(setMeetingRoomId(id));
  }

  const meetingRooms = data.MeetingRooms.map(room => {
    return (
      <div onClick={() => handleClick(room.id)}>
        <Card
          title={room.name}
          id={room.id}
          descriptions={[room.building.name, `Floor: ${room.floor}`]}
        />
      </div>
    );
  });

  return (
    <div>
      <h2>Please Select One of the free rooms</h2>
      {meetingRooms}
      <Link to="/">
        <div onClick={saveMeeting}>
          <Button label={"Save"} />
        </div>
      </Link>
    </div>
  );
}

export default SelectRooms