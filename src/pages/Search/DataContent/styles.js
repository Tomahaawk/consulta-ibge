import styled from 'styled-components';

export const Wrapper = styled.div`
  > table {
    width: 100%;
    margin-top: 5px;

    > thead tr th {
      font-weight: normal;
    }

    > tbody {
      tr:nth-child(odd) {
        background-color: #eaeaea;
      }
    }
  }
`;

export const Title = styled.span`
  font-weight: bold;
  color: ${(props) => {
    if (props.diff === 0) return '#000';
    if (props.diff > 0) return 'green';
    if (props.diff < 0) return 'red';
  }};
`;

export const Subtitle = styled.div`
  color: #000;
  font-size: 12px;
`;

export const TableCell = styled.td`
  color: ${(props) => {
    if (props.diff === 0) return '#000';
    if (props.diff > 0) return 'green';
    if (props.diff < 0) return 'red';
  }};

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      width: 20px;
    }

    svg {
      margin-left: 3px;
      font-size: 12px;
    }
  }
`;
