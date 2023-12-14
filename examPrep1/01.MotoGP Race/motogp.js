function solve(input) {

    const riderCount = Number(input.shift());

    const riders = {};

    for (let index = 0; index < riderCount; index++) {
        const riderLine = input.shift();
        const [name, fuel, position] = riderLine.split('|');

        riders[name] = {
            fuel: Number(fuel),
            position: Number(position)
        };

    }
    let commandLine = input.shift();
    while (commandLine !== 'Finish') {
        commandLine = commandLine.split(' - ');
        const command = commandLine.shift();
        const riderName = commandLine.shift();

        switch (command) {

            case 'StopForFuel':
                const minimumFuel = Number(commandLine.shift());
                const changedPosition = Number(commandLine.shift());
                if (riders[riderName].fuel < minimumFuel) {

                    riders[riderName].position = changedPosition;
                    console.log(`${riderName} stopped to refuel but lost his position, now he is ${changedPosition}.`)

                } else {
                    console.log(`${riderName} does not need to stop for fuel!`)
                }
                break;
            case 'Overtaking':
                const secondRider = commandLine.shift();

                const firstRiderPostion = riders[riderName].position;
                const secondRiderPosition = riders[secondRider].position;

                if (firstRiderPostion < secondRiderPosition) {

                    riders[riderName].position = secondRiderPosition;
                    riders[secondRider].position = firstRiderPostion;


                    console.log(`${riderName} overtook ${secondRider}!`)
                }


                break;
            case 'EngineFail':
                const lapsLeft = commandLine.shift();

                delete riders[riderName];
                console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                break;

        }

        commandLine = input.shift();
    }
    for (const riderName in riders) {
        console.log(riderName);
        console.log(`  Final position: ${riders[riderName].position}`);
    }

}
solve(
    ["3",

        "Valentino Rossi|100|1",

        "Marc Marquez|90|2",

        "Jorge Lorenzo|80|3",

        "StopForFuel - Valentino Rossi - 50 - 1",

        "Overtaking - Marc Marquez - Jorge Lorenzo",

        "EngineFail - Marc Marquez - 10",

        "Finish"
    ]);
