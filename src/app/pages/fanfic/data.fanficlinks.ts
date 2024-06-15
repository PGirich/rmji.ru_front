export type FanficLink = {
  ref: string;
  name: string;
  text: string;
  rateText: string;
  rate: number;
  img: string;
};

export const fanficLinks: Array<FanficLink> = [
  {
    ref: `https://wuxiayue.com/list/1024/`,
    name: `Веб-новелла Fairy Wood Romance, автор: a little lucky cat, 2022- (1614 глав, не окончено)`,
    text: `In a turbulent era, a young man who escaped from famine was sold into a mine for ten steamed buns. However, he accidentally obtained a 'Dry Water Sutra' and embarked on the path of cultivation. Qi refining, foundation building, golden elixir, and birth of a baby... On the road to cultivating immortality, he overcame thorns and thorns, refined weapons and pills, practiced magic and gods, and overcame tribulations against the will of heaven. When one day he stood at the pinnacle of the world, he was surprised to find...`,
    rateText: `Машинный перевод снижает удовольствие от мира, очень похожего на вселенную Путешествия к бессмертию, но приноровиться можно. Строго говоря, это не фанфик, но мир очень похож`,
    rate: 4,
    img: './fanfic_fairy.jpg',
  },
  {
    ref: `https://www.fansmtl.org/novel/i-am-cultivating-immortality-with-science.html`,
    name: `Веб-новелла I Am Cultivating Immortality With Science, автор: lqing, 2022- (859 глав, не окончено)`,
    text: `Luo Hong stood in front of the Yellow Maple Valley Mountain Gate, at this moment he had to admit the fact that he had traveled to “Mortal’s Journey To Immortality”.
Pushing the glasses that no longer existed, Luo Hong said decisively: “I am a fourth-grade pseudo-spiritual root like Old Demon Han, but I don’t have a vial. It seems that the only way to go is scientific cultivation!”
Why is there a bottleneck every four layers during the Qi refining period?
How to maximize the probability of foundation building?`,
    rateText: `Машинный перевод снижает удовольствие от вселенной Путешествия к бессмертию, но приноровиться можно. Главный герой идет рядом с Хань Ли, применяя научные знания и этого достаточно, чтобы стать значимым в мире, где только сила дает право.`,
    rate: 4,
    img: './fanfic_science.jpg',
  },
];
