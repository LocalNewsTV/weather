import styled from "@emotion/styled";

type ContainerProps = {
  width: number;
  transform: number;
};

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: #00000089;
  color: white;
  border: 1pt solid yellow;
  border-left: none;
  border-radius: 0 45pt 45pt 0;
  display: flex;
  height: 60pt;
  justify-content: flex-end;
  transform: translateX(${({ transform }) => transform}%);
  transition: transform 0.5s ease-in;
  margin-bottom: 20pt;
  overflow: hidden;
  width: ${({ width }) => width}%;
`;

export const Img = styled.img`
  height: 100%;
  padding: 0;
`;

type ButtonProps = {
  visible: boolean;
};

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  border: none;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  margin-right: 15pt;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  padding: 0;
  transition: opacity 1.5s;
  width: 30pt;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

export const SourcedImage = styled.img`
  height: 100pt;
  width: 100pt;
  padding: 0;
  margin: 0;
`;

export const StyledP = styled.p`
  font-size: 20pt;
  margin: 0 3pt;
  padding: 0;
  &:nth-of-type(even) {
    font-style: italic;
  }
`;
