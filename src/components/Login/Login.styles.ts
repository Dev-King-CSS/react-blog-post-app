import styled from "styled-components"

const googleImage =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 6.25rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;

  p {
    font-size: 1.875rem;
  }

  .LoginWithGoogleBtn {
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
    padding: 0.3125rem 1rem 0.75rem 2.625rem;
    border: none;
    border-radius: 0.1875rem;
    box-shadow: 0 -1px 0 #0001, 0 1px 1px #0000004a;
    color: #757575;
    font-size: 1.5625rem;
    font-weight: 500;
    background-image: url(${googleImage});
    background-color: white;
    background-repeat: no-repeat;
    background-position: 0.75rem 0.6875rem;

    &:hover {
      box-shadow: 0 -1px 0 #0001, 0 2px 4px #0000004a;
    }

    &:active {
      background-color: #eee;
    }

    &:focus {
      outline: none;
      box-shadow: 0 -1px 0 #0001, 0 2px 4px #0000004a, 0 0 0 3px #c8dafc;
    }

    &:disabled {
      filter: grayscale(100%);
      background-color: #ebebeb;
      box-shadow: 0 -1px 0 #0001, 0 1px 1px #0000004a;
      cursor: not-allowed;
    }
  }
`
