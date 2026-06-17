penjualan = [150000, 200000, 175000, 300000, 250000, 400000, 350000]

hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]

print("Laporan Penjualan Mingguan")

for i in range(len(penjualan)):
    print(f"{hari[i]} : Rp{penjualan[i]:,}")

print("\nTotal Penjualan:", sum(penjualan))
print("Penjualan Tertinggi:", max(penjualan))
print("Penjualan Terendah:", min(penjualan))