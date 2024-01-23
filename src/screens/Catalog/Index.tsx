import { View, Text, Button } from "react-native";
import colors from "../../services/colors";
import styles from "../../services/styles";
import Box from "../../components/Box";

const Catalog = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catalog</Text>

      <Button 
        title="Go To Details"
        onPress={() => { props.navigation.navigate("details", {myname: "Elihu Schitrit"}) }}
       />

    </View>
  );
};

export default Catalog;
