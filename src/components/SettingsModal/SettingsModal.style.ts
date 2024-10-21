import styled from '@emotion/styled';

type Modal = {
  display: boolean;
};
export const ModalContainer = styled.div<Modal>`
  display: ${({ display }) => (display ? 'flex' : 'none')};
  position: absolute;
  top: 50;
  left: 50;
  transform: translate(-50%, -50%);
  align-items: column;
  height: 325pt;
  width: 100%;
  max-width: 445pt;
  border: 1pt solid black;
  background-color: rgb(229, 228, 226);
  border-radius: 8pt;
  z-index: 3;
  overflow: hidden;
  transition: display 1s;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 30pt;
  width: 100%;
  background-color: rgb(218, 218, 218);
  padding-left: 1rem;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  border-bottom: 1pt solid gray;
  & > h2 {
    padding: 0;
    margin: 0;
    text-align: left;
  }
`;

export const Content = styled.section`
  height: 100%;
  display: flex;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

export const Footer = styled.footer`
  height: 30pt;
  width: 100%;
  border-top: 1pt solid gray;
`;
