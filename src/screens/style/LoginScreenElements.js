import styled from 'styled-components'



const lightMainColor = '#C0E2EF';
const mainColor = '#7DD1F1';

const shadeOneMainColor = '#7D97F1';
const shadeTwoMainColor = '#6DB7D3';
const shadeThreeMainColor = '#5E9DB5';
const shadeFourMainColor = '#4E8397';



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

`


export const LoginLogo = styled.h1`
    /* @font-face {
            font-family: 'Inter';
            src: url('../../../assets/fonts/Inter/Inter-Bold.ttf');
    } */
   
    background-color: ${shadeThreeMainColor};
    border: 2px ${shadeFourMainColor} solid ;
    border-radius: 15px;
    text-align: center;
    color: white;
    
    margin-top: 30px;
    margin-bottom: 30px;
    
`

export const FormControl = styled.form`
    margin: 10px 15px 20px 15px;
    background-color: ${shadeTwoMainColor};
    font-size: 14px;
    border: 2px ${shadeFourMainColor} solid ;
    border-radius: 5px;
`

export const ButtonSubmit = styled.button`
    align-items: center;
    background-color: ${lightMainColor};
    border: 2px ${mainColor} solid;
    margin: 0 15px 10px 15px;

`

// jeden
export const MainWindow =styled.div`
    margin-top: 10vh;
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;

    flex-direction: row;
`

// dwa 
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
`

export const LoginWindow = styled.div`
    @font-face {
            font-family: Inter;
            src: url('../../../assets/fonts/Inter');
    }
    background-color: ${lightMainColor};
    border: 2px ${mainColor} solid;
    border-radius: 15px;
    padding: 4px 4px 4px 4px;
/* 
    margin-top: 20%;
    margin-right: 30%;
    margin-left: 30%; */

    
    
    display: flex;
    flex-direction: column;



    /* width: 50%;
    height: 50%; */

    /*  Wrong way of centring
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
`;
