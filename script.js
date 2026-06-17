// ================= TAB SWITCHING MECHANICS =================
const btn3d = document.getElementById('tab-3d');
const btnAi = document.getElementById('tab-ai');
const sec3d = document.getElementById('simulator-content');
const secAi = document.getElementById('ai-content');

btn3d.addEventListener('click', () => {
    btn3d.className = "px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/10 hover:bg-emerald-400";
    btnAi.className = "px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-semibold text-sm transition-all hover:bg-slate-700 flex items-center gap-2 border border-slate-700";
    sec3d.classList.remove('hidden');
    secAi.classList.add('hidden');
});

btnAi.addEventListener('click', () => {
    btnAi.className = "px-4 py-2 rounded-lg bg-indigo-500 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/10 hover:bg-indigo-400";
    btn3d.className = "px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-semibold text-sm transition-all hover:bg-slate-700 flex items-center gap-2 border border-slate-700";
    secAi.classList.remove('hidden');
    sec3d.classList.add('hidden');
    window.dispatchEvent(new Event('resize'));
});

// Toast Notifications System Manager
function showToast(title, body, iconClass = "fa-circle-check", textHex = "text-emerald-400") {
    const toast = document.getElementById('toast-msg');
    const tTitle = document.getElementById('toast-title');
    const tBody = document.getElementById('toast-body');
    const tIcon = document.getElementById('toast-icon');

    tTitle.innerText = title;
    tBody.innerText = body;
    tIcon.className = `text-xl ${textHex}`;
    tIcon.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;

    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3500);
}

// Preset prompts definitions for AI generation tab
const prompts = [
    "Extremely high-quality scientific render of a naphthalimide organic dye dimer stack, displaying the calculated Quantum Electrostatic Potential (ESP) mapped onto its electron density cloud, with neon cyan and pink gradients showing electron distribution, dark laboratory black background, 8k resolution, stylized computational physics aesthetic.",
    "Detailed molecular modeling illustration of a self-assembled chiral peptide-linked nanofiber. Showing atomic ball-and-stick representations of L-isoleucine amino acid chains forming a right-handed helix. High quality 3D structure, molecular mechanics layout, dark background.",
    "Visual representation of the pi-pi orbital overlap (HOMO-LUMO) between two stacked planar conjugated molecules, quantum mechanics schematic showing colorful overlapping wavefunction clouds, high-tech academic slide graphic, transparent glowing neon volumes."
];

function setPrompt(index) {
    document.getElementById('prompt-input').value = prompts[index];
    showToast("Preset Prompt Loaded", "The custom directive has been imported into the Imagen console.", "fa-file-code", "text-indigo-400");
}

