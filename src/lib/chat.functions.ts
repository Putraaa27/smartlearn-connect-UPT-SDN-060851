import { createServerFn } from "@tanstack/react-start";
import { SCHOOL } from "./school-data";

type ChatMessage = { role: "user" | "assistant"; content: string };

export const askChatbot = createServerFn({ method: "POST" })
  .inputValidator((input: { messages: ChatMessage[] }) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      return { reply: "AI belum dikonfigurasi. Coba lagi nanti." };
    }

    const systemPrompt = `Kamu adalah asisten AI resmi untuk ${SCHOOL.name} (NPSN ${SCHOOL.npsn}).
Jawab pertanyaan tentang sekolah dengan ramah, singkat, dan informatif (gunakan Bahasa Indonesia kecuali pengguna memakai bahasa lain).
Gunakan format markdown ringan (bullet, bold) bila membantu.

Informasi sekolah:
- Nama: ${SCHOOL.name}
- NPSN: ${SCHOOL.npsn}
- Akreditasi: ${SCHOOL.accreditation}
- Berdiri: ${SCHOOL.established}
- Kurikulum: ${SCHOOL.curriculum}
- Status: ${SCHOOL.status}
- Alamat: ${SCHOOL.address}
- Hari Operasional: ${SCHOOL.days}
- Jam Operasional: ${SCHOOL.hours}
- Luas: ${SCHOOL.area} m²
- Guru: ${SCHOOL.teachers}
- Tenaga Kependidikan: ${SCHOOL.staff}
- Ruang Kelas: ${SCHOOL.classrooms}
- Perpustakaan: ${SCHOOL.libraries}
- Toilet Guru / Siswa: ${SCHOOL.teacherToilets} / ${SCHOOL.studentToilets}
- Internet: tersedia
- Listrik: tersedia
- Laboratorium: belum tersedia

Jika ditanya hal di luar konteks sekolah, jawab seadanya dan arahkan kembali ke topik sekolah.`;

    try {
      const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [{ role: "system", content: systemPrompt }, ...data.messages],
        }),
      });

      if (!res.ok) {
        if (res.status === 429) return { reply: "Permintaan terlalu banyak. Silakan coba lagi sebentar." };
        if (res.status === 402) return { reply: "Kuota AI sedang habis. Silakan hubungi pengelola sekolah." };
        return { reply: "Maaf, terjadi gangguan pada layanan AI." };
      }

      const json = await res.json();
      const reply: string =
        json?.choices?.[0]?.message?.content ?? "Maaf, saya belum bisa menjawab itu.";
      return { reply };
    } catch (e) {
      console.error("chat error", e);
      return { reply: "Maaf, terjadi kesalahan jaringan." };
    }
  });
