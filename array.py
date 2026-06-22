# hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
# penjualan = []

# for i in range(7):
#     data = int(input(f"Masukkan penjualan hari {hari[i]}: "))
#     penjualan.append(data)

# print("\nData Penjualan:")
# for i in range(7):
#     print(f"{hari[i]} : Rp{penjualan[i]:,}")

# print("\nTotal Penjualan:", sum(penjualan))
# print("Penjualan Tertinggi:", max(penjualan))
# print("Penjualan Terendah:", min(penjualan))

barang = [
    ["Laptop", 10, 7500000],
    ["Mouse", 25, 100000],
    ["Keyboard", 15, 250000],
    ["Monitor", 8, 2000000]
]

print("=== DATA INVENTARIS ===")

for data in barang:
    nama = data[0]
    stok = data[1]
    harga = data[2]
    nilai_stok = stok * harga

    print(f"Barang      : {nama}")
    print(f"Stok        : {stok}")
    print(f"Harga       : Rp{harga:,}")
    print(f"Nilai Stok  : Rp{nilai_stok:,}")
    print("-" * 30)