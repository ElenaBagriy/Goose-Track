import styled from 'styled-components';

export const TableWrapper = styled.div`
    margin-top: 14px;
    border: 1px solid ${props => props.theme.table.border};
    border-radius: 8px;
`;

export const Table = styled.table`
    border-radius: 8px;
    border-collapse: collapse;
    /* border-style: hidden; */
    table-layout: fixed;
    background-color: ${props => props.theme.colors.page};
    width: 100%;
    color: #343434;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.17; 

  @media screen and (min-width: 768px) {
      margin-top: 18px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 15px;
  }


    tr:last-child td{
        border-bottom: none;
    } 

    tr td:last-child {
        border-right: none;
    }
`;

export const Row = styled.tr`
    height: 94px;

    @media screen and (min-width: 768px) {
        height: 144px;
    }

    @media screen and (min-width: 1440px) {
        height: 125px;
    }

`