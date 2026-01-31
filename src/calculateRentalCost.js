/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const total = days * 40;

  if (days > 6) {
    return total - 50;
  }

  if (days > 2) {
    return total - 20;
  }

  return total;
}

module.exports = calculateRentalCost;
