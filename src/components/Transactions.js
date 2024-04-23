import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Table = styled.table`
  width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
`;

const Th = styled.th`
  padding: 15px;
  background-color: #55608f;
  color: #fff;
  text-align: left;
`;

const Td = styled.td`
  padding: 15px;
  background-color: rgba(255,255,255,0.2);
  color: #000;
  position: relative;

  &:hover {
    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: -9999px;
      bottom: -9999px;
      background-color: rgba(255,255,255,0.2);
      z-index: -1;
    }
  }
`;

const TbodyTr = styled.tr`
  &:hover {
    background-color: rgba(255,255,255,0.3);
  }
`;

const Transactions = () => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>Column 1</Th>
            <Th>Column 2</Th>
            <Th>Column 3</Th>
            <Th>Column 4</Th>
            <Th>Column 5</Th>
          </tr>
        </thead>
        <tbody>
          <TbodyTr>
            <Td>Cell 1</Td>
            <Td>Cell 2</Td>
            <Td>Cell 3</Td>
            <Td>Cell 4</Td>
            <Td>Cell 5</Td>
          </TbodyTr>
          <TbodyTr>
            <Td>Cell 1</Td>
            <Td>Cell 2</Td>
            <Td>Cell 3</Td>
            <Td>Cell 4</Td>
            <Td>Cell 5</Td>
          </TbodyTr>
          <TbodyTr>
            <Td>Cell 1</Td>
            <Td>Cell 2</Td>
            <Td>Cell 3</Td>
            <Td>Cell 4</Td>
            <Td>Cell 5</Td>
          </TbodyTr>
          <TbodyTr>
            <Td>Cell 1</Td>
            <Td>Cell 2</Td>
            <Td>Cell 3</Td>
            <Td>Cell 4</Td>
            <Td>Cell 5</Td>
          </TbodyTr>
          <TbodyTr>
            <Td>Cell 1</Td>
            <Td>Cell 2</Td>
            <Td>Cell 3</Td>
            <Td>Cell 4</Td>
            <Td>Cell 5</Td>
          </TbodyTr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Transactions;
