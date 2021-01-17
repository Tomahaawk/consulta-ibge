import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  max-width: 1300px;
  margin: 40px auto;
  text-align: center;
`;

export const CepInput = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 500px;
  margin: auto;

  > input {
    border: 1px solid #b7b7b7;
    padding: 5px;
    border-radius: 4px;
    font-size: 22px;
    width: 100%;
  }

  > svg {
    position: absolute;
    right: 5px;
    font-size: 18px;
    color: #b7b7b7;
  }
`;

export const Location = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const DataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
`;
