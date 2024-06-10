import { css } from '@emotion/react'
import 'bootstrap/dist/css/bootstrap.css'

export const VerifyEmailCss = css`
  .container {
    max-width: 600px;
    background-color: black;
  }

  h2 {
    margin-top: 50px;
  }

  .form-check-label {
    font-size: 16px;
  }

  .custom {
    font-size: 24px;
    color: white;
    background-color: #3b6621;
    border: none;
    border-radius: 30px;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    font-family: 'Times New Roman', Times, serif;
  }

  .custom button:hover {
    background-color: #385116;
    transform: translate3d(0, -2px, 0);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`
