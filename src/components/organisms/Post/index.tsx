import React from 'react';
import { ImageSourcePropType, View } from 'react-native';

import PostOptions from './../../molecules/PostOptions';

import { styles } from '../../../pages/Feed/styles';
import PostImage from '../../atoms/PostImage';
import PostHeader from '../../molecules/PostHeader';
import PostAbout from '../../molecules/PostAbout';
import PostDescription from '../../atoms/PostDescription';
import { ItemProps } from '../../../@types/item';

interface PostProps{
   item: ItemProps;
}

export default function Post({ item }: PostProps){
   return (
      <View style={styles.post}>
         <PostHeader />

         <PostImage cover={item.cover} />

         <View style={styles.postFooter}>
            <PostOptions />

            <PostAbout 
               lastLikedUserAvatar={item.lastLiked.avatar}
               likes={item.likes}
            />

            <PostDescription description={item.description}/>
         </View>
      </View>
   );
}