// ================= DFT QUANTUM DATAPOINTS (MATCHING EXPERIMENTAL COMPILATION) =================
const dftData = {
    2: {
        name: "β-alanine (N2)",
        coaxialDistance: 3.40,
        coaxialEnergy: -16.2,
        coaxialDisp: -8.0,
        globalAngle: -40,
        globalDistance: 3.25,
        globalEnergy: -18.1,
        globalDisp: -8.6,
        angles: [-90, -80, -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        energies: [-8.0, -11.5, -11.0, -16.5, -17.2, -18.1, -14.0, -14.5, -16.0, -16.2, -16.0, -16.6, -16.0, -15.9, -15.5, -14.0, -14.8, -14.5, -14.0],
        dispContribution: -8.6,
        color: '#64748b',
        textColor: 'text-rose-400',
        helicity: "Left-Handed Twist",
        cotton: "Negative Cotton Effect"
    },
    3: {
        name: "γ-aminobutyric acid (N3)",
        coaxialDistance: 3.35,
        coaxialEnergy: -24.9,
        coaxialDisp: -7.5,
        globalAngle: 30,
        globalDistance: 3.18,
        globalEnergy: -31.2,
        globalDisp: -8.3,
        angles: [-90, -80, -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        energies: [-23.6, -24.8, -25.6, -26.5, -27.1, -27.3, -23.3, -24.7, -26.0, -24.9, -26.0, -30.5, -31.2, -30.3, -30.0, -29.2, -30.6, -27.6, -28.4],
        dispContribution: -8.3,
        color: '#ef4444',
        textColor: 'text-emerald-400',
        helicity: "Right-Handed Twist",
        cotton: "Positive Cotton Effect"
    },
    4: {
        name: "δ-amino valeric acid (N4)",
        coaxialDistance: 3.36,
        coaxialEnergy: -13.8,
        coaxialDisp: -7.3,
        globalAngle: -50,
        globalDistance: 3.30,
        globalEnergy: -16.3,
        globalDisp: -7.8,
        angles: [-90, -80, -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        energies: [-12.3, -12.3, -13.3, -16.1, -16.3, -15.5, -13.8, -14.1, -13.6, -13.8, -15.0, -15.3, -15.8, -15.3, -15.2, -9.8, -9.6, -9.5, -9.5],
        dispContribution: -7.8,
        color: '#3b82f6',
        textColor: 'text-rose-400',
        helicity: "Left-Handed Twist",
        cotton: "Negative Cotton Effect"
    },
    5: {
        name: "ε-aminocaproic acid (N5)",
        coaxialDistance: 3.46,
        coaxialEnergy: -16.6,
        coaxialDisp: -7.9,
        globalAngle: 30,
        globalDistance: 3.27,
        globalEnergy: -19.3,
        globalDisp: -8.6,
        angles: [-90, -80, -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        energies: [-10.2, -6.3, -10.5, -13.8, -15.1, -15.8, -16.1, -16.0, -16.3, -16.6, -16.5, -16.5, -19.3, -18.3, -18.3, -17.8, -16.5, -16.4, -16.3],
        dispContribution: -8.6,
        color: '#10b981',
        textColor: 'text-emerald-400',
        helicity: "Right-Handed Twist",
        cotton: "Positive Cotton Effect"
    }
};

let currentSpacer = 2; 
let currentAngle = -40; 
let currentDistance = 3.25; 

// Linear interpolation mapping values smoothly between the discrete points
function getEnergy(n, angle, dist) {
    const data = dftData[n];
    if (!data) return 0;
    
    const clampedAngle = Math.max(-90, Math.min(90, angle));
    let rawE = 0;
    
    for (let i = 0; i < data.angles.length - 1; i++) {
        const a1 = data.angles[i];
        const a2 = data.angles[i+1];
        if (clampedAngle >= a1 && clampedAngle <= a2) {
            const e1 = data.energies[i];
            const e2 = data.energies[i+1];
            const t = (clampedAngle - a1) / (a2 - a1);
            rawE = e1 + t * (e2 - e1);
            break;
        }
    }

    const targetDist = (angle === 0) ? data.coaxialDistance : data.globalDistance;
    const deviation = dist - targetDist;
    const distancePenalty = Math.exp(-Math.pow(deviation, 2) / 0.12); 
    
    let finalE = rawE * distancePenalty;
    if (finalE > -1) finalE = -1.0; 
    return finalE;
}

function getDispersion(n, angle, dist) {
    const data = dftData[n];
    const baseEnergy = getEnergy(n, angle, dist);
    const ratioCoaxial = data.coaxialDisp / data.coaxialEnergy;
    const ratioGlobal = data.globalDisp / data.globalEnergy;
    
    const weight = Math.min(1.0, Math.abs(angle) / 30.0);
    const currentRatio = weight * ratioGlobal + (1.0 - weight) * ratioCoaxial;
    return baseEnergy * currentRatio;
}

// ================= THREE.JS 3D MOLECULAR CPK MODELING GRAPHICS =================
let scene, camera, renderer, dimerContainer;
let bottomMonomer, topMonomer, dipoleArrowTop, dipoleArrowBottom;

function init3D() {
    const container = document.getElementById('canvas-container');
    const w = container.clientWidth;
    const h = container.clientHeight;

    scene = new THREE.Scene();
    scene.background = new THREE.Color('#030712');

    camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(0, 4, 11);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    dimerContainer = new THREE.Group();
    scene.add(dimerContainer);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.7);
    keyLight.position.set(5, 12, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x06b6d4, 0.4); 
    fillLight.position.set(-5, -5, -5);
    scene.add(fillLight);

    rebuildDimerStructure();
    setupCameraDrag(container);

    function animate() {
        requestAnimationFrame(animate);
        dimerContainer.rotation.y += 0.001; 
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        const nw = container.clientWidth;
        const nh = container.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
    });
}

// Procedural coordinator arrays to construct atomic topology dynamically
function createMonomerGeometry(spacerLength) {
    const group = new THREE.Group();

    const matC = new THREE.MeshPhongMaterial({ color: 0x475569, shininess: 80, specular: 0x111111 });
    const matH = new THREE.MeshPhongMaterial({ color: 0xf8fafc, shininess: 90, specular: 0x222222 });
    const matO = new THREE.MeshPhongMaterial({ color: 0xef4444, shininess: 85, specular: 0x222222 });
    const matN = new THREE.MeshPhongMaterial({ color: 0x2563eb, shininess: 85, specular: 0x111111 });
    const matChiral = new THREE.MeshPhongMaterial({ color: 0x6366f1, shininess: 90, specular: 0x444444 });
    const matBond = new THREE.MeshPhongMaterial({ color: 0x334155, shininess: 30 });

    const atomSpheres = [];

    // Core Planar 1,8-naphthalimide core spatial vectors
    const coreAtoms = [
        { type: 'N', pos: [0, 0.7, 0] }, 
        { type: 'C', pos: [-0.67, 0.35, 0] },
        { type: 'C', pos: [0.67, 0.35, 0] },
        { type: 'O', pos: [-1.4, 0.8, 0] },
        { type: 'O', pos: [1.4, 0.8, 0] },
        { type: 'C', pos: [-0.67, -0.75, 0] },
        { type: 'C', pos: [0.67, -0.75, 0] },
        { type: 'C', pos: [-1.4, -0.2, 0] },
        { type: 'C', pos: [1.4, -0.2, 0] },
        { type: 'C', pos: [-1.4, -1.5, 0] },
        { type: 'C', pos: [1.4, -1.5, 0] },
        { type: 'C', pos: [-0.67, -2.1, 0] },
        { type: 'C', pos: [0.67, -2.1, 0] },
        { type: 'C', pos: [-2.1, -0.75, 0] },
        { type: 'C', pos: [2.1, -0.75, 0] },
        { type: 'C', pos: [-2.1, -2.1, 0] },
        { type: 'C', pos: [2.1, -2.1, 0] },
        { type: 'C', pos: [-1.4, -2.75, 0] },
        { type: 'C', pos: [1.4, -2.75, 0] }
    ];

    const ringHydrogens = [
        [-2.7, -0.3, 0], [2.7, -0.3, 0],
        [-2.7, -2.5, 0], [2.7, -2.5, 0],
        [-1.4, -3.5, 0], [1.4, -3.5, 0]
    ];

    coreAtoms.forEach(a => atomSpheres.push({ type: a.type, pos: [...a.pos] }));
    ringHydrogens.forEach(h => atomSpheres.push({ type: 'H', pos: h }));

    // Chain node translation loop generating linear hydrocarbon matrices (zigzag)
    let lastPos = [0, 0.7, 0];
    for (let i = 0; i < spacerLength; i++) {
        const xSign = (i % 2 === 0) ? 0.45 : -0.45;
        const nextPos = [
            lastPos[0] + xSign,
            lastPos[1] + 0.9,
            lastPos[2] + ((i % 3 === 0) ? 0.25 : -0.15)
        ];
        atomSpheres.push({ type: 'C', pos: nextPos });
        atomSpheres.push({ type: 'H', pos: [nextPos[0] + 0.5, nextPos[1], nextPos[2] + 0.4] });
        atomSpheres.push({ type: 'H', pos: [nextPos[0] - 0.5, nextPos[1], nextPos[2] - 0.4] });
        lastPos = nextPos;
    }

    // Amide peptide bond mapping
    const amideC = [lastPos[0] + 0.3, lastPos[1] + 0.9, lastPos[2]];
    atomSpheres.push({ type: 'C', pos: amideC });
    atomSpheres.push({ type: 'O', pos: [amideC[0] + 0.6, amideC[1] + 0.15, amideC[2] + 0.4] }); 

    const amideN = [amideC[0] - 0.35, amideC[1] + 0.85, amideC[2]];
    atomSpheres.push({ type: 'N', pos: amideN });
    atomSpheres.push({ type: 'H', pos: [amideN[0] - 0.4, amideN[1] + 0.1, amideN[2] - 0.5] }); 

    // Chiral stereocenter validation points
    const alphaC = [amideN[0], amideN[1] + 0.9, amideN[2]];
    atomSpheres.push({ type: 'Chiral', pos: alphaC });
    atomSpheres.push({ type: 'H', pos: [alphaC[0] + 0.5, alphaC[1] + 0.1, alphaC[2] + 0.4] });

    const esterC = [alphaC[0] - 0.4, alphaC[1] + 0.8, alphaC[2]];
    atomSpheres.push({ type: 'C', pos: esterC });
    atomSpheres.push({ type: 'O', pos: [esterC[0] - 0.6, esterC[1] + 0.1, esterC[2] + 0.3] });
    
    const esterO = [esterC[0], esterC[1] + 0.8, esterC[2]];
    atomSpheres.push({ type: 'O', pos: esterO });
    atomSpheres.push({ type: 'C', pos: [esterO[0] + 0.15, esterO[1] + 0.7, esterO[2]] }); 

    const betaC = [alphaC[0] + 0.5, alphaC[1] + 0.8, alphaC[2]];
    atomSpheres.push({ type: 'C', pos: betaC });
    atomSpheres.push({ type: 'C', pos: [betaC[0] + 0.5, betaC[1] + 0.8, betaC[2]] });
    atomSpheres.push({ type: 'C', pos: [betaC[0], betaC[1] + 0.8, betaC[2] + 0.9] });

    const CPK_Config = {
        'C': { radius: 0.20, mat: matC },
        'H': { radius: 0.11, mat: matH },
        'O': { radius: 0.19, mat: matO },
        'N': { radius: 0.20, mat: matN },
        'Chiral': { radius: 0.26, mat: matChiral }
    };

    const meshes = [];
    atomSpheres.forEach(atom => {
        const config = CPK_Config[atom.type];
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(config.radius, 16, 16), config.mat);
        sphere.position.set(...atom.pos);
        group.add(sphere);
        meshes.push({ mesh: sphere, x: atom.pos[0], y: atom.pos[1], z: atom.pos[2] });
    });

    // Inter-atomic distance network verification parser to build covalent lines
    for (let i = 0; i < meshes.length; i++) {
        for (let j = i + 1; j < meshes.length; j++) {
            const dx = meshes[i].x - meshes[j].x;
            const dy = meshes[i].y - meshes[j].y;
            const dz = meshes[i].z - meshes[j].z;
            const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
            
            if (dist < 1.62) {
                const start = new THREE.Vector3(meshes[i].x, meshes[i].y, meshes[i].z);
                const end = new THREE.Vector3(meshes[j].x, meshes[j].y, meshes[j].z);
                
                const direction = new THREE.Vector3().subVectors(end, start);
                const edgeGeo = new THREE.CylinderGeometry(0.06, 0.06, direction.length(), 8);
                const edge = new THREE.Mesh(edgeGeo, matBond);
                
                edge.position.copy(start).addScaledVector(direction, 0.5);
                edge.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
                group.add(edge);
            }
        }
    }
    return group;
}

function rebuildDimerStructure() {
    if (bottomMonomer) dimerContainer.remove(bottomMonomer);
    if (topMonomer) dimerContainer.remove(topMonomer);

    bottomMonomer = createMonomerGeometry(currentSpacer);
    topMonomer = createMonomerGeometry(currentSpacer);

    bottomMonomer.position.set(0, 0, -currentDistance / 2);
    topMonomer.position.set(0, 0, currentDistance / 2);
    topMonomer.rotation.z = THREE.MathUtils.degToRad(currentAngle);

    dimerContainer.add(bottomMonomer);
    dimerContainer.add(topMonomer);

    if (dipoleArrowTop) dimerContainer.remove(dipoleArrowTop);
    if (dipoleArrowBottom) dimerContainer.remove(dipoleArrowBottom);

    const dipoleDirection = new THREE.Vector3(1, 0, 0); 
    const arrowLength = 1.4;
    const arrowColor = 0x2dd4bf;

    dipoleArrowBottom = new THREE.ArrowHelper(dipoleDirection, new THREE.Vector3(0, 0, -currentDistance / 2), arrowLength, arrowColor, 0.3, 0.2);
    const rotatedTopDir = new THREE.Vector3(Math.cos(THREE.MathUtils.degToRad(currentAngle)), Math.sin(THREE.MathUtils.degToRad(currentAngle)), 0);
    dipoleArrowTop = new THREE.ArrowHelper(rotatedTopDir, new THREE.Vector3(0, 0, currentDistance / 2), arrowLength, arrowColor, 0.3, 0.2);

    dimerContainer.add(dipoleArrowBottom);
    dimerContainer.add(dipoleArrowTop);
}

function setupCameraDrag(container) {
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        prevMouse = { x: e.clientX, y: e.clientY };
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const delta = { x: e.clientX - prevMouse.x, y: e.clientY - prevMouse.y };
        dimerContainer.rotation.y += delta.x * 0.005;
        dimerContainer.rotation.x += delta.y * 0.005;
        prevMouse = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => { isDragging = false; });
    
    container.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isDragging = true;
            prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    });

    container.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        const delta = { x: e.touches[0].clientX - prevMouse.x, y: e.touches[0].clientY - prevMouse.y };
        dimerContainer.rotation.y += delta.x * 0.005;
        dimerContainer.rotation.x += delta.y * 0.005;
        prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });

    container.addEventListener('touchend', () => { isDragging = false; });
}

