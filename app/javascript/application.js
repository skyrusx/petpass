// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "bootstrap"

(() => {
    'use strict';
    function bindValidation() {
        document.querySelectorAll('form.needs-validation').forEach((form) => {
            if (form.__bound) return; form.__bound = true;
            const validate = () => { const ok = form.checkValidity(); form.classList.add('was-validated'); return ok; };
            form.addEventListener('submit', (e) => { if (!validate()) { e.preventDefault(); e.stopPropagation(); }});
            form.addEventListener('turbo:submit-start', (e) => { if (!validate()) { e.preventDefault(); e.detail?.formSubmission?.stop(); }});
        });
    }
    document.addEventListener('turbo:load', bindValidation);
    document.addEventListener('DOMContentLoaded', bindValidation);
})();
