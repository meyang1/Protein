// components/LoginPage.js
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

const Input = styled.input`
  width: 80%;
  max-width: 300px;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  width: 80%;
  max-width: 300px;
  padding: 15px;
  background-color: #6fcf97;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #57af76;
  }
`;

const LoginPage = () => {
  return (
    <Container>
      <h2>Sign in</h2>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button>Submit</Button>
    </Container>
  );
};

export default LoginPage;
