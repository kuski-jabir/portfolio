
  const form = document.getElementById('myForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Change button text
    submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin ml-2"></i>';
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        formStatus.innerHTML = '✅ Message sent successfully!';
        formStatus.className = 'mt-4 text-center text-green-600 dark:text-green-400';
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      formStatus.innerHTML = '❌ Oops! There was a problem. Please try again.';
      formStatus.className = 'mt-4 text-center text-red-600 dark:text-red-400';
    } finally {
      submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane ml-2"></i>';
      submitBtn.disabled = false;
      
      // Hide status after 5 seconds
      setTimeout(() => {
        formStatus.innerHTML = '';
      }, 5000);
    }
  });
