import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SchoolList from './src/components/Schools/school-list';
import { schoolApi } from './src/api/school-api';
import { useEffect, useState } from 'react';
import SchoolDetails from './src/components/Schools/school-details';

const Stack = createStackNavigator();

export default function App() {

  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await schoolApi();
        setSchools(data)
      } catch (error) {
        console.log('Error loading Schools API')
      }
    }
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SchoolList'>
        <Stack.Screen name='SchoolList' options={{ title: 'Schools Data' }} >
          {(props) => <SchoolList {...props} schools={schools} />}
        </Stack.Screen>
        <Stack.Screen name='SchoolDetails' component={SchoolDetails} options={{ title: 'School Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
