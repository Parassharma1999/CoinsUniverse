import React,{useState, useEffect} from 'react';
import millify from 'millify';
import {Link} from 'react-router-dom';
import {Card, Row, Col, Input} from 'antd';
import Loader from './Loader';
import {useGetCryptosQuery} from '../Services/cryptoApi';

const Cryptocurrencies = ({simplified}) => {
  const count =simplified ? 10:100;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(()=>{
   const FilteredData = cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
   setCryptos(FilteredData);
  },[searchTerm,cryptosList])

  // if(isFetching) return 'Loading... ';
if(isFetching) return <Loader/>
  
  return(
    <>
    {!simplified && (
     <div className='search-crypto'>
       <Input placeholder='Search Cryptocurrency' onChange ={(event)=>{setSearchTerm(event.target.value)}}/>
     </div>
    )}

      <Row gutter={[32,32]} className='crypto-card-container'>
        {cryptos?.map((currency)=>(
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card 
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className='crypto-image' src={currency.iconUrl}/>}
                  hoverable
                  >
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>24hr Change: {millify(currency.change)}</p>
                    <p>Price: {millify(currency.price)}</p>

              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
};

export default Cryptocurrencies;
