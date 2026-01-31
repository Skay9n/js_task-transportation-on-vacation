/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const off50 = 50;
  const off20 = 20;
  const total = days * dailyRate;

  if (days > 6) {
    return total - off50;
  }

  if (days > 2) {
    return total - off20;
  }

  return total;
}

module.exports = calculateRentalCost;
