import React from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  ButtonWaiter,
  TextButtonWaiter,
} from "./WaiterElements/Menu/style/ButtonWaiter";

import CategoryButton from "./WaiterElements/Menu/CategoryButton";
// import ItemButton from "./WaiterElements/Menu/ItemButton";
import ItemButton from "./WaiterElements/Menu/ItemButton";

// for dispatch to menu
import { goBackToMenu } from "../../actions/waiterAppAction";

const menuSpaceWidth = "1rem";
const ScreenMain = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* display: flex; */
  /* flex-wrap: row; */
`;
const ScreenMenu = styled.div`
  padding-right: ${menuSpaceWidth};
  padding-top: ${menuSpaceWidth};
  padding-bottom: ${menuSpaceWidth};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function MenuScreen({ client }) {
  const categorySelection = useSelector((state) => state.waiterCategory);
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState([]);
  const [screenMenu, setScreenMenu] = useState(false);

  async function fetchMenu() {
    client
      .get(`/meals/all_category`) // error here repair this !
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <ScreenMain>
      {categorySelection.category_selected ? (
        <ScreenMenu>
          <ButtonWaiter onClick={() => dispatch(goBackToMenu())}>
            <TextButtonWaiter>Back to menu</TextButtonWaiter>
          </ButtonWaiter>
          {categorySelection["category_food_element"][
            "all_meal_in_category"
          ].map((item) => (
            <ItemButton itemObject={item} />
          ))}
        </ScreenMenu>
      ) : (
        <ScreenMenu>
          {categoryData.map((category, index) => (
            <CategoryButton categoryObject={category} />
          ))}
        </ScreenMenu>
      )}
    </ScreenMain>
  );
}
