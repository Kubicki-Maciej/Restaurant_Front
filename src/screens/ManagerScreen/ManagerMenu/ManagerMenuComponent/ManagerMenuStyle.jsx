import styled from "styled-components";

const FormLabel = styled.label`
  color: black;
  font-size: 14px;
`;

const CreateDishContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
`;

const FormElement = styled.div`
  margin: 5px 10px 5px 10px;
  display: flex;
  flex-direction: column;
`;
const FormBox = styled.div`
  margin: 5px 10px 5px 10px;
  display: flex;
  flex-direction: column;
`;

const ProductTable = styled.div`
  margin-left: 20px;
`;

const FormElementButton = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FormButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export {
  FormLabel,
  CreateDishContainer,
  FormElement,
  ProductTable,
  FormElementButton,
  FormButton,
  FormBox,
};
