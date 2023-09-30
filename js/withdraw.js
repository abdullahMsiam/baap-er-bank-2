document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldById('withdraw-field');
    const preWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = preWithdrawTotal + newWithdrawAmount;

    setElementValueById('withdraw-total', newWithdrawTotal);

    const preBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = preBalanceTotal - newWithdrawAmount;

    setElementValueById('balance-total', newBalanceTotal);
})