// components/AccountsPage.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  color: white;
  background: linear-gradient(to bottom, #f3776d, #fc8c6c);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.div`
  margin-top: 50px;
`;

const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ddd;
  margin: 0 auto;
`;

const Name = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: #333;
`;

const AccountsPage = () => {
  return (
    <Container>
      <h2>Find Matches</h2>
      <Profile>
        <ProfilePic />
        <Name>Blake Antony</Name>
      </Profile>
    </Container>
  );
};

export default AccountsPage;
