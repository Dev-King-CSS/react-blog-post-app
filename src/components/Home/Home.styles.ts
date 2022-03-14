import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.25rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  .post {
    width: 37.5rem;
    height: auto;
    max-height: 37.5rem;
    background-color: whitesmoke;
    box-shadow: #0005 0px 3px 8px;
    margin: 1.25rem;
    padding: 1.25rem;
    border-radius: 0.9375rem;

    .postHeader {
      display: flex;
      justify-content: center;
      width: 100%;

      .title {
        flex: 50%;
      }

      .deletePost {
        flex: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        button {
          border: none;
          background: none;
          font-size: 1.875rem;
          cursor: pointer;
        }
      }
    }

    .postTextContainer {
      word-wrap: break-word;
      height: auto;
      max-height: 25rem;
      width: 100%;
      overflow: hidden;
      overflow-y: auto;
    }
  }
`
