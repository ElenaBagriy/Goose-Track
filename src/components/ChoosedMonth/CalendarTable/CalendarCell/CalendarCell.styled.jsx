import styled from 'styled-components';

export const TableCell = styled.td`
    border-style: solid;
    text-align: right;
    border-width: 0 1px 1px 0;
    border-color: ${props => props.theme.table.border};
    padding: 8px 2px;

    @media screen and (min-width: 768px) {
        padding: 14px 4px;
    }

    @media screen and (min-width: 1440px) {
        padding: 14px 8px;
    }
`

export const DayNumber = styled.p`
    display: inline-block;
    padding: 4px 8px 4px 6px;

    @media screen and (min-width: 768px) {
        padding-right: 18px;
    }

    @media screen and (min-width: 1440px) {
        padding-right: 14px;
    }
`;

export const Task = styled.div`
    margin-top: 18px;
    padding: 4px 4px 4px 8px;
    border-radius: 8px;
    background-color: #CEEEFD;
    overflow: hidden;
    color: #3E85F3;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.4;

    @media screen and (min-width: 768px) {
        padding: 4px 10px 0px 12px;
        font-size: 14px;
        line-height: 1.29;
    }

    @media screen and (min-width: 1440px) {
        padding: 4px 15px 0px 12px;
    }
`;

export const AditionalTasks = styled.div`
    margin-top: 4px;
    padding: 0px 0px 0px 8px;
    text-align: left;
    overflow: hidden;
    color: ${props => props.theme.text.panel};
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Inter;
    font-size: 8px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.4;

    @media screen and (min-width: 768px) {
        padding: 4px 10px 0px 12px;
        font-size: 12px;
        line-height: 1.29;
    }

    @media screen and (min-width: 1440px) {
        padding: 4px 15px 0px 12px;
    }
`;
