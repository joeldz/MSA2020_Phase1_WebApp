import React,{useState} from 'react';
import './App.css';
import Search from './Components/SearchComponent/Search';
import { IUserInput } from './Common/Interfaces';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Mars",
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  return (
    <div className="App" >
      <MuiThemeProvider theme={theme}>
          <Search SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;