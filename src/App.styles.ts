import styled from "styled-components"

export const GlobalStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;

  nav {
    width: 100%;
    height: 80px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    gap: 2rem;

    a:first-child {
      margin-left: 10rem;
      flex: 1;
    }

    a:nth-child(2) {
      background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
      color: black;
      outline: none;
      border-radius: 1rem;
      padding: 0.5rem 1rem;
      font-size: 1.1rem;
    }

    a:nth-child(2).login {
      margin-right: 4rem;
    }

    button {
      margin-right: 4rem;
      width: 6rem;
      height: 2.5rem;
      cursor: pointer;
      border: none;
      outline: none;
      border-radius: 1rem;
      font-size: 1.1rem;
      background-image: linear-gradient(
        to right,
        #37ecba 0%,
        #72afd3 100%
      );
    }
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1.5625rem;
  }
`
