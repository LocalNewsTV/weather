import styled from "@emotion/styled";

type ContainerProps = {
  width: number;
  transform: number;
  open: boolean;
};

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: #00000089;
  border: 1pt solid yellow;
  border-left: none;
  border-radius: 0 45pt 45pt 0;
  color: white;
  display: flex;
  height: 60pt;
  justify-content: flex-end;
  transform: translateX(${({ transform }) => transform}%);
  transition: transform 0.8s;
  margin-bottom: 20pt;
  position: relative;
  left: 0;
  overflow: hidden;
  width: ${({ width }) => width}%;
  & > img {
    margin-left: 10pt;
  }
  & > p {
    margin-left: 5pt;
  }
  &:hover {
    transition: transform 0.3s;
    transform: translateX(
      ${({ transform, open }) => (transform + (open ? -3 : 3)).toString()}%
    );
  }
`;

export const DataImg = styled.img`
  height: 20pt;
  width: 20pt;
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
  & > img {
    height: 100%;
    width: auto;
    padding: 0;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

export const SourcedImage = styled.img`
  max-height: 45pt;
  max-width: 45pt;
  padding: 0;
  margin: 0;
`;

export const StyledP = styled.p`
  font-size: 20pt;
  margin: 0 3pt;
  padding: 0;
`;
