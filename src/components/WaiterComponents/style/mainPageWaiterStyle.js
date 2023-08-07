import styled from 'styled-components'



const menuSpaceWidth = '1rem'
const menuSizeWidth = '16rem'

export const ScreenMain = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* display: flex; */
  /* flex-wrap: row; */
` 

export const ScreenMenu = styled.div`
  padding-left: ${menuSizeWidth};
  padding-right: ${menuSpaceWidth};
  padding-top: ${menuSpaceWidth};
  padding-bottom: ${menuSpaceWidth};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

`