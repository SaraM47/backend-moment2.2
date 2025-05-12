// Get reference to the table body where all work experience rows will be rendered
const tableBody = document.querySelector<HTMLTableSectionElement>('#work-table-body');

// Use Vite environment variable for API URL
const API_URL = import.meta.env.VITE_API_URL;

/*
  Fetch and display all work experience entries from the API     
  Make GET request to API
*/
async function loadWorkExperience() {
  tableBody!.innerHTML = '<tr><td colspan="7">Hämtar in data...</td></tr>';

  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    if (data.length === 0) {
      tableBody!.innerHTML = '<tr><td colspan="7">Inga arbetserfarenheter hittades.</td></tr>';
      return;
    }

    tableBody!.innerHTML = '';

    data.forEach((item: any) => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${item.companyname}</td>
        <td>${item.jobtitle}</td>
        <td>${item.location}</td>
        <td>${item.startdate?.split('T')[0]}</td>
        <td>${item.enddate?.split('T')[0] || 'Pågående'}</td>
        <td>${item.description || ''}</td>
        <td><button data-id="${item.id}">Radera</button></td>
      `;

      tableBody!.appendChild(tr);
    });

    document.querySelectorAll('button[data-id]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = (btn as HTMLButtonElement).dataset.id;

        if (confirm('Vill du radera posten?')) {
          await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
          loadWorkExperience();
        }
      });
    });

  } catch (err) {
    console.error(err);
    tableBody!.innerHTML = '<tr><td colspan="7">Fel har uppstått vid hämtning av data.</td></tr>';
  }
}

loadWorkExperience();
