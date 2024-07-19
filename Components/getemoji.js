const getEmoji = (text) => {
    const emojiRegex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/gu;
    return text.match(emojiRegex) || [];
  };
  
  export default getEmoji;