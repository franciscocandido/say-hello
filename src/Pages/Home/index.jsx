import React, { useState } from 'react';
import axios from 'axios';

import DefaultPage from '../../Components/DefaultPage';

import { Container, HelloText, UsernameText } from './styles';

function Home() {
  const userData = {
    username: localStorage.getItem('@sayhello/username'),
    language: localStorage.getItem('@sayhello/language'),
  };
  const [helloMessage, setHelloMessage] = useState('Say Hello');
  const renderHTML = (rawHTML) => React.createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } });

  async function getHelloMessageByIp() {
    const userIpData = await axios.get('http://ip-api.com/json')
      .then((response) => response);
    const userIp = userIpData.data.query;

    const languageCodeData = await axios.get(`https://fourtonfish.com/hellosalut/?ip=${userIp}`)
      .then((response) => response);
    const languageCode = languageCodeData.data.hello;

    return languageCode;
  }

  async function getHelloMessageByCode(code) {
    const languageCodeData = await axios.get(`https://fourtonfish.com/hellosalut/?lang=${code}`)
      .then((response) => response);
    const languageCode = languageCodeData.data.hello;

    return languageCode;
  }

  async function makeHelloMessage() {
    let message;
    if (!userData.username) {
      userData.username = 'User';
    }

    if (!userData.language) {
      message = await getHelloMessageByIp();
    } else {
      message = await getHelloMessageByCode(userData.language);
    }
    setHelloMessage(message);
  }
  makeHelloMessage();

  return (
    <DefaultPage>
      <Container>
        <HelloText>{renderHTML(`${helloMessage}`)}</HelloText>
        <UsernameText>{userData.username}</UsernameText>
      </Container>
    </DefaultPage>
  );
}

export default Home;
