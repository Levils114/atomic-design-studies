import React from 'react';
import { Text } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

interface PostDescriptionProps{
   description: string;
}

export default function PostDescription({ description }: PostDescriptionProps){
   return (
      <Text style={styles.description}>{description}</Text>
   );
}