import styled from 'styled-components';

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  height: 75vh;
	width: 40vw;
  margin: 60px auto;
  border: 2px solid black;
	background: red;
`

export const NameForms = styled.div`
    display: flex;
    flex-direction: row;
		margin: 50px 0 0;
    gap: 20px;
`

export const Input = styled.input`
  height: 50px;
  border-radius: 7px;
  padding: 10px;
  font-size: 16px;
	border: 0;
	
  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &:hover {
    border-color: gray;
  }

  [type="submit"] {
    color: white;
    background-color: blue;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
    width: 300px;
  }
`

export const Button = styled.button `
		color: white;
    background: blue;
		width: 100px;
		height: 30px;
		border-radius: 5px;
		padding: 0;
		border-color: blue;
		font-size: 16px;
`

