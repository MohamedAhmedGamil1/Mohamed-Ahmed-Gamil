document.addEventListener("DOMContentLoaded", function () {

    // =========================================================================
    // ======================= START: NEW LOCALIZATION CODE ====================
    // =========================================================================

    const langSwitcher = document.getElementById('lang-switcher');
    let currentLang = localStorage.getItem('lang') || 'en'; // Get saved language or default to 'en'

    // 1. All translations are stored here
    const translations = {
        // Page Title
        'page_title': { en: 'Mohamed Ahmed Gamil | محمد أحمد جميل', ar: 'محمد أحمد جميل | Mohamed Ahmed Gamil' },
        'description': { en: 'Mohamed Ahmed Gamil is a Web & System Analyst specializing in system analysis and web development. He helps companies and individuals gather requirements, design databases, and build high-quality websites and web applications.', ar: 'Mohamed Ahmed Gamil | محمد أحمد جميل، محلل نظم ومطور ويب متخصص. يساعد الشركات والأفراد في جمع المتطلبات، تصميم قواعد البيانات، وبناء مواقع وتطبيقات ويب عالية الجودة.' },
        // Language Switcher Button Text
        'lang_switcher_text': { en: 'عربي', ar: 'EN' },
        // Logo Text
        'logo_text': { en: '</> Mohamed Elawa', ar: ' </> محمد  علاوة' },
        // Navbar Links
        'nav_home': { en: 'Home', ar: 'الرئيسية' },
        'nav_about': { en: 'About', ar: 'عني' },
        'nav_projects': { en: 'Projects', ar: 'المشاريع' },
        'nav_skills': { en: 'Skills', ar: 'المهارات' },
        'nav_certs': { en: 'Certifications', ar: 'الشهادات' },
        'nav_contact': { en: 'Contact', ar: 'تواصل' },
        // Home Section
        'home_name': { en: 'Mohamed Ahmed Gamil', ar: 'محمد أحمد جميل' },
        'home_bio': {
            en: `I am Mohamed Ahmed Gamil, a Web Developer & System Analyst based in Giza, Egypt.<br>I specialize in creating modern and user-friendly web applications, analyzing systems, and aligning business needs with the right technology.<br>With a passion for continuous learning, I tackle challenges with confidence and a positive mindset.<br>My ambition is to grow as a professional developer and analyst, to become a skilled Software Engineer, and to deliver impactful digital solutions that truly make a difference.`,
            ar: `أنا محمد أحمد جميل، مطور ويب ومحلل نظم من الجيزة، مصر.<br>أنا متخصص في إنشاء تطبيقات ويب حديثة وسهلة الاستخدام، وتحليل الأنظمة، ومواءمة احتياجات الأعمال مع التكنولوجيا المناسبة.<br>بشغف للتعلم المستمر، أتعامل مع التحديات بثقة وعقلية إيجابية.<br>طموحي هو النمو كمطور ومحلل محترف، لأصبح مهندس برمجيات ماهر، وتقديم حلول رقمية مؤثرة تحدث فرقاً حقيقياً.`
        },
        'view_projects': { en: 'View Projects', ar: 'تصفح المشاريع' },
        'contact_me': { en: 'Contact Me', ar: 'تواصل معي' },
        // Typing animation for home title
        'typing_text_1': { en: 'Web Developer', ar: 'مطور ويب' },
        'typing_text_2': { en: 'System Analyst', ar: 'محلل نظم' },
        'typing_text_3': { en: 'Software Engineer', ar: 'مهندس برمجيات' },
        'typing_text_4': { en: 'Problem Solver', ar: 'حلّال مشاكل' },
        // Section Headings
        'about_heading': { en: '// About_', ar: '// عني_' },
        'skills_heading': { en: '// Skills_', ar: '// المهارات_' },
        'projects_heading': { en: '// Projects_', ar: '// المشاريع_' },
        'certs_heading': { en: '// Certificates & Courses_', ar: '// الشهادات والدورات_' },
        'contact_heading': { en: '// Contact_', ar: '// تواصل_' },
        // About Section
        'about_intro_title': { en: 'Web Developer & System Analyst', ar: 'مطور ويب ومحلل نظم' },
        'about_intro_text': {
            en: `I'm a dedicated Web & System Analyst who combines business analysis with web development skills. My journey began with learning HTML, CSS, and Python, which gave me a strong foundation in website structure and development. My current focus is on analyzing client requirements, designing databases, and building effective web solutions. My goal is to provide precise analytical consultations that help create high-quality web systems tailored to business needs.`,
            ar: `أنا محلل نظم ومطور ويب متخصص، أجمع بين مهارات تحليل الأعمال وتطوير الويب. بدأت رحلتي بتعلم HTML وCSS وPython، مما منحني أساسًا قويًا في بناء وتطوير المواقع. تركيزي الحالي ينصب على تحليل متطلبات العملاء، وتصميم قواعد البيانات، وبناء حلول ويب فعالة. هدفي هو تقديم استشارات تحليلية دقيقة تساعد في إنشاء أنظمة ويب عالية الجودة تلبي احتياجات الأعمال.`
        },
        'about_web_dev': { en: 'Web Developer (Frontend & basic Backend)', ar: 'مطور ويب (واجهة أمامية وواجهة خلفية أساسية)' },
        'about_sys_analyst': { en: 'System Analyst (requirements gathering, system flows, UI/UX improvements)', ar: 'محلل نظم (جمع المتطلبات، تدفقات النظام، تحسينات واجهة وتجربة المستخدم)' },
        'about_former_mobile': { en: 'Former Mobile App Developer (Flutter & MIT App Inventor)', ar: 'مطور تطبيقات جوال سابق (Flutter & MIT App Inventor)' },
        'about_focus': { en: 'Focused on problem solving, databases, and building efficient systems', ar: 'أركز على حل المشكلات وقواعد البيانات وبناء أنظمة فعالة' },
        'about_learner': { en: 'Lifelong learner, always improving my technical and analytical skills', ar: 'متعلم دائم، أسعى دائماً لتحسين مهاراتي التقنية والتحليلية' },
        // Skills Section
        'skills_tech': { en: 'Technical Skills', ar: 'المهارات التقنية' },
        'skills_soft': { en: 'Soft Skills', ar: 'المهارات الشخصية' },
        'skills_lang': { en: 'Languages', ar: 'اللغات' },
        'soft_skill1': { en: 'Problem Solving', ar: 'حل المشكلات' },
        'soft_skill2': { en: 'Creativity', ar: 'الإبداع' },
        'soft_skill3': { en: 'Time Management', ar: 'إدارة الوقت' },
        'soft_skill4': { en: 'Adaptability', ar: 'القدرة على التكيف' },
        'soft_skill5': { en: 'Team Collaboration', ar: 'العمل الجماعي' },
        'soft_skill6': { en: 'Continuous Learning', ar: 'التعلم المستمر' },
        'soft_skill7': { en: 'Attention to Detail', ar: 'الاهتمام بالتفاصيل' },
        'soft_skill8': { en: 'Effective Communication', ar: 'التواصل الفعال' },
        'soft_skill9': { en: 'Critical Thinking', ar: 'التفكير النقدي' },
        'soft_skill10': { en: 'Communication Skills', ar: 'مهارات التواصل' },
        'lang_arabic': { en: 'Arabic', ar: 'العربية اللغة' },
        'lang_english': { en: 'English', ar: 'الإنجليزية' },
        // Language Switcher Options
        'lang_ar': { en: 'Arabic', ar: 'العربية' },
        'lang_en': { en: 'English', ar: 'الإنجليزية' },
        // Projects Section
        'proj_title1': { en: 'Real Estate App', ar: 'تطبيق العقارات' },
        'proj_desc1': { en: 'A Flutter application where users can take a photo of a real estate ad and upload it. The app sends the photo along with user information to a server for processing.', ar: 'تطبيق فلاتر يتيح للمستخدمين التقاط صورة لإعلان عقار ورفعها. يرسل التطبيق الصورة مع معلومات المستخدم إلى خادم للمعالجة.' },
        'proj_title2': { en: 'Real Estate Management Website', ar: 'موقع إدارة العقارات' },
        'proj_desc2': { en: 'A comprehensive website for real estate management, including pages for login, property display, and requests.', ar: 'موقع شامل لإدارة العقارات، يشمل صفحات لتسجيل الدخول، وعرض العقارات، وإدارة الطلبات.' },
        'proj_title3': { en: 'Simple Calculator App', ar: 'تطبيق حاسبة بسيط' },
        'proj_desc3': { en: 'A simple calculator app built with MIT App Inventor.', ar: 'تطبيق حاسبة بسيط تم بناؤه باستخدام MIT App Inventor.' },
        'proj_title4': { en: 'Notes App', ar: 'تطبيق ملاحظات' },
        'proj_desc4': { en: 'A note-taking application developed as part of the Digital Egypt Cubs program.', ar: 'تطبيق لتدوين الملاحظات تم تطويره ضمن برنامج أشبال مصر الرقمية.' },
        'proj_title5': { en: 'Save the Fish Game', ar: 'لعبة أنقذ السمكة' },
        'proj_desc5': { en: 'An educational game designed to be fun and engaging.', ar: 'لعبة تعليمية مصممة لتكون ممتعة وجذابة.' },
        'proj_title6': { en: 'Tom and Jerry Game', ar: 'لعبة توم وجيري' },
        'proj_desc6': { en: 'A fun game based on the famous cartoon characters.', ar: 'لعبة مسلية مبنية على شخصيات الرسوم المتحركة الشهيرة.' },
        'proj_title7': { en: 'Egypt Tour Guide App', ar: 'تطبيق دليل سياحي لمصر' },
        'proj_desc7': { en: 'An app that showcases famous historical and tourist places in Egypt.', ar: 'تطبيق يعرض الأماكن التاريخية والسياحية الشهيرة في مصر.' },
        'proj_title8': { en: 'Web Projects', ar: 'مشاريع ويب' },
        'proj_desc8': { en: 'A collection of basic websites and system tools developed using HTML, CSS, JavaScript, and Python.', ar: 'مجموعة من المواقع الأساسية وأدوات النظام التي تم تطويرها باستخدام HTML, CSS, JavaScript, و Python.' },
        // Certificates & Courses Section
        'cert1_title': { en: 'CS50’s Scratch – Harvard University', ar: 'CS50’s Scratch – جامعة هارفارد' },
        'cert1_desc': { en: 'Certificate for completing the CS50’s Scratch course, focusing on introductory programming concepts.', ar: 'شهادة إتمام دورة CS50’s Scratch، التي تركز على مفاهيم البرمجة التمهيدية.' },
        'cert2_title': { en: 'ICDL Certificate – Edraak Platform', ar: 'شهادة ICDL – منصة إدراك' },
        'cert2_desc': { en: 'International Computer Driving License certification from Edraak Platform.', ar: 'شهادة الرخصة الدولية لقيادة الحاسوب من منصة إدراك.' },
        'cert3_title': { en: 'Internet Heroes Program – Google', ar: 'برنامج أبطال الإنترنت – جوجل' },
        'cert3_desc': { en: 'Certificate for completing Google’s Internet Heroes Program.', ar: 'شهادة إتمام برنامج أبطال الإنترنت من جوجل.' },
        'cert4_title': { en: 'Digital Egypt Cubs', ar: 'برنامج أشبال مصر الرقمية' },
        'cert4_desc': { en: 'Certificate for completing bootcamps and real projects, including a team leader role and winning "Best Business Project."', ar: 'شهادة إتمام معسكرات تدريبية ومشاريع حقيقية، بما في ذلك دور القائد للفريق والفوز بجائزة "أفضل مشروع تجاري."' },
        'cert5_title': { en: 'Digital Egypt Buds – Game Development', ar: 'برنامج براعم مصر الرقمية – تطوير الألعاب' },
        'cert5_desc': { en: 'Certificate for completing the game development program.', ar: 'شهادة إتمام برنامج تطوير الألعاب.' },
        // Contact & Socials Section
        'contact_email': { en: 'Email', ar: 'البريد الإلكتروني' },
        'contact_linkedin': { en: 'LinkedIn', ar: 'لينكد إن' },
        'contact_github': { en: 'GitHub', ar: 'جيت هاب' },
        'contact_website': { en: 'Website', ar: 'الموقع' },
        'contact_instagram': { en: 'Instagram', ar: 'إنستغرام' },
        'contact_tiktok': { en: 'TikTok', ar: 'تيك توك' },
        'contact_youtube': { en: 'YouTube', ar: 'يوتيوب' },
        'contact_facebook': { en: 'Facebook', ar: 'فيسبوك' },
        'contact_linktree': { en: 'Linktree', ar: 'لينك تري' },
        // Footer
        'footer_text': { en: '© 2025 MohamedAhmedGamil. All rights reserved.', ar: '© ٢٠٢٥ محمد أحمد جميل. جميع الحقوق محفوظة.' },
    };

    // 2. The function to switch the language
    const switchLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang); // Save preference
        document.documentElement.lang = lang;
        document.body.classList.toggle('rtl', lang === 'ar');

        // Translate all elements with a data-key
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[key] && translations[key][lang]) {
                if (element.classList.contains('section-heading')) {
                    element.dataset.text = translations[key][lang]; // Update data-text for animation
                } else {
                    // This handles elements that have a direct data-key and text content
                    element.textContent = translations[key][lang];
                }
            }
        });

        // --- UPDATE ANIMATIONS AND SPECIAL ELEMENTS ---

        // Update the home page typing animation words
        homeWords = [
            translations.typing_text_1[lang],
            translations.typing_text_2[lang],
            translations.typing_text_3[lang],
            translations.typing_text_4[lang]
        ];
        // Reset typing animation to show new words immediately
        homeWordIndex = 0;
        homeCharIndex = 0;
        homeIsDeleting = false;
        typingText.textContent = ''; // Clear current text
    };

    // 3. Event listener for the language switcher button
    langSwitcher.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        switchLanguage(newLang);
    });

    // =========================================================================
    // ======================== END: NEW LOCALIZATION CODE =====================
    // =========================================================================

    // --- ORIGINAL SCRIPT.JS CODE (WITH MODIFICATIONS FOR LOCALIZATION) ---

    // Mobile menu toggle
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 100);
        // Close mobile menu on scroll
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (document.querySelector(`header nav a[href*=${entry.target.id}]`)) {
                        document.querySelector(`header nav a[href*=${entry.target.id}]`).classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-40% 0px -60% 0px' });
    sections.forEach(sec => navObserver.observe(sec));

    // Typing animation for Home section title
    const typingText = document.querySelector(".home-title .typing-text");
    const homeCursor = document.querySelector(".home-title .cursor");
    let homeWords = []; // This will be populated by the switchLanguage function
    let homeWordIndex = 0, homeCharIndex = 0, homeIsDeleting = false;

    function typeHomeTitle() {
        homeCursor.classList.add('typing');
        const currentWord = homeWords[homeWordIndex];
        // Add a check in case currentWord is not ready yet on first load
        if (!currentWord) {
            setTimeout(typeHomeTitle, 100);
            return;
        }
        const typeSpeed = homeIsDeleting ? 80 : 120;
        if (homeIsDeleting) {
            typingText.textContent = currentWord.substring(0, homeCharIndex - 1);
            homeCharIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, homeCharIndex + 1);
            homeCharIndex++;
        }
        if (!homeIsDeleting && homeCharIndex === currentWord.length) {
            setTimeout(() => {
                homeIsDeleting = true;
                homeCursor.classList.remove('typing');
            }, 2000);
        } else if (homeIsDeleting && homeCharIndex === 0) {
            homeIsDeleting = false;
            homeWordIndex = (homeWordIndex + 1) % homeWords.length;
        }
        setTimeout(typeHomeTitle, typeSpeed);
    }

    // Repeating typing animation for Section Headings
    const headingIntervals = new Map();

    function typeSectionHeading(element) {
        const text = element.dataset.text;
        element.innerHTML = ''; // Clear content
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);
    }

    const headingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const headingElement = entry.target;
            if (entry.isIntersecting) {
                if (!headingIntervals.has(headingElement)) {
                    typeSectionHeading(headingElement); // Initial typing
                    const intervalId = setInterval(() => typeSectionHeading(headingElement), 5000); // Repeat every 5 seconds
                    headingIntervals.set(headingElement, intervalId);
                }
            } else {
                if (headingIntervals.has(headingElement)) {
                    clearInterval(headingIntervals.get(headingElement));
                    headingIntervals.delete(headingElement);
                    headingElement.textContent = ''; // Clear text when out of view
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section-heading').forEach(heading => headingObserver.observe(heading));

    // Page Transition Animation
    const transitionOverlay = document.getElementById('transition-overlay');
    const pageNavLinks = document.querySelectorAll('.nav-link');

    pageNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);

                transitionOverlay.classList.add('show');
                transitionOverlay.classList.remove('hide');

                // Close mobile nav if open
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');

                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'auto' // Use auto for instant jump after animation
                    });
                    transitionOverlay.classList.add('hide');
                }, 500); // Duration for panels to cover screen

                setTimeout(() => {
                    transitionOverlay.classList.remove('show');
                }, 1000); // Total duration before overlay is reset
            }
        });
    });

    // --- INITIALIZE LANGUAGE ON PAGE LOAD ---
    switchLanguage(currentLang);
    if (typingText) typeHomeTitle(); // Start the typing animation now
});