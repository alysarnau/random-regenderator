const genders = [ 'Friends to lovers',
    `Enemies to Lovers`,
    `Misunderstood Billionaire with a Heart of Gold`,
    `Fake Relationship-Themed Romance Novel`,
    `Plot-Convenient Amnesia`,
    `Aloof Dark-Haired Girl`,
    `Cute Sports Club Manager`,
    `Elegant Gothic Lolita`,
    `Heir to the Dojo`,
    `The Idiot from Osaka`,
    `Hikikomori`,
    `Anime Catholicism`,
    `Kendo Team Captain`,
    `Magical Girl`,
    `Patient Childhood Love Interest`,
    `Salaryman`,
    `Stock Shōnen Hero`,
    `Stock Shōnen Rival`,
    `Stock Shoujo Heroine`,
    `One-Armed Samurai`,
    `Tsundere`,
    `Horse Girl`,
    `Souped Up 2001 Honda Civic`,
    `Three Possums in a Trench Coat`,
    `World's Best Dad Mug`,
    `Hour 10 of a Coke Party`,
    `Overly-Caffienated History Enthusiast`,
    `Sad Robot`,
    `Christmas-themed Lifetime Movie`,
    `Fish out of Water`,
    `The Turtle Upon Whom the World Is Built`,
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

