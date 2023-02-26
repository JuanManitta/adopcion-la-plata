import { ThemeProvider } from "@emotion/react"
import { ReactNode } from "react";
import { CssBaseline } from '@mui/material';
import { mainTheme } from "./mainTheme";





export const AppTheme = ({ children }: {children: ReactNode}) => {


  
  return (
    <ThemeProvider theme={mainTheme}>
        <CssBaseline/>
        { children }
    </ThemeProvider>
  )
}
