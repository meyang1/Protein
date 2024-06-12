// components/StartingPage.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import workoutImage from './workout.svg'; // Correct path to the image

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

const Image = styled.img`
  width: 300px;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 15px 30px;
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

const StartingPage = () => {
  return (
    <Container>
      <h2>Find people to workout with Protein.</h2>
      <Image src={workoutImage} alt="Workout" />
      <Button>Get Started</Button>
      <p>
        Already have an account? <Link to="/login">Login here!</Link>
      </p>
    </Container>
  );
};

export default StartingPage;
