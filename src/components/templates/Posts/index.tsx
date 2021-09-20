import React from 'react';
import { FlatList } from 'react-native';
import { ItemProps } from '../../../@types/item';

import { styles } from '../../../pages/Feed/styles';
import Post from '../../organisms/Post';

interface PostsProps{
  posts: ItemProps[];
}

export default function Posts({ posts }: PostsProps){
   return (
      <FlatList
        data={posts}
        style={styles.posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={post => post.id}
        renderItem={({ item }) => (
          <Post item={item}/>
        )}
      />
   );
}