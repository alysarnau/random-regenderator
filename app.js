const genders = [ 'Friends to lovers',
    `Enemies to lovers`,
    `Forbidden love`,
    `Secret identity/billionaire/royal`,
    `Stuck together - 'trapped in an elevator'`,
    `Best friend's brother/sister`,
    `Second chance`,
    `Soul mates`,
    `Fake relationship`,
    `runaway brides/jilted/best men/wedding planners`,
    `Amnesia/mistaken identity`,
    `Holiday romances/flings`,
]

function selectGender(genders) {
    let gender = genders[Math.floor(Math.random()*genders.length)]
    return gender;
}

console.log(selectGender(genders));

const genderButton = document.querySelector('#generate');
genderButton.addEventListener('click', () => {
    const genderDisplay = document.querySelector('#gender-display');
    genderDisplay.innerHTML = `${selectGender(genders)}`;
})

