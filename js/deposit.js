
document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositAmount = getInputFieldById('deposit-field');

    const preDepositTotal = getTextElementValueById('deposit-total');

    const newDepositTotal = preDepositTotal + newDepositAmount;

    setElementValueById('deposit-total', newDepositTotal);

    const preBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = preBalanceTotal + newDepositAmount;
    setElementValueById('balance-total', newBalanceTotal);

})