import styled from '@emotion/styled';

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
  background-color: #00000089;
  border: 1pt solid black;
  border-right: none;
  border-radius: 45pt 0 0 45pt;
  color: white;
  display: flex;
  flex-direction: row;
  height: 60pt;
  justify-content: flex-start;
  padding-left: 20pt;
  position: absolute;
  right: 0;
  top: 3%;
  transform: translateX(${({ transform }) => transform}%);
  transition: transform 0.5s;
  width: 250pt;
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const StyledInput = styled.input`
  height: 30pt;
  width: 120pt;
  padding-left: 1rem;
  border: none;
  box-sizing: border-box;
  font-size: 14pt;
  &:focus {
    outline: transparent;
  }
`;
export const InputDiv = styled.div`
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 145pt;
  background-color: white;
  overflow: hidden;
  border-radius: 5pt;
  height: 30pt;
`;
export const InputTrigger = styled.button`
  height: 20pt;
  width: 20pt;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  img {
    height: 15pt;
    width: 15pt;
  }
`;
export const Gear = styled.button`
  background: none;
  border: none;
  border-radius: 45%;
  height: 30;
  margin: 0;
  padding: 0;
  width: 30;
  img {
    height: 30pt;
    width: 30pt;
  }
`;

export const More = styled.button`
  background: transparent;
  width: 30pt;
  height: 30pt;
  padding: 0;
  margin: 0;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
