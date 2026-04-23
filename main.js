// =============================================
//  DVD Lab — main.js (Multi-Page Architecture)
// =============================================

// --- DATA OBJECTS ---

const projects = [
    {
        id: 1,
        title: "Zoonotic Implications of Mycobacterium bovis in Human Intestinal Tuberculosis: Tissue Tropism and Treatment Outcome",
        category: "Zoonotic", status: "ongoing", trl: "TRL 3",
        funding: "ICMR", amount: "INR 4.2 Million", duration: "2024-2027",
        problem: "Lack of understanding of how M. bovis infects human intestinal tissue, leading to misdiagnosis.",
        gap: "Routine TB tests often fail to differentiate between human and zoonotic strains efficiently.",
        solution: "Tissue tropism study to identify specific molecular markers of M. bovis in human guts.",
        impact: "Faster, specialized treatment regimens and targeted public health interventions."
    },
    {
        id: 2,
        title: "Multi-Component Vaccine Development for the Management of Mastitis by Systemic Vaccinology Approach",
        category: "Vaccine", status: "ongoing", trl: "TRL 4",
        funding: "CST-UP", amount: "INR 1.0 Million", duration: "2025-2026",
        problem: "Bovine mastitis causes huge economic losses and relies heavily on antibiotics.",
        gap: "No broadly protective vaccine currently exists due to the diversity of pathogens involved.",
        solution: "A systemic vaccinology approach combining multiple antigens for comprehensive immunity.",
        impact: "Reduced antibiotic use in dairy, improved animal health, and increased milk yield."
    },
    {
        id: 3,
        title: "Zoonotic Diseases: Integrated Approaches to Diagnosis, Control, and Prevention",
        category: "Diagnostic", status: "ongoing", trl: "TRL 2",
        funding: "DHR", amount: "INR 7.4 Million", duration: "2025-2030",
        problem: "Emerging zoonotic threats spread rapidly before adequate diagnostics are deployed.",
        gap: "Siloed approaches between veterinary and human medicine delay rapid response.",
        solution: "Integrated OneHealth framework for simultaneous surveillance and diagnostic toolkit development.",
        impact: "Early warning systems and rapid containment of cross-species disease outbreaks."
    }
];

// Photos SWAPPED between Swarnima and Manjeet as requested
const scholars = [
    { name: "Mrs Swarnima Paliwal", degree: "M.Sc. Biotechnology", interest: "Cancer Biology", photo: "images/manjeet_kaur.jpg" },
    { name: "Ms Sakshi Singh", degree: "M.Sc. Applied Microbiology and Biotechnology", interest: "Cancer Biology", photo: "images/sakshi_singh.jpg" },
    { name: "Mrs Manjeet Kaur", degree: "M.Sc. Biotechnology", interest: "Environmental Toxicology", photo: "images/swarnima_paliwal.jpg", photoStyle: "object-position: center top;" },
    { name: "Ms. Shruti Khandelwal", degree: "M.Sc. Microbiology", interest: "Bioremediation of PAHs", photo: "images/shruti_khandelwal.jpg" },
    { name: "Mr. Ayush Kulshreshtha", degree: "M.Sc. Microbiology", interest: "Infectious Diseases", photo: "images/ayush_kulshreshtha.jpg" },
    { name: "Mr. Mridul Raghuvanshi", degree: "Junior Research Assistant", interest: "Biomedical Research", photo: "images/mridul_raghuvanshi.jpg" }
];

const alumni = [
    { name: "Mr. Devvrat Varshney", role: "Former Junior Research Assistant, CST-UP Project" },
    { name: "Ms. Swati Tripathi", role: "Former Junior Research Assistant, CST-UP Project" }
];

const careerSummary = [
    { period: "01/2023 - 09/2025", role: "Assistant Professor Research", inst: "GLA University, Mathura" },
    { period: "09/2017 - 12/2022", role: "Post-Doctoral Fellow/Biochemist", inst: "Ben-Gurion University of the Negev, ISRAEL" },
    { period: "05/2016 - 05/2017", role: "Post-Doctoral Fellow/Biochemist", inst: "University of Nebraska-Lincoln, USA" },
    { period: "07/2013 - 04/2016", role: "Post-Doctoral Fellow", inst: "Indian Institute of Technology, Kanpur-India" },
    { period: "2006 - 2014", role: "PhD/Research Fellow (Biochemistry)", inst: "CSIR-CDRI, Lucknow–India" },
    { period: "2005", role: "M.Sc. (Biochemistry)", inst: "Kanpur University" }
];

