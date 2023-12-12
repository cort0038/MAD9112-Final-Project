
function getDaysUntilChristmas() {
  const today = new Date().getDate()
  const christmasDay = 25
  return christmasDay - today
}
console.log(`We are ${getDaysUntilChristmas()} days away from Christmas`)