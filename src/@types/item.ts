import { ImageSourcePropType } from "react-native";
import { AvatarProps } from "./avatar";

export interface ItemProps{
   id: string;
   likes: string;
   cover: ImageSourcePropType;
   description: string;
   lastLiked: AvatarProps;
}