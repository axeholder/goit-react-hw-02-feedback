import styled from '@emotion/styled';

export const SectionContainer = styled.div`
  width: 300px;
  margin: auto;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  text-align: center;
  border: solid 1px black;
  border-radius: 10px;
  padding: 10px;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
`;
