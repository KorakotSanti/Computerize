import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  border: solid black 1px;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 92%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-evenly;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 40%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 40%;
  text-align: right;
`;
