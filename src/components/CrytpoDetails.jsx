import React,{useState} from 'react';
import HTMLReactParser from 'html-react-parser';
import {useParams} from 'react-router-dom';
import millify from 'millify'
import {Col, Row, Typography, Select} from 'antd';
import {MoneyCollectOutlined, DollarCircleOutlined,NumberOutlined,CheckOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined,ThunderboltOutlined} from '@ant-design/icons';
import Loader from './Loader';
import { useGetCryptoHistoryQuery } from '../Services/cryptoApi';
import { useGetCryptoDetailsQuery } from '../Services/cryptoApi';
import LineChart from './LineChart';

const {Title, Text} = Typography;
const {Option} = Select;

const CrytpoDetails = () => {
  const {coinId} = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const {data, isFetching} = useGetCryptoDetailsQuery(coinId);
  const {data : coinHistory,isfetching} = useGetCryptoHistoryQuery({coinId, timePeriod});
  const cryptoDetails = data?.data?.coin;
  // console.log(data);
  // console.log(cryptoDetails);
  // console.log(typeof cryptoDetails?.description);
  // console.log(coinHistory)
  // console.log(coinId)

  // if(isFetching) return 'Loading... ';
  // if(isfetching) return 'Loading... ';
if(isfetching) return <Loader/>
if(isFetching) return <Loader/>
  
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Change', value: `${cryptoDetails?.change && millify(cryptoDetails?.change)} %`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];



  return (
    <Col className='coin-detail-container'>
      <Col className='coin-heading-container'>
        <Title level={2} className='coin-name'>
        {data?.data?.coin?.name} ({data?.data?.coin?.symbol}) Price
        </Title>
       <p>
         {cryptoDetails?.name} live price in US dollars. View value statistics, market cap and supply.
       </p>

      </Col>
      <Select defaultValue="7d" className='select-timeperiod' placeholder="Select Time Period" onChange={(value)=>{setTimePeriod(value)}} >
        {time.map((date)=><Option key={date}>{date}</Option> )}
      </Select>

      <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} />

      <Col className='stats-conatiner'>
        <Col className='coin-value-statistics'>
          <Col className='coin-value-statistics-heading'>
          <Title level={3} className='coin-details-heading'>
            {cryptoDetails?.name} Value Statistics
          </Title>
          <p>
            An Overview showing the stats of {cryptoDetails?.name}
          </p>
          </Col>
          {stats.map(({icon, title, value},index)=>(
              <Col className='coin-stats' key={index}>
                <Col className='coin-stats-name'>
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className='stats'>{value}</Text>
              </Col>
          )
            )}
        </Col>
        <Col className='other-stats-info'>
          <Col className='coin-value-statistics-heading'>
          <Title level={3} className='coin-details-heading'>
             Other Statistics
          </Title>
          <p>
            An Overview showing the stats of all cryptocurrencies
          </p>
          </Col>
          {genericStats.map(({icon, title, value},index)=>(
              <Col className='coin-stats' key={index} >
                <Col className='coin-stats-name'>
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className='stats'>{value}</Text>
              </Col>
          )
            )}
        </Col>
      </Col>
      <Col className= 'coin-desc-link'>
        <Row className='coin-desc'>
          <Title level={3} className='coin-details-heading'>
            What is {cryptoDetails?.name} ? 
          </Title>
          <img src={cryptoDetails?.iconUrl} alt="SVG imAGE" height='100px' width='100px'/>
          
          {HTMLReactParser( data?.data?.coin?.description)}
        </Row>
        <Col className='coin-links'>
          <Title level={3} className='coin-details-heading'>
            {cryptoDetails?.name} Links
          </Title>
           {cryptoDetails?.links?.map((link,index)=>(
             <Row className='coin-link' key={index}>
               <Title level={5} className="link-name">
                 {link?.type}
               </Title>
               <a href={link?.url} target="_blank" rel="Noreference">{link?.name}</a>
             </Row>
           ))}
        </Col>
      </Col>
    </Col>
  )
};

export default CrytpoDetails;
