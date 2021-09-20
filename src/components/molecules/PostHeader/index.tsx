import React from 'react';
import { View } from 'react-native';

import PostAvatar from '../../atoms/PostAvatar';
import PostLocation from '../../atoms/PostLocation';
import PostUsername from '../../atoms/PostUsername';

import { styles } from '../../../pages/Feed/styles';

export default function PostHeader(){
   return (
      <View style={styles.postHeader}>
         <PostAvatar />
         <View>
            <PostUsername />
            <PostLocation />
         </View>
      </View>
   );
}