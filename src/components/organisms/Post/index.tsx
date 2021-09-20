import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

import PostOptions from './../../molecules/PostOptions';

import { styles } from '../../../pages/Feed/styles';
import PostImage from '../../atoms/PostImage';
import PostHeader from '../../molecules/PostHeader';

interface AvatarProps{
   id: string;
   name: string;
   avatar: ImageSourcePropType;
}

interface ItemProps{
   id: string;
   likes: string;
   cover: ImageSourcePropType;
   description: string;
   lastLiked: AvatarProps;
}

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

            <View style={styles.postAbout}>
               <Image source={item.lastLiked.avatar} style={styles.lastLiked} />
               <Text style={styles.likes}>{item.likes}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
         </View>
      </View>
   );
}