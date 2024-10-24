import styled from 'styled-components';

export const SignInDiv = styled.div`
  height: 600px;
  width: 500px;
  margin: 120px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  font-family: Arial, Helvetica, sans-serif;
  background: #ff4242;
  border: black 7px inset;
	color: antiquewhite;
	font-weight: bold;
	
	h2 {
		color: white;
  }
	
`

export const SignInP = styled.p`
	color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 78%;
`

export const SignUpButton = styled.button`
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
	height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
	gap: 10px;
	//border: 2px solid black;
	
`

export const Button = styled.button `
  border: 0;
	font-size: 16px;
  border-radius: 50px;
  cursor: pointer;
  background: darkred;
  width: 200px;
  height: 40px;
	color: white;
  &:hover {
    background-color: black;
  }
`