function resetCamera() {
    dimerContainer.rotation.set(0, 0, 0);
    camera.position.set(0, 4, 11);
    showToast("Camera Reset", "Simulation rotated back to primary Z-stack axis.", "fa-arrows-to-eye");
}

// ================= DYNAMIC POTENTIAL ENERGY SURFACE (PES) SVG PLOTTING =================
function drawAllCurves() {
    ['curve-n2', 'curve-n3', 'curve-n4', 'curve-n5'].forEach((id, idx) => {
        const molNum = idx + 2;
        const p = document.getElementById(id);
        let d = [];
        for (let deg = -90; deg <= 90; deg += 2) {
            const x = 50 + ((deg + 90) / 180) * 900;
            const energy = getEnergy(molNum, deg, dftData[molNum].globalDistance);
            const y = 170 - (energy / -35) * 150;
            d.push(`${x},${y}`);
        }
        p.setAttribute('d', `M ${d.join(' L ')}`);
    });

    const activeStroke = document.getElementById('active-curve-stroke');
    const activeArea = document.getElementById('active-curve-area');
    const activeColor = dftData[currentSpacer].color;
    activeStroke.setAttribute('stroke', activeColor);
    
    document.getElementById('grad-stop-start').setAttribute('stop-color', activeColor);
    document.getElementById('grad-stop-end').setAttribute('stop-color', activeColor);

    let activePoints = [];
    for (let deg = -90; deg <= 90; deg += 2) {
        const x = 50 + ((deg + 90) / 180) * 900;
        const energy = getEnergy(currentSpacer, deg, currentDistance);
        const y = 170 - (energy / -35) * 150;
        activePoints.push(`${x},${y}`);
    }

    const dLine = `M ${activePoints.join(' L ')}`;
    activeStroke.setAttribute('d', dLine);
    activeArea.setAttribute('d', `${dLine} L 950,170 L 50,170 Z`);

    const config = dftData[currentSpacer];
    const optX = 50 + ((config.globalAngle + 90) / 180) * 900;
    const optY = 170 - (config.globalEnergy / -35) * 150;

    const optDot = document.getElementById('optimal-dot');
    const optLabel = document.getElementById('optimal-dot-label');

    optDot.setAttribute('cx', optX);
    optDot.setAttribute('cy', optY);
    optDot.setAttribute('fill', activeColor);

    optLabel.setAttribute('x', optX - 45);
    optLabel.setAttribute('y', optY - 14);
    optLabel.textContent = `DFT Opt: ${config.globalAngle}° (${config.globalEnergy} kcal/mol)`;
}

