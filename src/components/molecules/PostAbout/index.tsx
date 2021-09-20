import React from 'react';
import { ImageSourcePropType, View } from 'react-native';

import { styles } from '../../../pages/Feed/styles';
import PostLiked from '../../atoms/PostLiked';
import PostLikedAvatar from '../../atoms/PostLikedAvatar';

interface PostAboutProps{
   lastLikedUserAvatar: ImageSourcePropType;
   likes: string;
}

export default function PostAbout({ lastLikedUserAvatar, likes }: PostAboutProps){
   return (
      <View style={styles.postAbout}>
         <PostLikedAvatar lastLikedUserAvatar={lastLikedUserAvatar}/>
         <PostLiked likes={likes}/>
      </View>
   );
}