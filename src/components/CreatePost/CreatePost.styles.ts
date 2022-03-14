import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 6.25rem);
  display: grid;
  place-items: center;

  .createPostContainer {
    width: 31.25rem;
    height: auto;
    padding: 1.25rem;
    background-color: black;
    border-radius: 0.75rem;
    color: white;
    display: flex;
    flex-direction: column;

    h1 {
      text-align: center;
    }

    label {
      font-size: 1.5625rem;
    }

    button {
      margin-top: 1.25rem;
      height: 2.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.125rem;
    }

    input,
    textarea {
      margin-top: 0.5rem;
      outline: none;
    }

    .inputPost {
      margin-top: 1.875rem;
      display: flex;
      flex-direction: column;

      input,
      textarea {
        font-size: 1.125rem;
        border: none;
        border-radius: 0.2rem;
        padding: 0.5rem;
      }

      input {
        height: 2.5rem;
      }

      textarea {
        height: 9.375rem;
      }
    }
  }
`
