import emotionEmojis from "@/lib/statics/emotionEmojis";
import openScopes from "@/lib/statics/openScopes";

export default interface Diary {
  id?: number;
  ownerName?: string;
  title: string;
  content: string;
  hashtagList: string[];
  emotion: keyof typeof emotionEmojis;
  openScope: keyof typeof openScopes;
  createdTime?: Date;
  modifiedTime?: Date;
}