function updateGraphPointer() {
    const pointer = document.getElementById('live-point');
    const cursorLine = document.getElementById('cursor-line');
    const activeColor = dftData[currentSpacer].color;

    const x = 50 + ((currentAngle + 90) / 180) * 900;
    const energy = getEnergy(currentSpacer, currentAngle, currentDistance);
    const y = 170 - (energy / -35) * 150;

    pointer.setAttribute('cx', x);
    pointer.setAttribute('cy', y);
    pointer.setAttribute('fill', activeColor);

    cursorLine.setAttribute('x1', x);
    cursorLine.setAttribute('y1', 10);
    cursorLine.setAttribute('x2', x);
    cursorLine.setAttribute('y2', 185);
    cursorLine.classList.remove('opacity-0');
}

// ================= PROPERTY CONTROLLER LISTENERS =================
const sliderAngle = document.getElementById('angle-slider');
const sliderDistance = document.getElementById('distance-slider');

sliderAngle.addEventListener('input', (e) => {
    currentAngle = parseFloat(e.target.value);
    document.getElementById('angle-val').innerText = `${currentAngle.toFixed(1)}°`;

    if (topMonomer) {
        topMonomer.rotation.z = THREE.MathUtils.degToRad(currentAngle);
        dimerContainer.remove(dipoleArrowTop);
        const arrowLength = 1.4;
        const arrowColor = 0x2dd4bf;
        const rotatedTopDir = new THREE.Vector3(Math.cos(THREE.MathUtils.degToRad(currentAngle)), Math.sin(THREE.MathUtils.degToRad(currentAngle)), 0);
        dipoleArrowTop = new THREE.ArrowHelper(rotatedTopDir, new THREE.Vector3(0, 0, currentDistance / 2), arrowLength, arrowColor, 0.3, 0.2);
        dimerContainer.add(dipoleArrowTop);
    }
    updateQuantumStats();
});

