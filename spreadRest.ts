{
    // Spread Operator example 1
    const arrayName1: string[] = ["Rahim", "Jobbar", "Borkot", "Topon"];
    const arrayName2: string[] = ["Julekha", "Bobita", "Kobori", "Sabana"];

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
    }


    const mentorsList = {
        ...mentors1,
        ...mentors2
    }



    // Rest Operator
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi, ${friend}`))
    };

    greetFriends("Abul", "Babul", "Kabul", "Bulbul");
}