def binary_search(data, cari):
    kiri = 0
    kanan = len(data) - 1

    while kiri <= kanan:
        tengah = (kiri + kanan) // 2

        if data[tengah] == cari:
            return tengah
        elif data[tengah] < cari:
            kiri = tengah + 1
        else:
            kanan = tengah - 1

    return -1


nim_mahasiswa = [101, 105, 110, 115, 120, 125, 130]

print("Daftar NIM:", nim_mahasiswa)

cari_nim = int(input("Masukkan NIM yang dicari: "))

hasil = binary_search(nim_mahasiswa, cari_nim)

if hasil != -1:
    print(f"NIM {cari_nim} ditemukan pada index ke-{hasil}")
else:
    print(f"NIM {cari_nim} tidak ditemukan")



# def seq_search(data, kunci):
#     """Mencari semua indeks kemunculan kunci."""
    
#     hasil = []

#     for i in range(len(data)):
#         if data[i] == kunci:
#             hasil.append(i)

#     return hasil


# # Array dengan elemen duplikat
# data = [15, 42, 8, 73, 27, 73, 55, 73]
# kunci = 73

# hasil = seq_search(data, kunci)

# # Menampilkan hasil
# if len(hasil) > 0:
#     print(f"Kunci {kunci} ditemukan pada indeks: {hasil}")
# else:
#     print(f"Kunci {kunci} tidak ditemukan")