const roles = [
    { label: "Associate Editor", org: "BMC Molecular and Cell Biology", icon: "fa-book-open" },
    { label: "Associate Editor", org: "BMC Research Notes", icon: "fa-book-open" },
    { label: "Associate Editor", org: "Frontiers in Microbiology", icon: "fa-book-open" },
    { label: "Advisory Board Member", org: "IJMS", icon: "fa-users" },
    { label: "Academic Editor", org: "Advances in Medicine", icon: "fa-pen-nib" },
    { label: "Academic Editor", org: "Andrologia", icon: "fa-pen-nib" },
    { label: "Academic Editor", org: "PlosOne", icon: "fa-pen-nib" },
    { label: "Editorial Board Member", org: "Molecular and Clinical Oncology", icon: "fa-list-check" },
    { label: "Consultant Scientist", org: "Bencos Research Solutions, Mumbai", icon: "fa-flask" },
    { label: "Consultant Scientist", org: "Palamur Bio", icon: "fa-flask" },
    { label: "Consultant Scientist", org: "Progenbio Lab Technologies", icon: "fa-flask" },
    { label: "Consultant Scientist", org: "NuLife-India", icon: "fa-flask" }
];

const awards = [
    { text: "Biofootprint Alexander Fleming Young Scientist Award 2023", icon: "fa-trophy", type: "award" },
    { text: "Young Scientist Award by SMBLIndia 2023", icon: "fa-medal", type: "award" },
    { text: "Session Chair — Sustainable & Innovative Solutions for India@75 (IMS, Ghaziabad)", icon: "fa-chair", type: "role" },
    { text: "Joint Secretary — Seminar on 'Immunology Talks to Public Health' (GLA University)", icon: "fa-handshake", type: "role" },
    { text: "Co-Organizing Secretary — International Conference on 'OneHealth' (GLA University)", icon: "fa-globe", type: "role" },
    { text: "Post Doctoral Fellowship — University of Nebraska, USA", icon: "fa-graduation-cap", type: "fellowship" },
    { text: "Post Doctoral Fellowship — Morehouse School of Medicine, USA", icon: "fa-graduation-cap", type: "fellowship" },
    { text: "Post Doctoral Fellowship — Ben-Gurion University, Israel", icon: "fa-graduation-cap", type: "fellowship" },
    { text: "Best Poster Award — 6th Biannual Meeting on Mitochondria, Apoptosis & Cancer (Prague, 2019)", icon: "fa-image", type: "award" },
    { text: "IIT Kanpur Institutional Post-Doc Award 2015", icon: "fa-award", type: "award" },
    { text: "CSIR-Fellowship", icon: "fa-star", type: "fellowship" },
    { text: "Best Poster Award — Zoological Society of India 2010", icon: "fa-image", type: "award" },
    { text: "Life Member — Indian Society for Parasitology", icon: "fa-id-card", type: "membership" },
    { text: "Life Member — SMBLIndia", icon: "fa-id-card", type: "membership" }
];

