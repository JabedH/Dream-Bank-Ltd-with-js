// capture value
function getInputValue(valueIdName) {
  let getInputValueId = document.getElementById(valueIdName);
  const getInputValue = parseFloat(getInputValueId.value);
  getInputValueId.value = " ";
  return getInputValue;
}
// add value
function addInputValue(newGetInputValue, addInputId) {
  const getDepositValueId = document.getElementById(addInputId);
  const getDepositValue = parseFloat(getDepositValueId.innerText);
  const totalDeposit = newGetInputValue + getDepositValue;
  getDepositValueId.innerText = totalDeposit;
}
// add balance
function newTotalBalance(newGetInputValue, isAdd) {
  const addMainBalance = document.getElementById("incriseBalance");
  const mainBalance = parseFloat(addMainBalance.innerText);
  if (isAdd == true) {
    addMainBalance.innerText = mainBalance + newGetInputValue;
  } else {
    addMainBalance.innerText = mainBalance - newGetInputValue;
  }
}
// deposite section
document.getElementById("depositBtn").addEventListener("click", function () {
  const newGetInputValue = getInputValue("depositValue");
  if (newGetInputValue > 0) {
    addInputValue(newGetInputValue, "depositBalance");
    newTotalBalance(newGetInputValue, true);
  }
});
document.getElementById("withdrawBtn").addEventListener("click", function () {
  const getWithdrawValue = getInputValue("withdraw");
  // catch total balance
  const negative = document.getElementById("incriseBalance");
  const newNegative = negative.innerText;
  const totalNegative = parseFloat(newNegative);
  // ------
  if (getWithdrawValue > 0 && totalNegative > getWithdrawValue) {
    addInputValue(getWithdrawValue, "withdrawBalance");
    newTotalBalance(getWithdrawValue, false);
  }
});