sliderDistance.addEventListener('input', (e) => {
    currentDistance = parseFloat(e.target.value);
    document.getElementById('distance-val').innerText = `${currentDistance.toFixed(2)} Å`;

    if (bottomMonomer && topMonomer) {
        bottomMonomer.position.z = -currentDistance / 2;
        topMonomer.position.z = currentDistance / 2;
        dipoleArrowBottom.position.z = -currentDistance / 2;
        dipoleArrowTop.position.z = currentDistance / 2;
    }
    updateQuantumStats();
    drawAllCurves(); 
});

// Snapshot preset bindings
document.getElementById('btn-snap-coaxial').addEventListener('click', () => {
    const config = dftData[currentSpacer];
    currentAngle = 0;
    currentDistance = config.coaxialDistance;

    sliderAngle.value = currentAngle;
    sliderDistance.value = currentDistance;
    document.getElementById('angle-val').innerText = "0.0°";
    document.getElementById('distance-val').innerText = `${currentDistance.toFixed(2)} Å`;

    rebuildDimerStructure();
    drawAllCurves();
    updateQuantumStats();
    showToast("Snapped to Coaxial Conformer", "Aligned at θ = 0° and d = " + currentDistance + " Å", "fa-arrows-down-to-line", "text-amber-400");
});

