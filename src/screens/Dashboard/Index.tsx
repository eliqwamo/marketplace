import {View, Text, StyleSheet, Button} from 'react-native'
import styles from '../../services/styles'
import { auth } from '../../services/firebase-config'

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.title}>{auth.currentUser?.email}</Text>
      <Button onPress={() => auth.signOut()} title='Logout' />
    </View>
  )
}


export default Dashboard