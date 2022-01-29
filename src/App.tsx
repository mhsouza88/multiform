import Router from "./routes/Router"
import { FormProvider } from "./context/FormContext"
import * as C from './styles'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './components/Theme/Themes'
import GlobalStyles from './components/Theme/globalStyles'

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
    <FormProvider>
      <C.Button>
      <button 
          onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Trocar Tema
        </button>
        </C.Button>
        <Router />
    </FormProvider>
    </ThemeProvider>
  )
}

export default App