"use strict";

var billingFunction = function billingFunction() {
  var name = document.getElementById("billingNameFPTTTTTTt").value;
  var zip = document.getElementById("billingZipFPTTTTTTTt").value;
  console.log(name, zip);
  alert(name, zip);
  document.getElementById("billingNameFPTTTTTTt").value = "";
  document.getElementById("billingZipFPTTTTTTTt").value = "";
};

billingFunction();