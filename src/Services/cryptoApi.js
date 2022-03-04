import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '986dee959cmsh21fa52397cb8a4ep192c63jsn6aadc39e5aee'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest =(url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
     reducerPath:'cryptoApi',
     baseQuery: fetchBaseQuery({baseUrl}),
     endpoints: (builder)=>({
         getCryptos: builder.query({
             query: (count) => createRequest(`/coins?limit=${count}`)
         }),
         getCryptoDetails: builder.query({
             query:(coinuuid) => createRequest(`/coin/${coinuuid}`)
         }),
         getCryptoHistory: builder.query({
            query:({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`)
        }),
        getExchanges: builder.query({
            query:() => createRequest(`/exchanges`)
        })
     })
});

export const {useGetCryptosQuery} = cryptoApi;
export const {useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery} = cryptoApi;


