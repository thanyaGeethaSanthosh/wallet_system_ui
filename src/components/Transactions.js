import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TitleText from './TitleText';
import COLORS from '../values/colors';

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
  background-color: ${COLORS.light2};
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

const Transactions = async (props) => {
  const { fetchAPI, walletId } = props
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchAPI.getTransactions(walletId, 1, 1);
        setTransactionList(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchAPI]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  else {
    <Container>
      {JSON.stringify(transactionList)}
    </Container>
  }
  return (
    <Container>
      <TitleText title="Transactions" />
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

Transactions.propTypes = {
 fetchAPI: PropTypes.object.isRequired,
  walletId: PropTypes.string.isRequired
};

export default Transactions;
