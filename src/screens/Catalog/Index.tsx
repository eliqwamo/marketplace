import {View, Text} from 'react-native'
import colors from '../../services/colors'
import styles from '../../services/styles'
import Box from '../../components/Box'

const Catalog = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.row, styles.box_100p, styles.greenbg]}><Text>1</Text></View>
            <View style={[styles.row, styles.box_100p]}>
                <Box number={2} color={colors.blue} />
                <Box number={3} color={colors.bone} />
            </View>
            <View style={[styles.row, styles.box_100p]}>
                <View style={[styles.box, styles.box_25p, styles.bluebg]}><Text>4</Text></View>
                <View style={[styles.box, styles.box_25p, styles.brownbg]}><Text>5</Text></View>
                <View style={[styles.box, styles.box_25p, styles.bluebg]}><Text>6</Text></View>
                <View style={[styles.box, styles.box_25p, styles.brownbg]}><Text>7</Text></View>
            </View>
            <View style={[styles.row, styles.box_100p, styles.greenbg]}><Text>8</Text></View>
            <View style={[styles.row, styles.box_100p]}>
                <View style={[styles.box, styles.box_50p, styles.bluebg]}><Text>9</Text></View>
                <View style={[styles.box, styles.box_50p, styles.brownbg]}><Text>10</Text></View>
            </View>
        </View>
    )
}

export default Catalog;