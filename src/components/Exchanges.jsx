import React from 'react';
import millify from 'millify';
import {Collapse, Row, Col, Typography, Avatar} from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../Services/cryptoApi';
import Loader from './Loader';

const {Text} = Typography;
const {Panel} = Collapse;

export const Exchanges = () => {
  const {data, isFetching} = useGetExchangesQuery();
  const exchnagesList = data?.data?.exchnages;
  

if(isFetching) return <Loader/>

   console.log(data);

  return (<>
  <Row>
    <Col span={6}>Exchanges</Col>
    <Col span={6}>24h Trade Volume</Col>
    <Col span={6}>Markets</Col>
    <Col span={6}>Changes</Col>
  </Row>
  <Row>
    {exchnagesList.map((exchange)=>(
      <Col span={24}>
        <Collapse>
        <Panel
         key={exchange.id}
         showArrow={false}
         header={(
           <Row key={exchange.id}/>
         )}
         />
        </Collapse>
      </Col>
    ))}
  </Row>
  </>)
};

export default Exchanges;
