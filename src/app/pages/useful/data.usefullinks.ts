export type UsefulLink = {
  ref: string,
  name: string,
  text: string,
  rateText: string,
  rate: number,
  img: string,
}

export const usefulLinks:Array<UsefulLink> = [
  {
    ref:`https://rmji.fandom.com/wiki/Main`,
    name:`Вики веб-новеллы "Путешествие к бессмертию"`,
    text:`This wiki explores the world and characters from the Chinese Novel series written by Wang Yu (忘语) published by Qidian. The novel titled (凡人修仙传) is translated to "A Record of a Mortal's Journey to Immortality" and has its own 3D Animation series under the name "Fanren Xiu Xian Chuan"[1].
    The novel consists of two series :
    A Record of a Mortal's Journey to Immortality (凡人修仙传)
    A Record of a Mortal's Journey to Immortality : Immortal World (凡人修仙之仙界篇)
    The contents on this wiki contain spoilers for both series.`,
    rateText:`Более 400 статей контента`,
    rate:3,
    img:'./rmji_wiki.webp'
  },
  {
    ref:`https://a-record-of-a-mortal-is-journey-to-immortality.fandom.com/wiki/A_Record_of_a_Mortal_is_Journey_to_Immortality_Wiki:A_Record_of_a_Mortal%27s_Journey_to_Immortality_Wiki`,
    name:`Неофициальное вики`,
    text:`Welcome to the A Record of a Mortal's Journey to Immortality Wiki by fans for fans
This is an unofficial wiki created by fans for fans, which documents the world of the Chinese novel A Record of a Mortal's Journey to Immortality (凡人修仙传) and its sequel Immortal Realm (凡人修仙之仙界篇), collectively referred to as Fanren henceforth, including its adaptations. Fanren is a popular Chinese Xianxia web novel by writer Wang Yu (忘语).`,
    rate:5,
    rateText:`Огромное количество контента, более 1700 статей. Там же можно почитать книгу на английском языке.`,
    img:'./rmji_chin_char.webp'
  }

]
