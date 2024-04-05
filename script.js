document.getElementById('calculate').addEventListener('click', function() {
    const birthdate = document.getElementById('birthdate').value;
    const result = document.getElementById('result');

    if (birthdate) {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        result.textContent = `You are ${age} years old.`;

        // GSAP Animation
        gsap.to(result, {duration: 1, opacity: 0, y: -20, ease: "bounce", onComplete: function() {
            gsap.to(result, {duration: 1, opacity: 1, y: 0});
        }});
    } else {
        result.textContent = 'Please enter your birthdate.';
    }
});
