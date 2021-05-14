import Axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import "../index.css"


const HeaderContainer = styled.div`
    height:15vh;
    width:100%;
    display:flex;
    justify-content:space-evenly;
    flex-direction: row;
    align-items:center;
   
`;

const CardInfo = styled.div`
    height:13vh;
    width:20%;
    display:flex;
    flex-direction: column;
    justify-content:space-around;
   
    align-items:center;
    font-family: 'Noto Sans JP', sans-serif;
    h2{
        font-family: 'Times New Roman', Times, serif;
        color:${props=>props.heading_color}
    }
    h3{
        color:${props=>props.subheading_color};
        font-family: 'Noto Sans JP', sans-serif;
    }
   

`
const Heading = styled.div`
height:20vh;
width:100%;
font-size:30px;
color:#c6ffc1;
background-color:#334443;
align-text:center;
display:flex;
justify-content:center;
padding-top:12vh;
`;
const Header =()=> {
    const [data,setData] = useState({});

    useEffect(()=>{
        Axios.get("https://corona.lmao.ninja/v3/covid-19/all")
            .then(response=>{
                console.log(response.data);
                setData(response.data)
            })
            .catch(error=>{
                console.log(error);
            })
    })
    return (
        <HeaderContainer>
            <Heading>Covid-19 World Map</Heading>
            <CardInfo heading_color="#0061a8" subheading_color="#0061a8">
                <h2>Total Cases</h2>
                <h3>{data.cases}</h3>
            </CardInfo>
            <CardInfo heading_color="#fb3640" subheading_color="#fb3640">
            <h2>Total Deaths</h2>
            <h3>{data.deaths}</h3>

            </CardInfo>
            <CardInfo heading_color="#81b214" subheading_color="#81b214">
            <h2>Total Recovered</h2>
            <h3>{data.recovered}</h3>

            </CardInfo>
            
        </HeaderContainer>
    )
}

export default Header
