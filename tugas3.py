# def hitung_total(data):
#     total = 0
#     for x in data:
#         total += x
#     return total

# def hitung_rata(data):
#     return hitung_total(data) / len(data)

# def cari_maks(data):
#     maks = data[0]
#     for x in data:
#         if x > maks:
#             maks = x
#     return maks

# def cari_min(data):
#     minimum = data[0]
#     for x in data:
#         if x < minimum:
#             minimum = x
#     return minimum


# # Input 8 bilangan bulat
# nilai = []

# for i in range(8):
#     angka = int(input(f"Masukkan bilangan ke-{i+1}: "))
#     nilai.append(angka)

# # Menampilkan semua elemen array
# print("\nIsi array:", nilai)

# # Menampilkan hasil perhitungan
# print(f"Total        : {hitung_total(nilai)}")
# print(f"Rata-rata    : {hitung_rata(nilai):.2f}")
# print(f"Nilai terbesar : {cari_maks(nilai)}")
# print(f"Nilai terkecil: {cari_min(nilai)}")








def cek_kelulusan(nilai):
    if nilai >= 70:
        return "LULUS"
    else:
        return "TIDAK LULUS"


# Array untuk menyimpan nama dan nilai
nama_mahasiswa = []
nilai_mahasiswa = []

# Input data 5 mahasiswa
for i in range(5):
    print(f"\nData Mahasiswa ke-{i+1}")
    
    nama = input("Masukkan nama  : ")
    nilai = int(input("Masukkan nilai : "))
    
    nama_mahasiswa.append(nama)
    nilai_mahasiswa.append(nilai)

# Menampilkan hasil
print("\nDAFTAR NILAI MAHASISWA")
print("-" * 40)

for i in range(5):
    print(f"Nama   : {nama_mahasiswa[i]}")
    print(f"Nilai  : {nilai_mahasiswa[i]}")
    print(f"Status : {cek_kelulusan(nilai_mahasiswa[i])}")
    print("-" * 40)
