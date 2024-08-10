import bcd from '@mdn/browser-compat-data';

chrome.runtime.onInstalled.addListener(() => {
  fetchDailyBite();
});

function fetchDailyBite() {
  const randomProperty = getRandomCssProperty();
  const supportData = bcd.css.properties[randomProperty].__compat.support;
  const dailyBite = {
    property: randomProperty,
    support: supportData
  };

  chrome.storage.local.set({ dailyBite });
}

function getRandomCssProperty() {
  const properties = Object.keys(bcd.css.properties);
  const randomIndex = Math.floor(Math.random() * properties.length);
  return properties[randomIndex];
}
