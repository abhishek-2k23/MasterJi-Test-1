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