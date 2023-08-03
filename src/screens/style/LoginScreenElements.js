import styled from 'styled-components'

const lightMainColor = '#C0E2EF';
// first color 
const mainColor = '#7DD1F1';
const shadeOneMainColor = '#7D97F1';
const shadeTwoMainColor = '#6DB7D3';
const shadeThreeMainColor = '#5E9DB5';
const shadeFourMainColor = '#4E8397';
// second colors
const darkMainColor = '#9D7DF1'
const shadowmainColor = '#A6A9D8';
const secondColor = '#F17DD1'
const secondLightColor = '#D77DF1'
const secondDarkColor = '#F17D97'


export const FormBox = styled.form`
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
`;
export const LoginLogo = styled.h1`
    background-color: ${shadeThreeMainColor};
    border: 2px ${shadeFourMainColor} solid ;
    border-radius: 15px;
    text-align: center;
    color: white;
    
    margin-top: 30px;
    margin-bottom: 30px;
    
`;
export const FormControl = styled.form`
    margin: 10px 15px 20px 15px;
    background-color: ${shadeTwoMainColor};
    font-size: 14px;
    border: 2px ${shadeFourMainColor} solid ;
    border-radius: 5px;
`;
export const ButtonSubmit = styled.button`
    align-items: center;
    background-color: ${lightMainColor};
    border: 2px ${mainColor} solid;
    margin: 0 15px 10px 15px;
`;
export const MainWindow =styled.div`
    margin-top: 10vh;
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;

    flex-direction: row;
`;
export const WindowContainer = styled.div`
    width: 80vw;
    height: 60vh;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;

    gap: 5px;
    border-radius: 15px;
    padding: 20px;
    border: 2px ${shadeFourMainColor} solid ;
    
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: center;  
`;
export const LoginWindow = styled.div`
    @font-face {
            font-family: Inter;
            src: url('../../../assets/fonts/Inter');
    }
    background-color: ${lightMainColor};
    border: 2px ${mainColor} solid;
    border-radius: 15px;
    padding: 4px 4px 4px 4px;

    display: flex;
    flex-direction: column;
`;
export const ButtonSlide = styled.button`
    border: 2px ${mainColor} solid;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.8s;
    &:hover{
        box-shadow: 11px 13px 20px 9px rgba(0,0,0,0.1);
        left:0;
    }
    
`;
export const SlideButton = styled.button`
  position: relative;
  overflow: hidden;
  display: inline-block;

  padding: 10px 20px;

  color: white;

  background-color: ${shadeTwoMainColor};
  border: 2px ${mainColor} solid;
  border-radius: 5px;
  cursor: pointer;
  
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${shadeFourMainColor};
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: ${shadeFourMainColor};
    transition: left 0.3s ease;
  }

  &:hover:before {
    left: 0;
  }

  span {
    position: relative;
    z-index: 1;
  }
`;