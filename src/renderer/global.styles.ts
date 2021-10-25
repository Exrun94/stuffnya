/* eslint-disable import/no-webpack-loader-syntax */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    //box-sizing: border-box;

  ::-webkit-scrollbar {
      width: 0.4em;
  }

  ::-webkit-scrollbar-track {
      background-color: var(--primary-800);
      border-radius: 100vw;
  }

  ::-webkit-scrollbar-thumb {
      background-color: var(--primary-500);
      border-radius: 100vw;
  }


}

html{
  --dark-brown: #333230;
  --royal-base: #7d5aa6;
  --royal-dark: #532f82;
  --royal-light: #d1bfda;
  --royal-lighter: #ebe0ef;
  --ocean-base: #22b8d1;
  --ocean-dark: #226d7a;
  --ocean-light: #b0e0e9;
  --ocean-lighter: #e4f5fa;
  --mint-base: #2bab7f;
  --mint-dark: #1e6346;
  --mint-light: #add9c0;
  --mint-lighter: #e1f1e7;
  --grassy-base: #96ca51;
  --grassy-dark: #577635;
  --grassy-light: #d8e5b5;
  --grassy-lighter: #edf4db;
  --salmon-base: #f47b44;
  --salmon-dark: #b35227;
  --salmon-light: #f3cfbb;
  --salmon-lighter: #f8eae0;
  --sunset-base: #ee9629;
  --sunset-dark: #8e5d25;
  --sunset-light: #f0c99a;
  --sunset-lighter: #f6e8d5;
  --mango-base: #e5b22a;
  --mango-dark: #96762e;
  --mango-light: #efe0a0;
  --mango-lighter: #f7f3da;
  --bronze-base: #cdaa72;
  --bronze-dark: #8c7653;
  --bronze-light: #ecdcc6;
  --bronze-lighter: #e2dbd5;

  --primary-50: #f5f5f5;
  --primary-100: #ebebeb;
  --primary-200: #e0e0e0;
  --primary-300: #b2b2b2;
  --primary-400: #9faabc;
  --primary-500: #657590;
  --primary-600: #494e56;
  --primary-700: #363a41;
  --primary-800: #2f3237;
  --primary-900: #202225;

  --success-50: #ecfdf5;
  --success-300: #6ee787;
  --success-500: #10b981;
  --success-700: #047867;
  --success-900: #064e3b;

  --warning-50: #fffbeb;
  --warning-300: #fcd34d;
  --warning-500: #f59e0b;
  --warning-700: #b45309;
  --warning-900: #78350f;

  --error-50: #fef2f2;
  --error-300: #fda093;
  --error-500: #ef4444;
  --error-700: #b91c1c;
  --error-900: #7f1d1d;
}

body{
    background: #363A41;
    font-family: 'Source Sans Pro', sans-serif;
}

.rcp-light {
  --rcp-background: #ffffff;
  --rcp-input-text: #111111;
  --rcp-input-border: rgba(0, 0, 0, 0.1);
  --rcp-input-label: #717171;
}

.rcp-dark {
  --rcp-background: #181818;
  --rcp-input-text: #f3f3f3;
  --rcp-input-border: rgba(255, 255, 255, 0.1);
  --rcp-input-label: #999999;
}

.rcp {
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--rcp-background);
  border-radius: 10px;
  box-sizing: border-box;
}

.rcp-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;

  padding: 20px;
}

.rcp-saturation {
  position: relative;

  width: 100%;
  background-image: linear-gradient(transparent, black), linear-gradient(to right, white, transparent);
  border-radius: 10px 10px 0 0;

  user-select: none;
}

.rcp-saturation-cursor {
  position: absolute;

  width: 20px;
  height: 20px;

  border: 2px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  box-sizing: border-box;

  transform: translate(-10px, -10px);
}

.rcp-hue {
  position: relative;

  width: 100%;
  height: 12px;

  background-image: linear-gradient(
    to right,
    rgb(255, 0, 0),
    rgb(255, 255, 0),
    rgb(0, 255, 0),
    rgb(0, 255, 255),
    rgb(0, 0, 255),
    rgb(255, 0, 255),
    rgb(255, 0, 0)
  );
  border-radius: 10px;

  user-select: none
}

.rcp-hue-cursor {
  position: absolute;

  width: 20px;
  height: 20px;

  border: 2px solid #ffffff;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px;
  box-sizing: border-box;

  transform: translate(-10px, -4px);
}

.rcp-alpha {
  position: relative;

  width: 100%;
  height: 12px;

  border-radius: 10px;

  user-select: none;
}

.rcp-alpha-cursor {
  position: absolute;

  width: 20px;
  height: 20px;

  border: 2px solid #ffffff;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px;
  box-sizing: border-box;

  transform: translate(-10px, -4px);
}

.rcp-fields {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;

  width: 100%;
}

.rcp-fields-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  width: 100%;
}

.hex-element {
  grid-row: 1;
}

.hex-element:nth-child(3n) {
  grid-column: 1 / -1;
}

.rcp-fields-element-input {
  width: 100%;

  font-size: 14px;
  font-weight: 600;

  color: var(--rcp-input-text);
  text-align: center;

  background: none;
  border: 2px solid;
  border-color: var(--rcp-input-border);
  border-radius: 5px;
  box-sizing: border-box;

  outline: none;

  padding: 10px;
}

.rcp-fields-element-label {
  font-size: 14px;
  font-weight: 600;

  color: var(--rcp-input-label);
  text-transform: uppercase;
}

`;

export default GlobalStyle;
