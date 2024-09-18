import styled from "@emotion/styled";

type ContainerProps = {
  transform: number;
};
export const Boundary = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  width: 280pt;
  height: 60pt;
`;
export const Container = styled.div<ContainerProps>`
  align-items: center;
  justify-content: flex-start;
  background-color: #00000089;
  border: 1pt solid black;
  display: flex;
  flex-direction: row;
  padding-left: 20pt;
  height: 60pt;
  position: absolute;
  right: 0;
  top: 3%;
  border-radius: 45pt 0 0 45pt;
  transform: translateX(${({ transform }) => transform}%);
  transition: transform 0.5s ease-in;
  width: 250pt;
`;

export const Button = styled.button`
  background: none;
  border: none;
  border-radius: 45%;
  height: 30;
  margin: 0;
  padding: 0;
  width: 30;
`;

export const Img = styled.img`
  height: 30pt;
  width: 30pt;
`;
