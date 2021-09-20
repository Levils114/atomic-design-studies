import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

interface PostImageProps{
   cover: ImageSourcePropType;
}

export default function PostImage({ cover }: PostImageProps){
   return (
      <Image source={cover} style={styles.cover} />
   );
}