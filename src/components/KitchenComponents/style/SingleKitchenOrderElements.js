import styled from "styled-components";


export const ListOrderElement = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px grey;
  padding: 8px;
  color: #000;
  margin-bottom: 8px;
  min-height: 90px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${(props) => bgcolorChange(props)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

function bgcolorChange(props) {
  return props.isDragging
    ? "lightblue"
    : props.isDraggable
    ? props.isBacklog
      ? "#F2D7D5"
      : "#DCDCDC"
    : props.isBacklog
    ? "#F2D7D5"
    : "#EAF4FC";
}

// export const ListOrderElement = styled.div`
//     /* float: left; */
//     /* display: inline; */
//     list-style-type: none;
//     border: black solid 1px;
// `;

export const PopOutWindow = styled.div`
  background-color: beige;
  font-size: 14px;
  color: black;
`;

export const element_order = styled.section`
  padding: 4em;
  background: pink;
`;