const facilities = [
    {
        icon: "fa-snowflake", name: "-20°C Deep Freeze",
        badge: "Cold Storage",
        points: [
            "Long-term preservation of biological samples & reagents",
            "Stores enzymes, cell lines, and experimental compounds",
            "Maintains sample integrity for months to years",
            "Critical for vaccine antigen and nucleic acid storage"
        ]
    },
    {
        icon: "fa-shield-virus", name: "Biosafety Cabinet (×2)",
        badge: "Biocontainment",
        points: [
            "Class II Type A2 laminar airflow cabinets",
            "Safe handling of BSL-1 and BSL-2 microorganisms",
            "Simultaneous protection of operator, sample & environment",
            "HEPA-filtered, ultraviolet sterilizable work area"
        ]
    },
    {
        icon: "fa-temperature-arrow-up", name: "BOD Incubator",
        badge: "Incubation",
        points: [
            "Precise temperature control in the 5–60°C range",
            "Biochemical oxygen demand and microbial culture studies",
            "Used for cold-temperature growth experiments",
            "Controlled humidity and temperature environment"
        ]
    },
    {
        icon: "fa-rotate", name: "Centrifuge",
        badge: "Separation",
        points: [
            "High-speed separation up to ~15,000 rpm",
            "Pelleting cells, bacteria, and cellular debris",
            "Protein and nucleic acid isolation from complex mixtures",
            "Multiple rotor configurations for varied tube sizes"
        ]
    },
    {
        icon: "fa-temperature-high", name: "Dry Bath",
        badge: "Heating",
        points: [
            "Thermoblock heating up to 130°C without moisture",
            "Ideal for PCR tube incubation and enzyme reactions",
            "Protein denaturation and heat-inactivation protocols",
            "Uniform and rapid temperature equilibration"
        ]
    },
    {
        icon: "fa-bolt", name: "Electrophoresis Unit",
        badge: "Analysis",
        points: [
            "Agarose gel electrophoresis for DNA/RNA resolution",
            "SDS-PAGE for protein molecular weight analysis",
            "PCR product verification and cloning confirmation",
            "Paired with gel documentation system for imaging"
        ]
    },
    {
        icon: "fa-magnet", name: "Magnetic Stirrer",
        badge: "Mixing",
        points: [
            "Hot-plate stirrer with temperature control up to 300°C",
            "Preparing buffer solutions and dissolving reagents",
            "Continuous agitation of liquid bacterial cultures",
            "Variable speed RPM for precise mixing requirements"
        ]
    },
    {
        icon: "fa-rotate-right", name: "Mini-Centrifuge",
        badge: "Quick-Spin",
        points: [
            "Compact benchtop centrifuge for microtubes & PCR strips",
            "Rapid pelleting of small volume samples",
            "Compatible with spin columns for DNA/RNA purification",
            "Instant start/stop for pulse-spin operations"
        ]
    },
    {
        icon: "fa-wind", name: "Vortex Mixer",
        badge: "Homogenization",
        points: [
            "High-speed vibration for rapid sample resuspension",
            "Vigorous mixing of reagents and cell suspensions",
            "Homogenization of microcentrifuge tube contents",
            "Adjustable speed from gentle mixing to full vortex"
        ]
    },
    {
        icon: "fa-water", name: "Water Bath",
        badge: "Temperature Control",
        points: [
            "Precise temperature control up to 100°C",
            "Enzymatic reactions and hybridization assays",
            "Serological tests and culture incubations",
            "Uniform heat distribution via circulating water"
        ]
    },
    {
        icon: "fa-scale-balanced", name: "Weighing Balance",
        badge: "Precision",
        points: [
            "High-precision analytical balance (readability: 0.001 g)",
            "Accurate measurement of chemicals and reagents",
            "Gravimetric preparation of buffer solutions",
            "Essential for media preparation and compound dosing"
        ]
    },
    {
        icon: "fa-microscope", name: "Inverted Phase Contrast Microscope",
        badge: "Live Imaging",
        points: [
            "Live cell imaging in culture dishes and flasks",
            "Morphological assessment of mammalian cell cultures",
            "Phase-contrast visualization of transparent specimens",
            "Equipped with camera port for image documentation"
        ]
    },
    {
        icon: "fa-cloud", name: "CO₂ Incubator",
        badge: "Cell Culture",
        points: [
            "Maintains 37°C, 5% CO₂ and >95% relative humidity",
            "Optimal environment for mammalian cell line maintenance",
            "Used for transfection, drug sensitivity & growth assays",
            "Contamination-resistant inner chamber with UV sterilization"
        ]
    },
    {
        icon: "fa-magnifying-glass", name: "Light Microscope",
        badge: "Microscopy",
        points: [
            "Compound brightfield microscope for general use",
            "Gram-stained bacterial morphology examination",
            "Histological section and tissue slide analysis",
            "Basic microbiological and parasitological identification"
        ]
    }
];

// =============================================
//  UTILITY FUNCTIONS
// =============================================

function highlightActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === page) link.classList.add('active');
    });
}

function initScrollReveal() {
    document.querySelectorAll('.reveal').forEach(el => el.classList.remove('active'));
    const check = () => {
        const wh = window.innerHeight;
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < wh - 60) el.classList.add('active');
        });
    };
    window.addEventListener('scroll', check);
    setTimeout(check, 120);
}

