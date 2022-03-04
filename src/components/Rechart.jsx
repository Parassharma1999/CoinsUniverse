import React from 'react';
import {ResponsiveContainer,Line,LineChart } from 'recharts'
// import {Line} from 'react-chartjs-2';
import {Col, Row, Typography} from 'antd';
// import Chart from 'chart.js/auto'

const {Title} = Typography;

const LineChart = ({coinHistory, currentPrice, coinName}) => {
  const coinPrice = [];
  const coinTimestamp = [];
 
  console.log(coinHistory); 
  console.log(currentPrice);
  console.log(coinName)

  for(let i=0; i < coinHistory?.data?.history.length; i += 1){
    coinPrice.push(coinHistory?.data?.history[i]?.price);
 
  }
  console.log(coinPrice);
  
  for(let i=0; i < coinHistory?.data?.history.length; i += 1){
    coinTimestamp.push(new Date(coinHistory?.data?.history[i]?.timestamp).toLocaleDateString());
  }
  
console.log(coinTimestamp);



  // const data ={
  //   labels: coinTimestamp,
  //   datasets:[
  //     {
  //       label: 'Price in USD',
  //       data: coinPrice,
  //       fill: false,
  //       backgroundColor: 'red',
  //       borderColor: '#0071bd'
  //     }
  //   ]
  // }


  // const options = {
  //   scales:{
  //     yAxis:[{
  //         ticks:{
  //           beginAtZero: true,
  //         }
  //       }],
  //   },
  // };

  return (
    <>
    <Row className='chart-header'>
      <Title level={2} className='chart-title'>{coinName}</Title>
      <Col className='price-container'>
      <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
      <Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
      </Col>
      <ResponsiveContainer width='100%'>
        <LineChart data={coinPrice}>
          <Line dataKey={coinPrice}/>
        </LineChart>
      </ResponsiveContainer>
     </Row>
    </>
  )
};

export default LineChart;
