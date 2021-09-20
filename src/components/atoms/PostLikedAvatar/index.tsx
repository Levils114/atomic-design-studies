import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

interface PostLikedAvatarProps{
   lastLikedUserAvatar: ImageSourcePropType;
}

export default function PostLikedAvatar({ lastLikedUserAvatar }: PostLikedAvatarProps){
   return (
      <Image source={lastLikedUserAvatar} style={styles.lastLiked} />
   );
}