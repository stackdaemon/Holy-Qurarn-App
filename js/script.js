const loadData = () => {
  const url = `https://api.alquran.cloud/v1/surah`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayName(data.data));
};
const displayName = (names) => {
     const nameContainer=document.getElementById("nameContainer")
     nameContainer.innerHTML="";
  for (let i of names) {
    console.log(i.englishName);
    const newDiv =document.createElement("div");
    newDiv.innerHTML=`
    <div class="flex justify-between items-center bg-gray-100 shadow-sm p-2 mt-4 px-6 rounded-lg">
                    <div > <span class="font-bold text-xl bg-green-700  py-1 px-3 rounded-lg text-white flex justify-center items-center ">${i.number}</span></div>
                    <div >
                         <h3 class="text-xl font-bold">${i.englishName}</h3>
                         <p class="font-semibold">${i.englishNameTranslation}</p>
                    </div>
                    <div>
                         <h3 class="font-bold">${i.name}</h3>
                    </div>
               </div>
    `;
    nameContainer.appendChild(newDiv)
  }
};
loadData();

// englishName: "Al-Faatiha";
// englishNameTranslation: "The Opening";
// name: "سُورَةُ ٱلْفَاتِحَةِ";
// number: 1;
// numberOfAyahs: 7;
// revelationType: "Meccan";
