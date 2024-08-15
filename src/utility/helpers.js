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