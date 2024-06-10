// App.js
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Firstpage from './src/features/firstpage';
import Login from './src/features/login';
import ScanAndImport from './src/features/scanandimport';
import Menu from './src/features/menu';
import Register from './src/features/register';
import Scanresult from './src/features/scanresult';
import History from './src/features/history';
import RecommendAcne from './src/features/recommendacne';
import CheckCamera from './src/features/checkcamera';
import ScanHyper from './src/features/scanhyper';
import ImportImage from './src/features/importimg';
import ResultHyper from './src/features/resulthyper';
import EditAccount from './src/features/editaccount';
import ForgotPassword from './src/features/forgotpassword';
import { AuthProvider } from './src/component/authcontext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="firstpage" 
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}>
          <Stack.Screen name="Firstpage" component={Firstpage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="ScanAndImport" component={ScanAndImport} />
          <Stack.Screen name="Scanresult" component={Scanresult} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="RecommendAcne" component={RecommendAcne} />
          <Stack.Screen name="CheckCamera" component={CheckCamera} />
          <Stack.Screen name="ScanHyper" component={ScanHyper} />
          <Stack.Screen name="ImportImage" component={ImportImage} />
          <Stack.Screen name="ResultHyper" component={ResultHyper} />
          <Stack.Screen name="EditAccount" component={EditAccount} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;






