import React from 'react';
import { Link } from "react-router-dom";
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import styles from "./Home.module.scss";
import { useQuery } from '@apollo/client';
import { GET_ALL_BUILDINGS } from '../../graphql/queries';
import moment from 'moment';
import { useDispatch } from "react-redux";
import { addBuildings } from "../../redux/meetingSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_ALL_BUILDINGS, {
    context: { headers: { token: "a123gjhgjsdf6576" } },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const buildingPayload = data.Buildings.map(d => d.name)

  dispatch(addBuildings([...buildingPayload]));

  const meetingRooms = data.Buildings.reduce((acc, curr) => acc += curr.meetingRooms.length, 0)
  const meetings = data.Buildings.reduce((acc, curr) => {
    if (curr.meetingRooms) { 
      curr.meetingRooms.forEach(meetingRoom => {
        if (meetingRoom.meetings)
          acc += meetingRoom.meetings.length;
      })
    }
    return acc;
  }, 0)

  let meetingsNow = 0;

  const freeMeetingRoomsNow = data.Buildings.reduce((acc, curr) => {
    let count = 0;
    curr.meetingRooms &&
      curr.meetingRooms.meetings &&
      curr.meetingRooms.meetings.forEach((meeting) => {
        const { date, startTime, endTime } = meeting;
        const currTime =
          (new Date().getHours() < 10
            ? "0" + new Date().getHours()
            : new Date().getHours()) +
          ":" +
          (new Date().getMinutes() < 10
            ? "0" + new Date().getMinutes()
            : new Date().getMinutes());

        if (moment(date).isBefore(moment()) || moment(date).isAfter(moment())) {
          count++;
        } else {
          const format = "hh:mm";

          const time = moment(currTime, format);
          const beforeTime = moment(startTime, format);
          const afterTime = moment(endTime, format);

          if (time.isBetween(beforeTime, afterTime)) {
            count++;
          } else {
            meetingsNow++;
          }
        }
        return acc + count;
      });
  }, 0)

  return (
    <div className={styles.home} data-testid={"home-page"}>
      <Card
        title="Buildings"
        descriptions={["Total: " + data.Buildings.length]}
      />
      <Card title="Rooms" descriptions={["Total " + meetingRooms, `Free now ${freeMeetingRoomsNow ? freeMeetingRoomsNow: meetingRooms}`]} />
      <Card title="Meetings" descriptions={[`Total ${meetings} today`, `Total ${meetingsNow} going on now`]} />
      <Link to="/add-meeting">
        <Button label={"Add a Meeting"} />
      </Link>
    </div>
  );
}

export default Home