document.getElementById('btn-snap-global').addEventListener('click', () => {
    const config = dftData[currentSpacer];
    currentAngle = config.globalAngle;
    currentDistance = config.globalDistance;

    sliderAngle.value = currentAngle;
    sliderDistance.value = currentDistance;
    document.getElementById('angle-val').innerText = `${currentAngle.toFixed(1)}°`;
    document.getElementById('distance-val').innerText = `${currentDistance.toFixed(2)} Å`;

    rebuildDimerStructure();
    drawAllCurves();
    updateQuantumStats();
    showToast("Snapped to Global Minimum", "Aligned at calculated ground state for " + config.name, "fa-award", "text-emerald-400");
});

// Gradient Descent Style optimization interpolation loop
document.getElementById('btn-optimize').addEventListener('click', () => {
    const config = dftData[currentSpacer];
    const targetAngle = config.globalAngle;
    const targetDistance = config.globalDistance;

    let startAngle = currentAngle;
    let startDistance = currentDistance;
    let progress = 0;

    const optimizeStep = () => {
        progress += 0.035;
        if (progress >= 1) {
            currentAngle = targetAngle;
            currentDistance = targetDistance;

            sliderAngle.value = targetAngle;
            sliderDistance.value = targetDistance;
            document.getElementById('angle-val').innerText = `${targetAngle.toFixed(1)}°`;
            document.getElementById('distance-val').innerText = `${targetDistance.toFixed(2)} Å`;

            rebuildDimerStructure();
            drawAllCurves();
            updateQuantumStats();
            showToast("Optimization Achieved", `${config.name} settled in minimum conformation at B.E. of ${config.globalEnergy} kcal/mol`, "fa-check-double", "text-emerald-400");
        } else {
            currentAngle = startAngle + (targetAngle - startAngle) * progress;
            currentDistance = startDistance + (targetDistance - startDistance) * progress;

            sliderAngle.value = currentAngle;
            sliderDistance.value = currentDistance;
            document.getElementById('angle-val').innerText = `${currentAngle.toFixed(1)}°`;
            document.getElementById('distance-val').innerText = `${currentDistance.toFixed(2)} Å`;

            if (bottomMonomer && topMonomer) {
                bottomMonomer.position.z = -currentDistance / 2;
                topMonomer.position.z = currentDistance / 2;
                topMonomer.rotation.z = THREE.MathUtils.degToRad(currentAngle);
                
                dipoleArrowBottom.position.z = -currentDistance / 2;
                dimerContainer.remove(dipoleArrowTop);
                const rotatedTopDir = new THREE.Vector3(Math.cos(THREE.MathUtils.degToRad(currentAngle)), Math.sin(THREE.MathUtils.degToRad(currentAngle)), 0);
                dipoleArrowTop = new THREE.ArrowHelper(rotatedTopDir, new THREE.Vector3(0, 0, currentDistance / 2), 1.4, 0x2dd4bf, 0.3, 0.2);
                dimerContainer.add(dipoleArrowTop);
            }
            updateQuantumStats();
            drawAllCurves();
            requestAnimationFrame(optimizeStep);
        }
    };
    optimizeStep();
});

