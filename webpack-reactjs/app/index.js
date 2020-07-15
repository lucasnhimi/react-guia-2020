import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button';

const rootElement = document.getElementById('root');
const App = () => <Button>Botão de teste</Button>;

ReactDOM.render(<App />, rootElement);
