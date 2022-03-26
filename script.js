function nonTo() {
	document.getElementById('tombo').style.display = "none";
}

function showTo() {
	document.getElementById('tombo').style.display = "block";
}

function nonFo() {
	document.getElementById('idfoto').style.display = "none";
}

function showFo() {
	document.getElementById('idfoto').style.display = "block";
}

function nonDiv() {
	document.getElementById('Content').style.display = "none";
}

function showDiv() {
	ketik();
	document.getElementById('Content').style.opacity = "1";
	document.getElementById('Content').style.margin = "0";
}

var i = 0,
	text;
text = ""
var u = 0,
	text2;
text2 = ""

function ketik() {
	if (i < text.length) {
		document.getElementById("text").innerHTML += text.charAt(i);
		i++;
		setTimeout(ketik, 100);
	}
	if (i == text.length) {
		document.getElementById("text").innerHTML = text + emotnama;
		ketikk();
	}
}

function ketikk() {
	if (u < text2.length) {
		document.getElementById("text2").innerHTML += text2.charAt(u);
		u++;
		setTimeout(ketikk, 200);
	}
	if (u == text2.length) {
		document.getElementById('tlink').style.display = "block";
	}
}

function play() { //Link Audio Bisa Diganti
	var audio = new Audio('https://ayang.likeadream.repl.co/Dengarkanlah.mp3');
	audio.play();
}

const swals = Swal.mixin({
	allowOutsideClick: false,
	cancelButtonColor: '#FF0040',
});
const swalsy = Swal.mixin({
	confirmButtonText: 'Iya',
	allowOutsideClick: false,
});
const swalst = Swal.mixin({
	allowOutsideClick: false,
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
});

async function mulaitanya() {
	var {
		isConfirmed: tanyawal
	} = await swals.fire({
		title: `Hai kamu!`,
		text: `Mau isi nama kamu dulu atau langsung aja?`,
		imageUrl: 'https://i.postimg.cc/g0hzxVX7/valentines-day-icegif-29.gif',
		imageWidth: 120,
		imageHeight: 120,
		confirmButtonText: 'Isi Nama',
		cancelButtonText: 'Langsung Aja',
		allowOutsideClick: false,
		showCancelButton: true,
	});
	if (tanyawal) {
		mulai();
		play();
	} else {
		nama = 'Kamu';
		kuis();
		play();
	}
}

async function mulai() {
	var {
		value: nama
	} = await swals.fire({
		title: 'Masukin nama kamu',
		input: 'text',
		imageUrl: 'https://i.postimg.cc/vDFQZzhM/yyy.gif',
		imageWidth: 120,
		imageHeight: 120,
		allowOutsideClick: false,
		showCancelButton: false,
	});
	if (nama && nama.length < 11) {
		window.nama = nama;
		kuis();
	} else {
		await swals.fire('Ups!', 'Nama tidak boleh kosong atau lebih dari 10 karakter, ya!');
		mulai();
	}
}
async function kuis() {
	text = "Dear, " + nama + ".    ";
	emotnama = "&#10084;";
	text2 = "Kalo " + nama + " tau, aku sedang mengharapkan pesan darimu yang selalu membuatku tersenyum ><       ";
	pilihwarna();
}
mulaitanya();

maupilih = "mau pilih warna apa nih?";
warnaA = "Ungu";
warnaB = "Merah";
vyakin = "Yakin";
vganti = "Ganti";
emotketawa = "&#129315;";

teksatas = "Yeayy!";
teksatasoke = "Oke!";
teksakhiroke = "Sekarang lihat ini ya ><";
teksbawahA = "Memilih Ungu... Kamu adalah milikku!";
teksbawahAA = "yakin pilih warna Ungu?";
teksbawahAAA = "Atau mau ganti warna aja nih?";
teksbawahB = "Memilih Merah... Kamu adalah kesayanganku!";
teksbawahBB = "yakin pilih warna Merah?";
teksbawahBBB = "Atau mau ganti warna aja nih?";

teksgantiA = "Oke, memilih Merah!";
teksgantiAA = "Sama aja sih sebenernya, cuma kalo Merah rasa Stroberi" + emotketawa;
teksgantiB = "Oke, memilih Ungu!";
teksgantiBB = "Sama aja sih sebenernya, cuma beda warna doang" + emotketawa;

gambar1 = "https://i.postimg.cc/hj9kJXdg/bear-run-cant-run.gif";
gambar2 = "https://i.postimg.cc/mDCsQdKv/gigit.gif";
gambar3 = "https://i.postimg.cc/3RXmq7fQ/mimibubu-1.gif";

async function pilihwarna() {
	var {
		isConfirmed: warna
	} = await swals.fire({
		title: nama + ' ' + maupilih,
		imageUrl: '' + gambar1,
		imageWidth: 120,
		imageHeight: 120,
		showCancelButton: true,
		confirmButtonText: '' + warnaA,
		cancelButtonText: '' + warnaB,
	});
	if (warna) {
		await swals.fire({
			title: '' + teksatas,
			text: '' + teksbawahA,
			imageUrl: '' + gambar2,
			imageWidth: 120,
			imageHeight: 120,
		});
		var {
			isConfirmed: warna2
		} = await swals.fire({
			title: nama + ' ' + teksbawahAA,
			text: '' + teksbawahAAA,
			showCancelButton: true,
			confirmButtonText: '' + vyakin,
			cancelButtonText: '' + vganti,
		});
		if (warna2) {
			await swals.fire({
				title: '' + teksatasoke,
				text: '' + teksakhiroke,
			});
			showDiv();
		} else {
			await swals.fire({
				title: '' + teksgantiA,
				html: '' + teksgantiAA,
				imageUrl: '' + gambar3,
				imageWidth: 120,
				imageHeight: 120,
			});
			showDiv();
		}
		//Selingan
	} else {
		await swals.fire({
			title: '' + teksatas,
			text: '' + teksbawahB,
			imageUrl: '' + gambar2,
			imageWidth: 120,
			imageHeight: 120,
		});
		var {
			isConfirmed: warna2
		} = await swals.fire({
			title: nama + ' ' + teksbawahBB,
			text: '' + teksbawahBBB,
			showCancelButton: true,
			confirmButtonText: '' + vganti,
			cancelButtonText: '' + vyakin,
		});
		if (warna2) {
			await swals.fire({
				title: '' + teksgantiB,
				html: '' + teksgantiBB,
				imageUrl: '' + gambar3,
				imageWidth: 120,
				imageHeight: 120,
			});
			showDiv();
		} else {
			await swals.fire({
				title: '' + teksatasoke,
				text: '' + teksakhiroke,
			});
			showDiv();
		}
	}
}
async function popup() {
	await swals.fire({
		title: '><',
		imageUrl: 'https://i.postimg.cc/QMryKNTR/uwu.gif',
		imageWidth: 300,
		imageHeight: 300,
	});
}
