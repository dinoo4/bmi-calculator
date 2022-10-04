const hasilPerhitungan = document.getElementById("hasilPerhitungan");
const btnCount = document.getElementById("btnCount");
const hasilIndikator = document.getElementById("hasilIndikator");
const hasilBMI = document.getElementById("hasilBMI");

hasilPerhitungan.style.display = "none";

btnCount.addEventListener("click", function () {
	const weight = parseInt(document.getElementById("weight").value);
	const height = parseInt(document.getElementById("height").value);

	const hasil = weight / (height / 100) ** 2;
	console.log(hasil);

	hasilPerhitungan.style.display = "block";

	hasilBMI.innerText = hasil.toFixed(1);

	if (hasil > 30) {
		hasilIndikator.innerText = "Obesity";
	} else if (hasil >= 25 && hasil <= 29.9) {
		hasilIndikator.innerText = "Overweight";
	} else if ((hasil >= 18.5) & (hasil <= 24.9)) {
		hasilIndikator.innerText = "Normal";
	} else {
		hasilIndikator.innerText = "Underweight";
	}
});
