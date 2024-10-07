import styled from '@emotion/styled';

export const Img = styled.img`
  height: 100pt;
  width: 100pt;
  animation: spin 3s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
