import { gql } from "@apollo/client";

export const GET_ALL_BUILDINGS = gql`
    query Buildings {
      Buildings {
        name
        meetingRooms {
          name
          meetings {
            title
            date
            startTime
            endTime
          }
        }
      }
    }
`;

export const GET_ALL_MEETING_ROOMS = gql`
  query MeetingRooms {
    MeetingRooms {
      id
      name
      floor
      building {
        name
      }
      meetings {
        startTime
        endTime
      }
    }
  }
`;

export const ADD_MEETING = gql`
  mutation Meeting(
    $id: Int!
    $title: String!
    $date: String!
    $startTime: String!
    $endTime: String!
    $meetingRoomId: Int!
    ) {
    Meeting(
      id: $id
      title: $title
      date: $date
      startTime: $startTime
      endTime: $endTime
      meetingRoomId: $meetingRoomId
    ) {
      id
      title
      date
    }
  }
`;