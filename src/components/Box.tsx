import React from 'react'
import {View, Text} from 'react-native'
import styles from '../services/styles'

interface Props {
    number: number,
    color: string
}

const Box = (props: Props) => {
  return (
    <>
        <View style={[styles.box, styles.box_50p, {backgroundColor:props.color}]}><Text>{props.number}</Text></View>
    </>
  )
}

export default Box