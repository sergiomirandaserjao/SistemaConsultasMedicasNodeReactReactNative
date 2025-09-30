import Routes from "./src/routes/routes.js"
import { AuthContext,AuthProvider } from "./src/contexts/auth.js"
import { NavigationContainer } from "@react-navigation/native"


export default function App() {
  return <NavigationContainer>
    <AuthProvider>
             <Routes/>
    </AuthProvider>
   </NavigationContainer>
  
  
}
