import { View, Text } from "react-native";
import colors from "../../services/colors";
import styles from "../../services/styles";
import Box from "../../components/Box";

const Details = (props) => {

  console.log(JSON.stringify(props));


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.route.params.myname}</Text>
    </View>
  );
};

export default Details;