function initTilt(selector) {
    document.querySelectorAll(selector).forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateY(-6px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
}

function initParticles() {
    if (!document.getElementById('particles-js') || typeof particlesJS === 'undefined') return;
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#00897b' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#00897b', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
}

// =============================================
//  PAGE: HOME (index.html) — Facilities
// =============================================

function initFacilities() {
    const grid = document.getElementById('facilities-grid');
    if (!grid) return;
    grid.innerHTML = '';
    facilities.forEach(f => {
        const card = document.createElement('div');
        card.className = 'facility-card reveal';
        card.innerHTML = `
            <div class="facility-front">
                <i class="fa-solid ${f.icon}"></i>
                <h4>${f.name}</h4>
                <span class="facility-badge">${f.badge}</span>
                <span class="facility-hint">Hover to learn more</span>
            </div>
            <div class="facility-back">
                <h4>${f.name}</h4>
                <ul>
                    ${f.points.map(p => `<li><i class="fa-solid fa-check"></i> ${p}</li>`).join('')}
                </ul>
            </div>`;
        grid.appendChild(card);
    });
    initScrollReveal();
}

// =============================================
//  PAGE: PI (pi.html)
// =============================================

function initPI() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    if (!tabBtns.length) return;

    // Render Editorial Roles
    const rolesPanel = document.getElementById('panel-roles');
    if (rolesPanel) {
        rolesPanel.innerHTML = roles.map(r => `
            <div class="achievement-card reveal">
                <div class="ach-icon"><i class="fa-solid ${r.icon}"></i></div>
                <div class="ach-body">
                    <span class="ach-label">${r.label}</span>
                    <span class="ach-org">${r.org}</span>
                </div>
            </div>`).join('');
    }

    // Render Awards
    const awardsPanel = document.getElementById('panel-awards');
    if (awardsPanel) {
        awardsPanel.innerHTML = awards.map(a => `
            <div class="achievement-card reveal">
                <div class="ach-icon ach-icon--award"><i class="fa-solid ${a.icon}"></i></div>
                <div class="ach-body">
                    <span class="ach-org">${a.text}</span>
                    <span class="ach-label ach-type--${a.type}">${a.type}</span>
                </div>
            </div>`).join('');
    }

    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
            initScrollReveal();
        });
    });

    // Render Career Timeline on PI page
    const piTimeline = document.getElementById('pi-timeline-container');
    if (piTimeline) {
        piTimeline.innerHTML = careerSummary.map(item => `
            <div class="timeline-item reveal">
                <div class="timeline-date">${item.period}</div>
                <div class="timeline-content"><h4>${item.role}</h4><p class="text-muted">${item.inst}</p></div>
            </div>`).join('');
    }

    initScrollReveal();
    initTilt('.pi-profile');
}

// =============================================
//  PAGE: RESEARCH (research.html)
// =============================================

function renderProjects(filterBy) {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = '';
    const filtered = filterBy === 'all' ? projects : projects.filter(p => p.category === filterBy);
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card flip-card reveal';
        card.innerHTML = `
            <div class="flip-inner">
                <div class="flip-front">
                    <div class="project-meta">
                        <span class="badge status-${p.status}"><i class="fa-solid fa-spinner fa-spin-pulse"></i> ${p.status}</span>
                        <span class="badge trl">${p.trl}</span>
                        <span class="badge cat-badge">${p.category}</span>
                    </div>
                    <h3>${p.title}</h3>
                    <div class="project-funding">
                        <span><i class="fa-solid fa-building-columns"></i> ${p.funding}</span>
                        <span><i class="fa-solid fa-money-bill-wave"></i> ${p.amount}</span>
                        <span><i class="fa-regular fa-calendar"></i> ${p.duration}</span>
                    </div>
                    <div class="flip-hint"><i class="fa-solid fa-rotate"></i> Click to see details</div>
                </div>
                <div class="flip-back">
                    <div class="ps-grid">
                        <div class="ps-col"><h5><i class="fa-solid fa-circle-exclamation"></i> Problem</h5><p>${p.problem}</p></div>
                        <div class="ps-col"><h5><i class="fa-solid fa-bridge-water"></i> Gap</h5><p>${p.gap}</p></div>
                        <div class="ps-col"><h5><i class="fa-solid fa-flask"></i> Solution</h5><p>${p.solution}</p></div>
                        <div class="ps-col"><h5><i class="fa-solid fa-arrow-trend-up"></i> Impact</h5><p>${p.impact}</p></div>
                    </div>
                </div>
            </div>`;
        card.addEventListener('click', () => card.classList.toggle('flipped'));
        container.appendChild(card);
    });
    initScrollReveal();
    initTilt('.flip-front');
}

function setupFilters() {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', e => {
            btns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderProjects(e.currentTarget.dataset.filter);
        });
    });
}

