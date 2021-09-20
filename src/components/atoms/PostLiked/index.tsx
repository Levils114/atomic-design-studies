import React from 'react';
import { Text } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

interface PostLikedProps{
   likes: string;
}

export default function PostLiked({ likes }: PostLikedProps){
   return (
      <Text style={styles.likes}>{likes}</Text>
   );
}