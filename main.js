// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Countdown timer
        function updateCountdown() {
            const now = new Date().getTime();
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0);
            
            const distance = tomorrow - now;
            
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('countdown').innerHTML = 
                String(hours).padStart(2, '0') + ':' + 
                String(minutes).padStart(2, '0') + ':' + 
                String(seconds).padStart(2, '0');
        }

        // Update countdown every second
        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('bg-opacity-95');
            } else {
                header.classList.remove('bg-opacity-95');
            }
        });

        // Button click handlers
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                if (this.textContent.includes('Inscrever-se') || this.textContent.includes('Começar') || this.textContent.includes('Garantir')) {
                    alert('🎉 Redirecionando para a página de checkout...\n\nEm um site real, isso levaria você para o sistema de pagamento.');
                } else if (this.textContent.includes('Demonstração')) {
                    alert('📹 Abrindo vídeo demonstrativo...\n\nEm um site real, isso abriria um modal com o vídeo do curso.');
                } else if (this.textContent.includes('História')) {
                    alert('📖 Redirecionando para nossa página "Sobre"...\n\nEm um site real, isso levaria você para mais detalhes sobre a empresa.');
                }
            });
        });