function initResearch() {
    if (!document.getElementById('projects-container')) return;
    renderProjects('all');
    setupFilters();
    initScrollReveal();
}

// =============================================
//  PAGE: NETWORK (network.html)
// =============================================

function initNetworkGraph() {
    const container = document.getElementById('collaboration-network');
    if (!container || typeof vis === 'undefined') return;

    const nodes = new vis.DataSet([
        { id: 1, label: 'DVD Lab\nPI: Dr. Pandey', shape: 'dot', size: 30, color: { background: '#ffca28', border: '#b48c08' }, font: { size: 16, face: 'Inter', multi: true, bold: '16px' } },
        { id: 2, label: 'AIIMS\nNew Delhi', shape: 'dot', size: 20, color: { background: '#00897b', border: '#004d40' } },
        { id: 3, label: 'ICMR NJIL & OMD\nAgra', shape: 'dot', size: 20, color: { background: '#00897b', border: '#004d40' } },
        { id: 4, label: 'ICMR RMRC\nGorakhpur', shape: 'dot', size: 20, color: { background: '#00897b', border: '#004d40' } },
        { id: 5, label: 'BRD Medical College\nGorakhpur', shape: 'dot', size: 20, color: { background: '#00897b', border: '#004d40' } },
        { id: 6, label: 'Chandigarh\nUniversity', shape: 'dot', size: 20, color: { background: '#00897b', border: '#004d40' } },
        { id: 7, label: 'Ben-Gurion University\nIsrael', shape: 'dot', size: 20, color: { background: '#00897b', border: '#004d40' } }
    ]);

    const edges = new vis.DataSet([
        { from: 1, to: 2, width: 2, color: { color: '#e5e7eb', opacity: 0.8 } },
        { from: 1, to: 3, width: 2, color: { color: '#e5e7eb', opacity: 0.8 } },
        { from: 1, to: 4, width: 2, color: { color: '#e5e7eb', opacity: 0.8 } },
        { from: 1, to: 5, width: 2, color: { color: '#e5e7eb', opacity: 0.8 } },
        { from: 1, to: 6, width: 2, color: { color: '#e5e7eb', opacity: 0.8 } },
        { from: 1, to: 7, width: 3, color: { color: '#e5e7eb', opacity: 0.8 }, dashes: true }
    ]);

    new vis.Network(container, { nodes, edges }, {
        physics: { forceAtlas2Based: { gravitationalConstant: -50, centralGravity: 0.01, springLength: 100 }, minVelocity: 0.75, solver: 'forceAtlas2Based' },
        interaction: { hover: true, zoomView: false }
    });
}

// =============================================
//  PAGE: TEAM (team.html)
// =============================================

function initTeam() {
    const scholarContainer = document.getElementById('scholars-container');
    if (!scholarContainer) return;

    scholars.forEach(s => {
        const photoHTML = s.photo
            ? `<div class="member-photo-wrap"><img src="${s.photo}" alt="${s.name}" class="member-photo" style="${s.photoStyle || ''}"></div>`
            : `<div class="member-avatar"><i class="fa-solid fa-user-graduate"></i></div>`;
        scholarContainer.innerHTML += `
            <div class="member-card reveal">
                ${photoHTML}
                <h4>${s.name}</h4>
                <span class="degree">${s.degree}</span>
                <p class="interest"><strong>Interest:</strong> ${s.interest}</p>
            </div>`;
    });

    const alumniContainer = document.getElementById('alumni-container');
    if (alumniContainer) {
        alumni.forEach(a => {
            alumniContainer.innerHTML += `
                <div class="list-item">
                    <h4>${a.name}</h4>
                    <p class="text-muted"><small>${a.role}</small></p>
                </div>`;
        });
    }

    initScrollReveal();
    initTilt('.member-card');
}

// =============================================
//  PAGE: CAREER (career.html)
// =============================================

function initCareer() {
    // Career timeline is now shown on pi.html — nothing to render here
    initScrollReveal();
}

// =============================================
//  BOOT
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    highlightActiveNav();
    initParticles();

    // Reveal for static elements already in HTML
    document.querySelectorAll('.section-header, .pi-profile, .network-wrapper, .career-content, .page-banner-content').forEach(el => el.classList.add('reveal'));

    initScrollReveal();

    // Page-specific init
    initFacilities();
    initPI();
    initResearch();
    initNetworkGraph();
    initTeam();
    initCareer();
});
