import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
  AdaptivityProvider,
  ConfigProvider
} from "@mntm/vkui";

import '@mntm/vkui/dist/styles/themes.css';
import '@mntm/vkui/dist/styles/components.css';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
