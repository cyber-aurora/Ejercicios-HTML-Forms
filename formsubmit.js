const form = document.querySelector('#my-form');


form.addEventListener('submit', function(e) {
  e.preventDefault();


  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const age = document.querySelector('#age').value;
  const description = document.querySelector('#description').value;

  const recommendation = document.querySelector('input[name="recommendation"]:checked').value;

  let languages = [];
  const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  for (let i = 0; i < checkboxes.length; i++) {
    languages.push(checkboxes[i].value);
  }

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Age: ${age}`);
  console.log(`Description: ${description}`);
  console.log(`Recommendation: ${recommendation}`);
  console.log(`Languages: ${languages}`);
});
