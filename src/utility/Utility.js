export function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    const date = new Date(`${year}-${month}-${day}`);
  
    const dateis =  date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    console.log(dateString, dateis);
    return dateis;
  }

  export async function getCountryCode(countryName){
    const res = await fetch('https://restcountries.com/v3.1/name/${countryName}');
    const data = await res.json();
    return data?.data[0];
  }