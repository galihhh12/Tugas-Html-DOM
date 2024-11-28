// Ambil semua elemen <li> menggunakan querySelectorAll
const listItems = document.querySelectorAll("#container2 ul li");

// Loop melalui setiap elemen <li> 
listItems.forEach((item, index) => {
    // Ubah teks
    item.textContent = `List Baru ${index + 1}`;

    // Ubah style font
    item.style.fontSize = "18px"; 
    item.style.fontWeight = "bold"; 
    item.style.color = "white"; 

    // Ubah background
    item.style.backgroundColor = "green"; 
    item.style.padding = "10px"; 
    item.style.margin = "10px 0"; 
    item.style.borderRadius = "5px"; 
});
