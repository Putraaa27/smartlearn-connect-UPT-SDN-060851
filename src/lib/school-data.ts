export const SCHOOL = {
  name: "UPT SD Negeri 060851",
  shortName: "SDN 060851",
  npsn: "10220784",
  accreditation: "B",
  established: 1910,
  curriculum: "Kurikulum 2013",
  status: "Sekolah Dasar Negeri",
  address:
    "Jl. Madong Lubis 1, Sei Kera Hilir II, Medan Perjuangan, Medan, Sumatera Utara",
  city: "Medan, Sumatera Utara",
  days: "Senin – Sabtu",
  hours: "07:00 – 13:00 WIB",
  area: 2926,
  teachers: 8,
  staff: 2,
  classrooms: 6,
  libraries: 1,
  teacherToilets: 4,
  studentToilets: 10,
  internet: true,
  electricity: true,
  laboratory: false,
  // Approximate coordinates for Sei Kera Hilir II, Medan Perjuangan
  lat: 3.595,
  lng: 98.692,
};

export const FACILITY_DATA = [
  { name: "Ruang Kelas", value: SCHOOL.classrooms, color: "var(--color-chart-1)" },
  { name: "Perpustakaan", value: SCHOOL.libraries, color: "var(--color-chart-2)" },
  { name: "Toilet Guru", value: SCHOOL.teacherToilets, color: "var(--color-chart-3)" },
  { name: "Toilet Siswa", value: SCHOOL.studentToilets, color: "var(--color-chart-4)" },
];

export const INFRASTRUCTURE_DATA = [
  { name: "Kelas", count: SCHOOL.classrooms },
  { name: "Perpustakaan", count: SCHOOL.libraries },
  { name: "Toilet Guru", count: SCHOOL.teacherToilets },
  { name: "Toilet Siswa", count: SCHOOL.studentToilets },
  { name: "Lab", count: SCHOOL.laboratory ? 1 : 0 },
];

export const STAFF_DATA = [
  { name: "Guru", value: SCHOOL.teachers },
  { name: "Tenaga Kependidikan", value: SCHOOL.staff },
];

export const GROWTH_DATA = [
  { year: "1910", milestone: 5 },
  { year: "1950", milestone: 25 },
  { year: "1980", milestone: 55 },
  { year: "2000", milestone: 75 },
  { year: "2013", milestone: 88 },
  { year: "2024", milestone: 96 },
];

export const TIMELINE = [
  { year: "1910", title: "Pendirian Sekolah", desc: "UPT SD Negeri 060851 didirikan sebagai bagian dari sistem pendidikan dasar di Medan." },
  { year: "1950", title: "Pasca Kemerdekaan", desc: "Sekolah berkembang sebagai pusat pendidikan dasar bagi anak-anak Medan Perjuangan." },
  { year: "1994", title: "Pembaruan Fasilitas", desc: "Pembangunan dan renovasi ruang kelas serta sarana pendukung." },
  { year: "2013", title: "Penerapan Kurikulum 2013", desc: "Mengadopsi Kurikulum 2013 untuk pembelajaran tematik dan karakter." },
  { year: "2020", title: "Akreditasi B", desc: "Memperoleh akreditasi B yang menegaskan kualitas pendidikan." },
  { year: "2024", title: "Era Smart School", desc: "Inisiatif digitalisasi informasi sekolah dan layanan publik." },
];
