import styles from "styled-components";

export const FormStyled = styles.div`
   form {
      margin-top: 10px;
      padding: 15px 0 0;
      position: relative;
      width: 15%;
      float: right;
    }

    input {
        font-family: inherit;
        width: 50%;
        border: 0;
        border-bottom: 2px solid #9b9b9b;
        outline: 0;
        font-size: 1.3rem;
        color: #fff;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
    }
    
    input::placeholder {
        color: transparent;   
    }
    
    .input:placeholder-shown ~ label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }

    label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #9b9b9b;
    }

    input:focus {
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, #11998e, #38ef7d);
        border-image-slice: 1;
    }
    
    input:focus ~ label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #11998e;
        font-weight: 700;
    }
    
    input:required, input:invalid {
        box-shadow: none;
    }
    
    button {
        width: 100px;
        height: 50px;
        cursor: pointer;
        margin-left: 20px;
        border: none;
        color: #DECCCC;
        align-items: center;
        justify-content: center;
        background-color: #7f5a83;
        background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
        background-size: 200% 100%;
        background-position: left;
        background-repeat: no-repeat;
        transition: 500ms;
    }
    
    button:before {
        font-size: 16px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 140px;
        height: 40px;
        background-color: #1B2845;
        background-image: linear-gradient(315deg, #1B2845 0%, #274060 74%);
        transition: 500ms;
    }
    
    button:hover {
        background-position: right;
    }
    
    button:hover:before {
        color: rgba(255,255,255,0.8);
    }
    
    button:focus {
        outline: none;
    }
`
export const SummonerContentStyled = styles.div`
    div {
        margin-top: 20px;
    }
`