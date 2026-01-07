// Admin Dashboard Logic

// Base URL configuration for easier updates
const API_BASE_URL = "https://greenbyte.onrender.com/api/pickup";


// Fetch all pickup requests on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchRequests();
});

async function fetchRequests() {
    const tableBody = document.getElementById('requestsTableBody');
    tableBody.innerHTML = '<tr><td colspan="7" style="text-align: center;">Loading requests...</td></tr>';

    try {
        const response = await fetch(`${API_BASE_URL}/all`);
        const result = await response.json();

        if (result.success) {
            displayRequests(result.data);
        } else {
            tableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: red;">Error: ${result.message}</td></tr>`;
        }
    } catch (error) {
        console.error('Error fetching requests:', error);
        tableBody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: red;">Failed to load data. Ensure backend is running.</td></tr>';
    }
}

function displayRequests(requests) {
    const tableBody = document.getElementById('requestsTableBody');

    if (requests.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="7" style="text-align: center;">No pickup requests found.</td></tr>';
        return;
    }

    tableBody.innerHTML = requests.map(request => `
    <tr>
      <td>${new Date(request.createdAt).toLocaleDateString()}</td>
      <td>
        <strong>${request.name}</strong><br>
        <small>${request.email}<br>${request.phone}</small>
      </td>
      <td>${request.deviceType}</td>
      <td>${request.quantity}</td>
      <td>${request.address}</td>
      <td>
        <span class="status-badge status-${request.status.toLowerCase()}">${request.status}</span>
      </td>
      <td>
        ${request.status === 'pending' ?
            `<button class="btn btn-sm" onclick="markAsCollected('${request._id}')">Mark Collected</button>` :
            `<button class="btn btn-sm" disabled style="opacity: 0.6; cursor: not-allowed;">${request.status}</button>`
        }
      </td>
    </tr>
  `).join('');
}

async function markAsCollected(id) {
    if (!confirm('Are you sure you want to mark this request as collected?')) return;

    try {
        const response = await fetch(`${API_BASE_URL}/status/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'completed' }),
        });

        const result = await response.json();

        if (result.success) {
            alert('Status updated successfully!');
            fetchRequests(); // Refresh the table
        } else {
            alert(result.message || 'Failed to update status.');
        }
    } catch (error) {
        console.error('Error updating status:', error);
        alert('An error occurred. Please try again.');
    }
}
