// 1. إعدادات وربط Firebase بمشروع LATRASE GROUP
const firebaseConfig = {
  apiKey: "AIzaSyDiJIf6YtwwnBB78nHq8S9kkqxZlmNjVBk",
  authDomain: "latrase-group.firebaseapp.com",
  projectId: "latrase-group",
  storageBucket: "latrase-group.firebasestorage.app",
  messagingSenderId: "954906635169",
  appId: "1:954906635169:web:adce3b89cffae3013839e0",
  measurementId: "G-8H3Q53WSZJ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const peopleCollection = db.collection("people");

let currentLang = 'ar';
let peopleData = [];

// 2. قائمة ولايات الجزائر الـ 58 كاملة
const wilayasData = [
  { code: 1, ar: "1. أدرار", fr: "1. Adrar", en: "1. Adrar" },
  { code: 2, ar: "2. الشلف", fr: "2. Chlef", en: "2. Chlef" },
  { code: 3, ar: "3. الأغواط", fr: "3. Laghouat", en: "3. Laghouat" },
  { code: 4, ar: "4. أم البواقي", fr: "4. Oum El Bouaghi", en: "4. Oum El Bouaghi" },
  { code: 5, ar: "5. باتنة", fr: "5. Batna", en: "5. Batna" },
  { code: 6, ar: "6. بجاية", fr: "6. Béjaïa", en: "6. Béjaïa" },
  { code: 7, ar: "7. بسكرة", fr: "7. Biskra", en: "7. Biskra" },
  { code: 8, ar: "8. بشار", fr: "8. Béchar", en: "8. Béchar" },
  { code: 9, ar: "9. البليدة", fr: "9. Blida", en: "9. Blida" },
  { code: 10, ar: "10. البويرة", fr: "10. Bouira", en: "10. Bouira" },
  { code: 11, ar: "11. تمنراست", fr: "11. Tamanrasset", en: "11. Tamanrasset" },
  { code: 12, ar: "12. تبسة", fr: "12. Tébessa", en: "12. Tébessa" },
  { code: 13, ar: "13. تلمسان", fr: "13. Tlemcen", en: "13. Tlemcen" },
  { code: 14, ar: "14. تيارت", fr: "14. Tiaret", en: "14. Tiaret" },
  { code: 15, ar: "15. تيزي وزو", fr: "15. Tizi Ouzou", en: "15. Tizi Ouzou" },
  { code: 16, ar: "16. الجزائر", fr: "16. Alger", en: "16. Algiers" },
  { code: 17, ar: "17. الجلفة", fr: "17. Djelfa", en: "17. Djelfa" },
  { code: 18, ar: "18. جيجل", fr: "18. Jijel", en: "18. Jijel" },
  { code: 19, ar: "19. سطيف", fr: "19. Sétif", en: "19. Sétif" },
  { code: 20, ar: "20. سعيدة", fr: "20. Saïda", en: "20. Saïda" },
  { code: 21, ar: "21. سكيكدة", fr: "21. Skikda", en: "21. Skikda" },
  { code: 22, ar: "22. سيدي بلعباس", fr: "22. Sidi Bel Abbès", en: "22. Sidi Bel Abbes" },
  { code: 23, ar: "23. عنابة", fr: "23. Annaba", en: "23. Annaba" },
  { code: 24, ar: "24. قالمة", fr: "24. Guelma", en: "24. Guelma" },
  { code: 25, ar: "25. قسنطينة", fr: "25. Constantine", en: "25. Constantine" },
  { code: 26, ar: "26. المدية", fr: "26. Médéa", en: "26. Medea" },
  { code: 27, ar: "27. مستغانم", fr: "27. Mostaganem", en: "27. Mostaganem" },
  { code: 28, ar: "28. المسيلة", fr: "28. M'Sila", en: "28. M'Sila" },
  { code: 29, ar: "29. معسكر", fr: "29. Mascara", en: "29. Mascara" },
  { code: 30, ar: "30. ورقلة", fr: "30. Ouargla", en: "30. Ouargla" },
  { code: 31, ar: "31. وهران", fr: "31. Oran", en: "31. Oran" },
  { code: 32, ar: "32. البيض", fr: "32. El Bayadh", en: "32. El Bayadh" },
  { code: 33, ar: "33. إليزي", fr: "33. Illizi", en: "33. Illizi" },
  { code: 34, ar: "34. برج بوعريريج", fr: "34. Bordj Bou Arréridj", en: "34. Bordj Bou Arreridj" },
  { code: 35, ar: "35. بومرداس", fr: "35. Boumerdès", en: "35. Boumerdes" },
  { code: 36, ar: "36. الطارف", fr: "36. El Tarf", en: "36. El Tarf" },
  { code: 37, ar: "37. تندوف", fr: "37. Tindouf", en: "37. Tindouf" },
  { code: 38, ar: "38. تيسمسيلت", fr: "38. Tissemsilt", en: "38. Tissemsilt" },
  { code: 39, ar: "39. الوادي", fr: "39. El Oued", en: "39. El Oued" },
  { code: 40, ar: "40. خنشلة", fr: "40. Khenchela", en: "40. Khenchela" },
  { code: 41, ar: "41. سوق أهراس", fr: "41. Souk Ahras", en: "41. Souk Ahras" },
  { code: 42, ar: "42. تيبازة", fr: "42. Tipaza", en: "42. Tipaza" },
  { code: 43, ar: "43. ميلة", fr: "43. Mila", en: "43. Mila" },
  { code: 44, ar: "44. عين الدفلى", fr: "44. Aïn Defla", en: "44. Ain Defla" },
  { code: 45, ar: "45. النعامة", fr: "45. Naâma", en: "45. Naama" },
  { code: 46, ar: "46. عين تموشنت", fr: "46. Aïn Témouchent", en: "46. Ain Temouchent" },
  { code: 47, ar: "47. غرداية", fr: "47. Ghardaïa", en: "47. Ghardaia" },
  { code: 48, ar: "48. غليزان", fr: "48. Relizane", en: "48. Relizane" },
  { code: 49, ar: "49. تيميمون", fr: "49. Timimoun", en: "49. Timimoun" },
  { code: 50, ar: "50. برج باجي مختار", fr: "50. Bordj Badji Mokhtar", en: "50. Bordj Badji Mokhtar" },
  { code: 51, ar: "51. أولاد جلال", fr: "51. Ouled Djellal", en: "51. Ouled Djellal" },
  { code: 52, ar: "52. بني عباس", fr: "52. Béni Abbès", en: "52. Beni Abbas" },
  { code: 53, ar: "53. إن صالح", fr: "53. In Salah", en: "53. In Salah" },
  { code: 54, ar: "54. إن قزام", fr: "54. In Guezzam", en: "54. In Guezzam" },
  { code: 55, ar: "55. تقرت", fr: "55. Touggourt", en: "55. Touggourt" },
  { code: 56, ar: "56. جانت", fr: "56. Djanet", en: "56. Djanet" },
  { code: 57, ar: "57. المغير", fr: "57. El M'Ghaier", en: "57. El M'Ghaier" },
  { code: 58, ar: "58. المنيعة", fr: "58. El Meniaa", en: "58. El Meniaa" }
];

const appTranslations = {
  ar: {
    sidebarTitle: "نظام إدارة البيانات",
    addBtn: "➕ إضافة شخص جديد",
    searchPlaceholder: "🔍 بحث بالاسم، اللقب، أو الهاتف...",
    allCategories: "جميع الفئات",
    catClient: "زبون",
    catSupplier: "مورد",
    catEmployee: "موظف",
    catAluminium: "ألمنيوم",
    catElectricity: "كهرباء",
    catBuildingMat: "مواد بناء",
    catPlumbing: "ترصيص صحي",
    allWilayas: "جميع الولايات",
    thName: "الاسم",
    thLastName: "اللقب",
    thPhone: "رقم الهاتف",
    thAddress: "العنوان",
    thCategory: "الفئة",
    thWilaya: "الولاية",
    thActions: "الإجراءات",
    editBtn: "✏️ تعديل",
    deleteBtn: "🗑️ حذف",
    modalTitleAdd: "إضافة شخص جديد",
    modalTitleEdit: "تعديل البيانات",
    lblFirstName: "الاسم:",
    lblLastName: "اللقب:",
    lblPhone: "رقم الهاتف:",
    lblAddress: "العنوان:",
    lblCategory: "الفئة / التخصص:",
    lblWilaya: "الولاية:",
    optWilayaSelect: "اختر الولاية...",
    btnSave: "حفظ البيانات",
    noData: "لا توجد بيانات مسجلة"
  },
  fr: {
    sidebarTitle: "Système de Gestion",
    addBtn: "➕ Ajouter une personne",
    searchPlaceholder: "🔍 Rechercher par nom, prénom, tél...",
    allCategories: "Toutes les catégories",
    catClient: "Client",
    catSupplier: "Fournisseur",
    catEmployee: "Employé",
    catAluminium: "Aluminium",
    catElectricity: "Électricité",
    catBuildingMat: "Matériaux de construction",
    catPlumbing: "Plomberie sanitaire",
    allWilayas: "Toutes les wilayas",
    thName: "Prénom",
    thLastName: "Nom",
    thPhone: "Téléphone",
    thAddress: "Adresse",
    thCategory: "Catégorie",
    thWilaya: "Wilaya",
    thActions: "Actions",
    editBtn: "✏️ Modifier",
    deleteBtn: "🗑️ Supprimer",
    modalTitleAdd: "Ajouter une nouvelle personne",
    modalTitleEdit: "Modifier les informations",
    lblFirstName: "Prénom:",
    lblLastName: "Nom:",
    lblPhone: "Téléphone:",
    lblAddress: "Adresse:",
    lblCategory: "Catégorie / Spécialité:",
    lblWilaya: "Wilaya:",
    optWilayaSelect: "Choisir la wilaya...",
    btnSave: "Enregistrer",
    noData: "Aucune donnée enregistrée"
  },
  en: {
    sidebarTitle: "Data Management",
    addBtn: "➕ Add New Person",
    searchPlaceholder: "🔍 Search by name, last name, phone...",
    allCategories: "All Categories",
    catClient: "Client",
    catSupplier: "Supplier",
    catEmployee: "Employee",
    catAluminium: "Aluminum",
    catElectricity: "Electricity",
    catBuildingMat: "Building Materials",
    catPlumbing: "Plumbing",
    allWilayas: "All Wilayas",
    thName: "First Name",
    thLastName: "Last Name",
    thPhone: "Phone",
    thAddress: "Address",
    thCategory: "Category",
    thWilaya: "Wilaya",
    thActions: "Actions",
    editBtn: "✏️ Edit",
    deleteBtn: "🗑️ Delete",
    modalTitleAdd: "Add New Person",
    modalTitleEdit: "Edit Person Details",
    lblFirstName: "First Name:",
    lblLastName: "Last Name:",
    lblPhone: "Phone:",
    lblAddress: "Address:",
    lblCategory: "Category / Specialty:",
    lblWilaya: "Wilaya:",
    optWilayaSelect: "Select Wilaya...",
    btnSave: "Save Details",
    noData: "No data available"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  populateWilayas();
  listenToCloudData(); // تفعيل الاستماع الفوري لقاعدة البيانات السحابية
});

// 3. الاستماع للتحديثات الفورية من Firebase (تظهر فوراً في كل الأجهزة)
function listenToCloudData() {
  peopleCollection.orderBy("createdAt", "desc").onSnapshot((snapshot) => {
    peopleData = snapshot.docs.map(doc => ({
      docId: doc.id,
      ...doc.data()
    }));
    filterData();
  }, (error) => {
    console.error("خطأ في جلب البيانات السحابية:", error);
  });
}

function populateWilayas() {
  const filterWilaya = document.getElementById('filterWilaya');
  const modalWilaya = document.getElementById('wilaya');

  if (!filterWilaya || !modalWilaya) return;

  filterWilaya.innerHTML = `<option value="">${appTranslations[currentLang].allWilayas}</option>`;
  modalWilaya.innerHTML = `<option value="">${appTranslations[currentLang].optWilayaSelect}</option>`;

  wilayasData.forEach(w => {
    const text = w[currentLang] || w.ar;

    const opt1 = document.createElement('option');
    opt1.value = w.code;
    opt1.innerText = text;
    filterWilaya.appendChild(opt1);

    const opt2 = document.createElement('option');
    opt2.value = w.code;
    opt2.innerText = text;
    modalWilaya.appendChild(opt2);
  });
}

function getTranslatedCategory(catVal) {
  const t = appTranslations[currentLang];
  if (catVal === 'ألمنيوم' || catVal === 'Aluminium') return t.catAluminium;
  if (catVal === 'كهرباء' || catVal === 'Électricité') return t.catElectricity;
  if (catVal === 'مواد بناء' || catVal === 'Matériaux de construction') return t.catBuildingMat;
  if (catVal === 'ترصيص صحي' || catVal === 'Plomberie sanitaire') return t.catPlumbing;
  return catVal;
}

function renderTable(data) {
  const tbody = document.getElementById('personTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  const t = appTranslations[currentLang];

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#888;">${t.noData}</td></tr>`;
    return;
  }

  data.forEach((person) => {
    const wObj = wilayasData.find(w => w.code == person.wilaya || w.ar === person.wilaya);
    const wilayaText = wObj ? wObj[currentLang] : person.wilaya;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${person.firstName}</td>
      <td>${person.lastName}</td>
      <td>${person.phone}</td>
      <td>${person.address || '-'}</td>
      <td><b style="color: #f25e08;">${getTranslatedCategory(person.category)}</b></td>
      <td>${wilayaText || '-'}</td>
      <td>
        <button class="btn-edit" onclick="editPerson('${person.docId}')">${t.editBtn}</button>
        <button class="btn-delete" onclick="deletePerson('${person.docId}')">${t.deleteBtn}</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function changeLanguage(lang) {
  currentLang = lang;
  const appBody = document.getElementById('appBody');
  if (appBody) appBody.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  const t = appTranslations[lang];

  if (document.getElementById('sidebarTitle')) document.getElementById('sidebarTitle').innerText = t.sidebarTitle;
  if (document.getElementById('btnAddPerson')) document.getElementById('btnAddPerson').innerText = t.addBtn;
  if (document.getElementById('searchInput')) document.getElementById('searchInput').placeholder = t.searchPlaceholder;

  const catFilter = document.getElementById('filterCategory');
  if (catFilter && catFilter.options.length >= 5) {
    catFilter.options[0].text = t.allCategories;
    catFilter.options[1].text = t.catAluminium;
    catFilter.options[2].text = t.catElectricity;
    catFilter.options[3].text = t.catBuildingMat;
    catFilter.options[4].text = t.catPlumbing;
  }

  if (document.getElementById('thFirstName')) document.getElementById('thFirstName').innerText = t.thName;
  if (document.getElementById('thLastName')) document.getElementById('thLastName').innerText = t.thLastName;
  if (document.getElementById('thPhone')) document.getElementById('thPhone').innerText = t.thPhone;
  if (document.getElementById('thAddress')) document.getElementById('thAddress').innerText = t.thAddress;
  if (document.getElementById('thCategory')) document.getElementById('thCategory').innerText = t.thCategory;
  if (document.getElementById('thWilaya')) document.getElementById('thWilaya').innerText = t.thWilaya;
  if (document.getElementById('thActions')) document.getElementById('thActions').innerText = t.thActions;

  if (document.getElementById('lblFirstName')) document.getElementById('lblFirstName').innerText = t.lblFirstName;
  if (document.getElementById('lblLastName')) document.getElementById('lblLastName').innerText = t.lblLastName;
  if (document.getElementById('lblPhone')) document.getElementById('lblPhone').innerText = t.lblPhone;
  if (document.getElementById('lblAddress')) document.getElementById('lblAddress').innerText = t.lblAddress;
  if (document.getElementById('lblCategory')) document.getElementById('lblCategory').innerText = t.lblCategory;
  if (document.getElementById('lblWilaya')) document.getElementById('lblWilaya').innerText = t.lblWilaya;
  if (document.getElementById('btnSavePerson')) document.getElementById('btnSavePerson').innerText = t.btnSave;

  populateWilayas();
  filterData();
}

function openModal(isEdit = false) {
  document.getElementById('personModal').style.display = 'flex';
  const t = appTranslations[currentLang];
  if (!isEdit) {
    document.getElementById('personForm').reset();
    document.getElementById('personId').value = '';
    document.getElementById('modalTitle').innerText = t.modalTitleAdd;
  }
}

function closeModal() {
  document.getElementById('personModal').style.display = 'none';
}

// 4. حفظ وتحديث البيانات في السحاب (Cloud Firestore)
async function savePerson(e) {
  e.preventDefault();
  const docId = document.getElementById('personId').value;
  const person = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    category: document.getElementById('category').value,
    wilaya: document.getElementById('wilaya').value,
  };

  try {
    if (docId === '') {
      person.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      await peopleCollection.add(person);
    } else {
      await peopleCollection.doc(docId).update(person);
    }
    closeModal();
  } catch (error) {
    alert("حدث خطأ أثناء الحفظ السحابي: " + error.message);
  }
}

function editPerson(docId) {
  const person = peopleData.find(p => p.docId === docId);
  if (!person) return;
  const t = appTranslations[currentLang];
  document.getElementById('personId').value = docId;
  document.getElementById('firstName').value = person.firstName;
  document.getElementById('lastName').value = person.lastName;
  document.getElementById('phone').value = person.phone;
  document.getElementById('address').value = person.address || '';
  document.getElementById('category').value = person.category;
  document.getElementById('wilaya').value = person.wilaya;

  document.getElementById('modalTitle').innerText = t.modalTitleEdit;
  openModal(true);
}

// 5. حذف الشخص من السحاب
async function deletePerson(docId) {
  if (confirm(currentLang === 'ar' ? 'هل أنت متأكد من الحذف نهائياً من جميع الأجهزة؟' : 'Voulez-vous vraiment supprimer ?')) {
    try {
      await peopleCollection.doc(docId).delete();
    } catch (error) {
      alert("خطأ أثناء الحذف: " + error.message);
    }
  }
}

function filterData() {
  const searchVal = document.getElementById('searchInput').value.toLowerCase();
  const catVal = document.getElementById('filterCategory').value;
  const wilayaVal = document.getElementById('filterWilaya').value;

  const filtered = peopleData.filter(person => {
    const matchesSearch = (person.firstName || '').toLowerCase().includes(searchVal) ||
                          (person.lastName || '').toLowerCase().includes(searchVal) ||
                          (person.phone || '').includes(searchVal);

    let matchesCat = true;
    if (catVal !== '') {
      matchesCat = (person.category === catVal) ||
                   (catVal === 'زبون' && (person.category === 'زبون' || person.category === 'Client')) ||
                   (catVal === 'مورد' && (person.category === 'مورد' || person.category === 'Fournisseur')) ||
                   (catVal === 'موظف' && (person.category === 'موظف' || person.category === 'Employé'));
    }

    let matchesWilaya = true;
    if (wilayaVal !== '') {
      matchesWilaya = (person.wilaya == wilayaVal);
    }

    return matchesSearch && matchesCat && matchesWilaya;
  });

  renderTable(filtered);
}