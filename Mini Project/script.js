let currentSteps = {};

function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle('hidden');
}

function startCooking(stepId) {
  const steps = document.querySelectorAll(`#${stepId} li`);
  if (steps.length > 0) {
    steps.forEach((step) => (step.style.backgroundColor = ''));
    steps[0].style.backgroundColor = '#ffdead';
    currentSteps[stepId] = 0;
    updateProgressBar(stepId, steps.length);
  }
}

function nextStep(stepId) {
  const steps = document.querySelectorAll(`#${stepId} li`);
  let currentStep = currentSteps[stepId];
  if (currentStep < steps.length - 1) {
    steps[currentStep].style.backgroundColor = '';
    currentStep++;
    steps[currentStep].style.backgroundColor = '#ffdead';
    currentSteps[stepId] = currentStep;
    updateProgressBar(stepId, steps.length);
  }
}

function updateProgressBar(stepId, totalSteps) {
  const card = document.getElementById(stepId).closest('.recipe-card');
  const progress = card.querySelector('.progress');
  const currentStep = currentSteps[stepId] + 1;
  const percent = (currentStep / totalSteps) * 100;
  progress.style.width = percent + '%';
}

