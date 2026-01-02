function calculate() {
  const top = Number(document.getElementById("top").value);
  const bottom = Number(document.getElementById("bottom").value);
  const left = Number(document.getElementById("left").value);
  const right = Number(document.getElementById("right").value);

  if (!top || !bottom || !left || !right) {
    alert("कृपया सर्व बाजूंची मोजमाप भरा");
    return;
  }

  // Average method
  const length = (top + bottom) / 2;
  const width = (left + right) / 2;
  const area = length * width; // sq.ft

  // Guntha calculation
  const totalGuntha = area / 1089;

  // Acre + remaining guntha
  const acre = Math.floor(totalGuntha / 40);
  const remainingGuntha = Math.round(totalGuntha - (acre * 40));

  // Display (AS YOU WANT)
  document.getElementById("area").innerText = area.toFixed(2);
  document.getElementById("totalGuntha").innerText = totalGuntha.toFixed(2);
  document.getElementById("land").innerText =
    acre + " एकर " + remainingGuntha + " गुंठे";
}
