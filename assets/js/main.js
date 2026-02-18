function openModal(position) {
  document.getElementById('jobTitle').innerText = position;
  document.getElementById('applicationModal').classList.remove('hidden');
  document.getElementById('applicationModal').classList.add('flex');
}

function closeModal() {
  document.getElementById('applicationModal').classList.add('hidden');
  document.getElementById('applicationModal').classList.remove('flex');
}

document.getElementById('applicationModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});



function filterJobs(category, btn){

  const cards = document.querySelectorAll('.job-card');
  const buttons = document.querySelectorAll('.filter-btn');

  // active button style
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  cards.forEach(card => {

    const jobCategory = card.getAttribute('data-category');

    if(category === 'all' || jobCategory === category){
      card.style.display = 'block';
      card.style.opacity = "0";
      setTimeout(()=> card.style.opacity="1",50);
    }else{
      card.style.display = 'none';
    }

  });
}



const requirementsData = {

  office: `
    <p class="font-semibold text-red-700">Photocopy:</p>
    <ul class="list-disc ml-6">
      <li>Birth Certificate</li>
      <li>Marriage Certificate (if married)</li>
      <li>2 Valid IDs (with specimen signatures)</li>
      <li>Diploma</li>
      <li>Certificate of Employment (if any)</li>
    </ul>

    <p class="font-semibold text-red-700 mt-3">Original Copy:</p>
    <ul class="list-disc ml-6">
      <li>NBI/Police Clearance</li>
      <li>Barangay Clearance</li>
      <li>Medical Certificate (Fit to Work)</li>
      <li>2pcs 2x2 Photo (Red Background)</li>
      <li>On-Call Worker Agreement (Company Provided)</li>
    </ul>
  `,

  management: `
    <p class="font-semibold text-red-700">Standard Requirements:</p>
    <ul class="list-disc ml-6">
      <li>Birth Certificate</li>
      <li>Valid IDs</li>
      <li>Diploma</li>
      <li>NBI Clearance</li>
      <li>Barangay Clearance</li>
      <li>Medical Certificate</li>
    </ul>
  `,

  rider: `
    <p class="font-semibold text-red-700">General Requirements:</p>
    <ul class="list-disc ml-6">
      <li>Birth Certificate</li>
      <li>Valid IDs</li>
      <li>NBI/Police Clearance</li>
      <li>Barangay Clearance</li>
      <li>Medical Certificate</li>
      <li>2pcs 2x2 Photo</li>
    </ul>

    <p class="font-semibold text-red-700 mt-3">
      Delivery Rider — Additional:
    </p>
    <ul class="list-disc ml-6">
      <li>Driver’s License (not expired)</li>
      <li>OR & CR (authorization if different owner)</li>
    </ul>
  `
};

function openRequirements(type) {
  document.getElementById("requirementsContent").innerHTML =
    requirementsData[type];

  const modal = document.getElementById("requirementsModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeRequirements() {
  const modal = document.getElementById("requirementsModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

/* click outside close */
document.getElementById("requirementsModal")
.addEventListener("click", function(e){
  if(e.target === this){
    closeRequirements();
  }
});


function openGeneralApplication() {
  document.getElementById("generalModal").classList.remove("hidden");
  document.getElementById("generalModal").classList.add("flex");
}

function closeGeneralApplication() {
  document.getElementById("generalModal").classList.add("hidden");
}

let atBottom = false;

function toggleScroll() {

  if (!atBottom) {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });

    document.getElementById("arrowIndicator").innerText = "↑";
    atBottom = true;

  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    document.getElementById("arrowIndicator").innerText = "↓";
    atBottom = false;
  }
}

  function viewImage(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = src;
    modal.classList.remove('hidden');
  }

  function closeImageModal() {
    document.getElementById('imageModal').classList.add('hidden');
  }


  function nextStep() {
  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.remove('hidden');
}

function prevStep() {
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step1').classList.remove('hidden');
}

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});