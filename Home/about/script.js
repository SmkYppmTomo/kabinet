// translate
document.getElementById('ind').onclick = function() {
	document.getElementById('title').innerHTML = "Tentang Kami"
	document.getElementById('teks').innerHTML = "Kami adalah organisasi intra sekolah, kami membangun website ini dengan tujuan supaya sekolah kami lebih maju lagi di dalam bidang media terutama website, semoga saja dengan didirikan website ini bisa lebih maju dan terkenal.";
	p[0].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Organisasi Siswa Intra Sekolah</strong> (OSIS) adalah sebuah organisasi resmi satu-satunya di sekolah yang diakui oleh Kementerian Pendidikan Nasional Republik Indonesia sejak 21 Maret 1970. Organisasi ini memiliki peran sebagai penggerak siswa untuk aktif berkontribusi di sekolah.[1] Ia merupakan wadah Pembinaan Kesiswaan di sekolah untuk pengembangan minat, bakat serta potensi Siswa. Ia berfungsi sebagai wadah untuk membicarakan beberapa hal tentang sekolah lebih lanjut,seperti acara,lomba,dll."
	p[1].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;OSIS dimulai pada Sekolah Menengah, yaitu Sekolah Menengah Pertama (SMP) dan Sekolah Menengah Atas (SMA). Beberapa tugas OSIS:menyiapkan acara sekolah dengan mengajukan proposal kepada pihak sekolah melalui berbagai pertimbangan dan kesepakatan bersama, mengumpulkan iuran dari setiap warga sekolah untuk pendanaan kegiatan maupun donasi kepada warga sekolah yang tertimpa kemalangan."
	p[2].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Sebelum lahirnya OSIS, di sekolah-sekolah tingkat SLTP dan SLTA terdapat organisasi yang bebagai macam corak bentuknya. Ada organisasi siswa yang hanya dibentuk oleh sekolah itu sendiri, dan ada pula organisasi siswa yang dibentuk oleh organisasi siswa di luar sekolah. Organisasi siswa yang dibentuk dan mempunyai hubungan dengan organisasi siswa dari luar sekolah, sebagian ada yang mengarah pada hal-hal bersifat politis, sehingga kegiatan organisasi siswa tersebut dikendalikan dari luar sekolah sebagai tempat diselenggarakannya proses belajar mengajar. Akibat dari keadaan yang demikian itu, maka timbullah loyalitas ganda, disatu pihak harus melaksanakan peraturan yang dibuat Kepala Sekolah, sedang dipihak lain harus tunduk kepada organisasi siswa yang dikendalikan di luar sekolah."
	title.innerHTML = "Sejarah"
}

document.getElementById('eng').onclick = function() {
	document.getElementById('title').innerHTML = "About Us"
	document.getElementById('teks').innerHTML = "We are an intra-school organization, we built this website with the aim that our school will be even more advanced in the field of media, especially websites, hopefully by establishing this website it can be more advanced and well-known.";
	p[0].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<strong>The Intra-School Student Organization</strong> (OSIS) is the only official organization in schools recognized by the Ministry of National Education of the Republic of Indonesia since March 21, 1970. This organization has a role as an activator for students to actively contribute to school.[1] It is a forum for Student Development in schools to develop students' interests, talents and potential. It serves as a forum for discussing various matters regarding further schooling, such as events, competitions, etc."
	p[1].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;OSIS starts at Middle School, namely Junior High School (SMP) and High School (SMA). Some of the OSIS tasks: preparing school events by submitting proposals to the school through various considerations and mutual agreements, collecting contributions from each school member for funding activities and donations to school members who have been hit by misfortune."
	p[2].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Before the birth of OSIS, in junior and senior high schools there were organizations of various kinds. There are student organizations formed only by the school itself, and there are also student organizations formed by student organizations outside the school. Student organizations that are formed and have relationships with student organizations from outside the school, some of which lead to political matters, so that the activities of these student organizations are controlled from outside the school as a place for the teaching and learning process to be held. As a result of such a situation, a double loyalty arises, on the one hand one has to carry out the rules made by the principal, while on the other hand one has to submit to student organizations which are controlled outside of school."
	title.innerHTML = "History"
};


const teks = document.getElementById('teks');
const submit = document.getElementById('submit');
const content = document.querySelector('.content');
const p = content.querySelectorAll('p');
const title = document.getElementById('judul');

submit.onclick = function() {
	const hasil = teks.value;
	alert(hasil)
}
