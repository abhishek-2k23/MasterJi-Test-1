export function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    const date = new Date(`${year}-${month}-${day}`);
  
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  export async function getCountryCode(countryName){
    console.log(countryName);
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await res.json();
    console.log(data[0]?.cca2)
    return data[0]?.cca2;
  }

  // for random jokes
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  function formatDateTime(date) {
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    const formattedTime = date.toLocaleTimeString(undefined, timeOptions).toLowerCase();
    
    const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
    
    return `${formattedTime} · ${formattedDate}`;
  }
  
  export function generateRandomData() {
    const v = `${getRandomInt(1, 9)}.${getRandomInt(1, 9)}M`;
    const l = `${getRandomInt(1, 9)}.${getRandomInt(1, 9)}K`;
    const re = `${getRandomInt(1, 9)}.${getRandomInt(1, 9)}K`;
    const c = `${getRandomInt(1, 9)}.${getRandomInt(1, 9)}K`;
    const s = `${getRandomInt(1, 9)}.${getRandomInt(1, 9)}K`;
    const d = formatDateTime(getRandomDate(new Date(2022, 0, 1), new Date()));
  
    return { v, l, re, d, c,s};
  }