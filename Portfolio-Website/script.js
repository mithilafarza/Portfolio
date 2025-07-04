<script>
  
  document.getElementById('aboutBtn').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth'});
  });

  document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });

  // Icon links
  document.getElementById('linkedinIcon').addEventListener('click', function() {
    window.open('https://linkedin.com/in/mithi06', '_blank');
  });

  document.getElementById('githubIcon').addEventListener('click', function() {
    window.open('https://github.com/mithi06', '_blank');
  });

  document.getElementById('facebookIcon').addEventListener('click', function() {
    window.open('https://facebook.com/mithilafarjana', '_blank');
  });

  document.getElementById('researchgateIcon').addEventListener('click', function() {
    window.open('https://researchgate.net/profile/mithi06', '_blank');
  });
</script>
