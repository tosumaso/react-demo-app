import { Button, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { theme } from './theme/theme';
import {Router} from "./router/router";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
