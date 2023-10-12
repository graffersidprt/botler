// translateUtils.js
import i18next from './i18next';

function translateText(text) {
  // Check if the text contains a language tag (e.g., "(FR) Filter")
  const languageTag = text.match(/^\((\w+)\)\s(.+)$/);
  console.log('languageTag', languageTag)
  
  if (languageTag && languageTag[1] && languageTag[2]) {
    console.log('tryee')
    return i18next.t(languageTag[2], { lng: 'fr', format: 'translate' }); // Translate if a language tag is present
  } else {
    return text; // Return the original text if no language tag is found
  }
}

export default translateText;