function updateQuantumStats() {
    const energy = getEnergy(currentSpacer, currentAngle, currentDistance);
    const disp = getDispersion(currentSpacer, currentAngle, currentDistance);
    const config = dftData[currentSpacer];

    document.getElementById('stat-be').innerText = energy.toFixed(2);
    document.getElementById('stat-disp').innerText = disp.toFixed(2);

    const labelHelicity = document.getElementById('stat-helicity-badge');
    const labelCotton = document.getElementById('stat-cotton-text');
    const labelFiber = document.getElementById('stat-fiber-text');

    if (currentAngle < 0) {
        labelHelicity.innerText = "Left-Handed Twist";
        labelHelicity.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20";
        labelCotton.innerText = "Negative Cotton Effect";
        labelCotton.className = "font-semibold text-rose-400 animate-pulse";
        labelFiber.innerText = "Left-Handed Nanofibers";
        labelFiber.className = "font-semibold text-rose-400";
    } else if (currentAngle > 0) {
        labelHelicity.innerText = "Right-Handed Twist";
        labelHelicity.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
        labelCotton.innerText = "Positive Cotton Effect";
        labelCotton.className = "font-semibold text-emerald-400 animate-pulse";
        labelFiber.innerText = "Right-Handed Nanofibers";
        labelFiber.className = "font-semibold text-emerald-400";
    } else {
        labelHelicity.innerText = "Planar Stack";
        labelHelicity.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20";
        labelCotton.innerText = "No Cotton Signal";
        labelCotton.className = "font-semibold text-slate-500";
        labelFiber.innerText = "Straight Fibers (Achiral)";
        labelFiber.className = "font-semibold text-slate-500";
    }

    const targetD = (currentAngle === 0) ? config.coaxialDistance : config.globalDistance;
    document.getElementById('optimal-dist-helper').innerText = `Optimal: ${targetD.toFixed(2)} Å`;

    updateGraphPointer();
}

