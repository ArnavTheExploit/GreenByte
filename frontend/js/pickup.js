// Handle Pickup Request Form Submission
const pickupForm = document.getElementById('pickupForm');

if (pickupForm) {
    pickupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = pickupForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Submitting...';
        submitBtn.disabled = true;

        // Capture form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            deviceType: document.getElementById('deviceType').value,
            quantity: document.getElementById('quantity').value,
            address: document.getElementById('address').value,
        };

        try {
            const response = await fetch('https://greenbyte.onrender.com/api/pickup/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                alert('Pickup request submitted successfully! We will contact you soon.');
                pickupForm.reset();
                window.location.href = 'index.html';
            } else {
                alert(data.message || 'Failed to submit request. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please check your internet connection or try again later.');
        } finally {
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}
