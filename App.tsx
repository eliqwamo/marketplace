import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Tabs } from './src/screens/Navigation'
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import colors from './src/services/colors'

//IMPORT FROM FIREBASE
import { auth } from './src/services/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import Authentication from './src/screens/Authentication/Index'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: colors.onyx
  }
}

const App = () => {

  //OPTION NUMBER 1
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if(user){
  //       setUser(user)
  //     } else {
  //       setUser(null)
  //     }
  //   })
  //   return unsubscribe
  // },[])


  //OPTION NUMBER 2
  const [isUser, setIsUser] = useState(false);
  const handleAuthStateChanged = async(authUser) => {
    if(authUser){
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);
    return unsubscribe;
  },[])


  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {
          isUser ? <Tabs /> : <Authentication />
        }
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App