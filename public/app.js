let currentLang = 'ar';

// قائمة ولايات مبسطة وخالية من الأخطاء
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
  { code: 16, ar: "16. الجزائر", fr: "16. Alger", en: "16. Algiers" },
  { code: 30, ar: "30. ورقلة", fr: "30. Ouargla", en: "30. Ouargla" },
  { code: 36, ar: "36. الطارف", fr: "36. El Tarf", en: "36. El Tarf" },
  { code: 39, ar: "39. الوادي", fr: "39. El Oued", en: "39. El Oued" },
  { code: 57, ar: "57. المغير", fr: "57. El M'Ghaier", en: "57. El M'Ghaier" }
];

let peopleData = JSON.parse(localStorage.getItem('latrase_people')) || [
  { firstName: "Ali", lastName: "Ayachi Amor", phone: "0672045531", address: "RUE CHAHIDA HAMMI MESSAUDA", category: "زبون", wilaya: "39" },
  { firstName: "Hichm", lastName: "Ayachi Amor", phone: "0664634318", address: "RUE CHAHIDA HAMMI MESSAUDA", category: "زبون", wilaya: "39" },
  { firstName: "Tidjani", lastName: "Ayachi Amor", phone: "0671626750", address: "RUE CHAHIDA HAMMI MESSAUDA", category: "موظف", wilaya: "39" }
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
  renderTable(peopleData);
});

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
  if (catVal === 'زبون' || catVal === 'Client') return t.catClient;
  if (catVal === 'مورد' || catVal === 'Fournisseur') return t.catSupplier;
  if (catVal === 'موظف' || catVal === 'Employé') return t.catEmployee;
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

  data.forEach((person, index) => {
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
        <button class="btn-edit" onclick="editPerson(${index})">${t.editBtn}</button>
        <button class="btn-delete" onclick="deletePerson(${index})">${t.deleteBtn}</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function changeLanguage(lang) {
  currentLang = lang;
  
  const appBody = document.getElementById('appBody');
  if (appBody) {
    appBody.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  const t = appTranslations[lang];

  // 1. ترجمة عناصر القائمة والتحكم
  if (document.getElementById('sidebarTitle')) document.getElementById('sidebarTitle').innerText = t.sidebarTitle;
  if (document.getElementById('btnAddPerson')) document.getElementById('btnAddPerson').innerText = t.addBtn;
  if (document.getElementById('searchInput')) document.getElementById('searchInput').placeholder = t.searchPlaceholder;

  // 2. ترجمة خيارات قائمة التصفية حسب الفئة (Filter Category Options)
  const catFilter = document.getElementById('filterCategory');
  if (catFilter && catFilter.options.length >= 8) {
    catFilter.options[0].text = t.allCategories;
    catFilter.options[1].text = t.catClient;
    catFilter.options[2].text = t.catSupplier;
    catFilter.options[3].text = t.catEmployee;
    catFilter.options[4].text = t.catAluminium;
    catFilter.options[5].text = t.catElectricity;
    catFilter.options[6].text = t.catBuildingMat;
    catFilter.options[7].text = t.catPlumbing;
  }

  // 3. ترجمة رؤوس الجدول
  if (document.getElementById('thFirstName')) document.getElementById('thFirstName').innerText = t.thName;
  if (document.getElementById('thLastName')) document.getElementById('thLastName').innerText = t.thLastName;
  if (document.getElementById('thPhone')) document.getElementById('thPhone').innerText = t.thPhone;
  if (document.getElementById('thAddress')) document.getElementById('thAddress').innerText = t.thAddress;
  if (document.getElementById('thCategory')) document.getElementById('thCategory').innerText = t.thCategory;
  if (document.getElementById('thWilaya')) document.getElementById('thWilaya').innerText = t.thWilaya;
  if (document.getElementById('thActions')) document.getElementById('thActions').innerText = t.thActions;

  // 4. ترجمة النافذة المنبثقة Modal
  if (document.getElementById('lblFirstName')) document.getElementById('lblFirstName').innerText = t.lblFirstName;
  if (document.getElementById('lblLastName')) document.getElementById('lblLastName').innerText = t.lblLastName;
  if (document.getElementById('lblPhone')) document.getElementById('lblPhone').innerText = t.lblPhone;
  if (document.getElementById('lblAddress')) document.getElementById('lblAddress').innerText = t.lblAddress;
  if (document.getElementById('lblCategory')) document.getElementById('lblCategory').innerText = t.lblCategory;
  if (document.getElementById('lblWilaya')) document.getElementById('lblWilaya').innerText = t.lblWilaya;
  if (document.getElementById('btnSavePerson')) document.getElementById('btnSavePerson').innerText = t.btnSave;

  // إعادة تعبئة وتحديث القوائم والبيانات
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

function savePerson(e) {
  e.preventDefault();
  const id = document.getElementById('personId').value;
  const person = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    category: document.getElementById('category').value,
    wilaya: document.getElementById('wilaya').value,
  };

  if (id === '') {
    peopleData.push(person);
  } else {
    peopleData[id] = person;
  }

  localStorage.setItem('latrase_people', JSON.stringify(peopleData));
  closeModal();
  filterData();
}

function editPerson(index) {
  const person = peopleData[index];
  const t = appTranslations[currentLang];
  document.getElementById('personId').value = index;
  document.getElementById('firstName').value = person.firstName;
  document.getElementById('lastName').value = person.lastName;
  document.getElementById('phone').value = person.phone;
  document.getElementById('address').value = person.address;
  document.getElementById('category').value = person.category;
  document.getElementById('wilaya').value = person.wilaya;

  document.getElementById('modalTitle').innerText = t.modalTitleEdit;
  openModal(true);
}

function deletePerson(index) {
  if (confirm(currentLang === 'ar' ? 'هل أنت متأكد من الحذف؟' : 'Voulez-vous vraiment supprimer ?')) {
    peopleData.splice(index, 1);
    localStorage.setItem('latrase_people', JSON.stringify(peopleData));
    filterData();
  }
}

function filterData() {
  const searchVal = document.getElementById('searchInput').value.toLowerCase();
  const catVal = document.getElementById('filterCategory').value;
  const wilayaVal = document.getElementById('filterWilaya').value;

  const filtered = peopleData.filter(person => {
    const matchesSearch = person.firstName.toLowerCase().includes(searchVal) ||
                          person.lastName.toLowerCase().includes(searchVal) ||
                          person.phone.includes(searchVal);

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