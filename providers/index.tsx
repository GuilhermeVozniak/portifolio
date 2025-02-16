import { PropsWithChildren } from "react"
import { ThemeProvider } from "./theme-provider"

const Providers = ({children}: PropsWithChildren)=>{
  return(
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default Providers