const billingFunction = () => {
    const name = document.getElementById("billingNameFPTTTTTTt").value;
    const zip =  document.getElementById("billingZipFPTTTTTTTt").value;
    console.log(name,zip);
    alert(name,zip);
    document.getElementById("billingNameFPTTTTTTt").value = "";
    document.getElementById("billingZipFPTTTTTTTt").value = "";
  }
  billingFunction();