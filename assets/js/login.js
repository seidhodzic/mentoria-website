/* ── Tab switcher ── */
  function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(function(btn, i) {
      btn.classList.toggle('active', (tab === 'login' && i === 0) || (tab === 'register' && i === 1));
    });
    document.getElementById('panel-login').classList.toggle('active', tab === 'login');
    document.getElementById('panel-register').classList.toggle('active', tab === 'register');
  }

  /* ── Purchase type toggle ── */
  function switchPurchase(type) {
    document.getElementById('pp-subscription').classList.toggle('active', type === 'subscription');
    document.getElementById('pp-onetime').classList.toggle('active', type === 'onetime');
    var cta = document.getElementById('register-cta');
    cta.textContent = type === 'onetime' ? 'Purchase Service' : 'Join Mentoria';
  }

  /* ── Role hint ── */
  var roleHints = ['player','club','investor','agent','executive','lawyer','coach','student','other'];
  function updateRoleHint(val) {
    roleHints.forEach(function(r) {
      var el = document.getElementById('hint-' + r);
      if (el) el.classList.toggle('visible', val === r);
    });
  }

  /* ── Plan modal ── */
  var activePlan = 'annual';

  function openPlanModal() {
    document.getElementById('plan-modal-overlay').classList.add('open');
    document.getElementById('plan-trigger-btn').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closePlanModal(e) {
    if (e && e.target !== document.getElementById('plan-modal-overlay')) return;
    _closePlanModal();
  }

  function _closePlanModal() {
    document.getElementById('plan-modal-overlay').classList.remove('open');
    document.getElementById('plan-trigger-btn').classList.remove('open');
    document.body.style.overflow = '';
  }

  function selectPlan(plan) {
    activePlan = plan;
    document.getElementById('poc-monthly').classList.toggle('selected', plan === 'monthly');
    document.getElementById('poc-annual').classList.toggle('selected', plan === 'annual');
  }

  function hoverPlan(el) {
    if (!el.classList.contains('selected')) el.style.borderColor = 'rgba(25,53,62,0.3)';
  }
  function unhoverPlan(el) {
    if (!el.classList.contains('selected')) el.style.borderColor = '';
  }

  function confirmPlan() {
    var label = activePlan === 'annual' ? 'Annual — €39/mo' : 'Monthly — €49/mo';
    document.getElementById('selected-plan-label').textContent = label;
    _closePlanModal();
  }

  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') _closePlanModal();
  });