function setSpacer(n) {
    currentSpacer = n;
    const config = dftData[n];

    document.querySelectorAll('.spacer-btn').forEach(btn => {
        btn.className = "spacer-btn py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-400 font-bold transition-all hover:bg-slate-800/50";
    });
    document.getElementById(`btn-n${n}`).className = "spacer-btn py-2.5 rounded-xl border font-bold transition-all bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-md";

    document.getElementById('active-spacer-name').innerText = config.name;

    currentAngle = config.globalAngle;
    currentDistance = config.globalDistance;

    sliderAngle.value = currentAngle;
    sliderDistance.value = currentDistance;
    document.getElementById('angle-val').innerText = `${currentAngle.toFixed(1)}°`;
    document.getElementById('distance-val').innerText = `${currentDistance.toFixed(2)} Å`;

    rebuildDimerStructure();
    drawAllCurves();
    updateQuantumStats();

    showToast("System Reconfigured", `Switched to active monomer series ${config.name}.`, "fa-atom", "text-emerald-400");
}

// ================= IMAGEN-4 API PREDICT CALL SERVICE ENGINE =================
const apiKey = ""; 

document.getElementById('btn-generate-ai').addEventListener('click', async () => {
    const promptText = document.getElementById('prompt-input').value.trim();

    if (!promptText) {
        showToast("Missing Prompt", "Please specify rendering instructions in the console before starting.", "fa-triangle-exclamation", "text-amber-500");
        return;
    }

    const placeholder = document.getElementById('ai-placeholder');
    const loader = document.getElementById('ai-loader');
    const resultContainer = document.getElementById('ai-result-container');
    const resultImg = document.getElementById('ai-result-img');
    const badge = document.getElementById('rendering-badge');

    placeholder.classList.add('hidden');
    resultContainer.classList.add('hidden');
    loader.classList.remove('hidden');
    badge.classList.remove('hidden');

    try {
        let success = false;
        let attempt = 0;
        let result = null;

        while (!success && attempt < 5) {
            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        instances: { prompt: promptText },
                        parameters: { sampleCount: 1 }
                    })
                });

                if (response.ok) {
                    result = await response.json();
                    success = true;
                } else {
                    throw new Error(`HTTP Error Status: ${response.status}`);
                }
            } catch (err) {
                attempt++;
                const delay = Math.pow(2, attempt) * 1000;
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }

        if (success && result.predictions?.[0]?.bytesBase64Encoded) {
            const imageUrl = `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
            resultImg.src = imageUrl;

            loader.classList.add('hidden');
            resultContainer.classList.remove('hidden');
            showToast("AI Graphic Ready", "Supramolecular diagram successfully synthesized.", "fa-wand-magic-sparkles", "text-indigo-400");
        } else {
            throw new Error("Generative prediction failed.");
        }

    } catch (error) {
        loader.classList.add('hidden');
        placeholder.classList.remove('hidden');
        showToast("Synthesize Failed", "API key missing or endpoint timeout. Please verify connections.", "fa-circle-xmark", "text-red-500");
    } finally {
        badge.classList.add('hidden');
    }
});

function downloadRender() {
    const img = document.getElementById('ai-result-img');
    const link = document.createElement('a');
    link.href = img.src;
    link.download = `DFT_Nanofiber_Assembly_${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initial script activation bootstrap context trigger
window.onload = function() {
    init3D();
    drawAllCurves();
    updateQuantumStats();
};