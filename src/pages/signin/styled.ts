import styled from 'styled-components';

export const SignInDiv = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background: #ffffff;
`

export const SignInP = styled.p`
  color: #33331c;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
`

export const SignInButton = styled.button`
  border: 0;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 50px;
  cursor: pointer;
  background: #aed;
  width: 200px;
  height: 40px;
  color: #33331c;
  &:hover {
    background-color: antiquewhite;
  }
`

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100px;
`