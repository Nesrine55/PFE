import { Component } from '@angular/core';

@Component({
  selector: 'app-studentsettings',
  templateUrl: './studentsettings.component.html',
  styleUrls: ['./studentsettings.component.css']
})
export class StudentsettingsComponent {
  value!: string;
  public ngOnInit(){
    const nextButton = document.querySelector('nav .next') as HTMLElement;
const prevButton = document.querySelector('nav .prev') as HTMLElement;
const submitButton = document.querySelector('nav .submit') as HTMLElement;
const indicatorSteps = document.querySelectorAll('.indicator');
const formShow = document.querySelectorAll('.form-child');
let active = 1;

nextButton.addEventListener('click', () => {
    active++;
    if (active > indicatorSteps.length) {
        active = indicatorSteps.length;
    }
    updateProgress();
});

prevButton.addEventListener('click', () => {
    active--;
    if (active < 1) {
        active = 1;
    }
    updateProgress();
});

const updateProgress = (): void => {
    if (indicatorSteps.length === active) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';

    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
    // toggle .active class for list  item
    indicatorSteps.forEach((step, i) => {
        if (i === (active - 1)) {
            step.classList.add('active');
            formShow[i].classList.add('active');
        } else {
            step.classList.remove('active');
            formShow[i].classList.remove('active');
        }
    });
    // faculty selected
    const selected_studies = document.querySelectorAll('input[type="radio"]:checked');
    let selected_studies_html = '';
    const studiesArray = Array.from(selected_studies);

    for (const study of studiesArray) {
        if ((study as HTMLInputElement).checked) {
            const parent = study.closest('.faculty') as HTMLElement;
            const study_name = (study as HTMLInputElement).value;
            const faculty = parent.querySelector('h3')?.innerHTML;
            const icon = parent.querySelector('.icon')?.outerHTML;

            selected_studies_html += `
                <div class="faculty">
                    ${icon}
                    <h3>${faculty}</h3>
                    <span>${study_name}</span>
                </div>
            `;
        }
    }
    document.querySelector('.field-selected')!.innerHTML = selected_studies_html;
}

// photo preview
document.querySelector('input[name="photo"]')?.addEventListener('change', function (e) {
  const output = document.querySelector('.photo') as HTMLImageElement;
  const file = (e.target as HTMLInputElement).files?.[0];
  if (file) {
      output.src = URL.createObjectURL(file);
      output.onload = function () {
          URL.revokeObjectURL(output.src);
      }
  }
})


// input value transfer
const fnameInput = document.querySelector('.fname');
if (fnameInput) {
  fnameInput.addEventListener('keyup', function(this: HTMLInputElement) {
    const firstname = document.querySelector('.firstname');
    if (firstname) firstname.innerHTML = this.value;
  });
}


const lnameInput = document.querySelector('.lname');
if (lnameInput) {
  lnameInput.addEventListener('keyup', function(this: HTMLInputElement) {
    const lastname = document.querySelector('.lastname');
    if (lastname) lastname.innerHTML = this.value;
  });
}


const countryInput = document.querySelector('input[name="country"]');
if (countryInput) {
  countryInput.addEventListener('change', function(this: HTMLInputElement) {
    const nationality = document.querySelector('.nationality');
    if (nationality) nationality.innerHTML = this.value;
  });
}

const birthDateInput = document.querySelector('input[name="birth_date"]');
if (birthDateInput) {
  birthDateInput.addEventListener('keyup', function(this: HTMLInputElement) {
    const date = document.querySelector('.date');
    if (date) date.innerHTML = this.value;
  });
}


const birthMonth = document.querySelector('input[name="birth_month"]');
if (birthMonth) {
  birthMonth.addEventListener('keyup', function(this: HTMLInputElement) {
    const date = new Date();
    date.setMonth(parseInt(this.value) - 1);

    let month_name = date.toLocaleDateString('en-US', {
      month: 'long',
    });
    if (!this.value) month_name = '';

    const month = document.querySelector('.month');
    if (month) month.innerHTML = month_name;
  });
}

const birthYear = document.querySelector('input[name="birth_year"]');
if (birthYear) {
  birthYear.addEventListener('keyup', function(this: HTMLInputElement) {
    const year = document.querySelector('.year');
    if (year) year.innerHTML = this.value;
  });
}



  }

}
