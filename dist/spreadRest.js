"use strict";
{
    // Spread Operator example 1
    const arrayName1 = ["Rahim", "Jobbar", "Borkot", "Topon"];
    const arrayName2 = ["Julekha", "Bobita", "Kobori", "Sabana"];
    arrayName1.push(...arrayName2);
    // Spread Operator example 2
    const mentors1 = {
        figma: "Surovi",
        frontend: "Omar Faruk",
        backend: "Biplob",
    };
    const mentors2 = {
        dataEntry: "Fozle",
        admin: "Saiful",
        assistent: "Tamin",
    };
    const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
    // Rest Operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi, ${friend}`));
    };
    greetFriends("Abul", "Babul", "Kabul", "Bulbul");
}
