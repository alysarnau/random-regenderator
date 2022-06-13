const genders = [ 'Friends to Lovers',
    `Enemies to Lovers`,
    `Misunderstood Billionaire with a Heart of Gold`,
    `Fake Relationship-Themed Romance Novel`,
    `Plot-Convenient Amnesia`,
    `Aloof Dark-Haired Girl`,
    `Cute Sports Club Manager`,
    `Elegant Gothic Lolita`,
    `Heir to the Dojo`,
    `The Idiot from Osaka`,
    `Anime Catholicism`,
    `Kendo Team Captain`,
    `Sailor Scout`,
    `Patient Childhood Love Interest`,
    `Anime Salaryman`,
    `Stock Shōnen Hero`,
    `Stock Shōnen Rival`,
    `Werewolves as a Metaphor`,
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
    `The Male Gaze (derogatory)`,
    `Carefully Syncronized RGB Computer Lighting Setup`,
    `Kitt Fisto`,
    `The Star Wars Prequels (derogatory)`,
    `The Star Wars Prequels (affectionate)`,
    `The Star Trek Pon Farr Episode`,
    `Frog (Singular)`,
    `Frogs (Plural, Friends)`,
    `Soldier`,
    `An overly washed stuffed toy`,
    `Byronic Hero`,
    `Roman Reigns`,
    `Bob Burger`,
    `So Long Gay Bowser`,
    `Birdo`,
    `King Boo`,
    `Perpetually Underwatered Plant`,
    `Junk Drawer that Never Opens Properly`,
    `Keyboard Without a Working "I" Key`,
    `Sword Temporarily Given Human Form`,
    `Magical Beast Transmogrified Into Human Form`,
    `Fifteen Clowns in a Clown Car`,
    `Whatever I added in that crashed my computer`,
    `Queer-coded Disney Villian`,
    `A spunky adventure hero`,
    `Ragtag group of misfits`,
    `Humor as a Load-Bearing Trauma Response`,
    `Be Gay Do Crime`,
    `My Best Friend is Actually Royalty!`,
    `Programmer Socks`,
    `Blahaj`,
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

