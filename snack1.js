const bikes = [
    {
        nome: "saetta",
        peso: 30
    },
    {
        nome: "tankybike",
        peso: 100
    },
    {
        nome: "chillslowlybike",
        peso:  50
    },
    {
        nome: "jumpybike",
        peso: 15
    },
    {
        nome: "brokenbike",
        peso: 5
    },
    {
        nome: "sonicBike",
        peso: 10
    }

]

function getWeight (bikes){
 
    let theLightestBike = {

    };
    let weight = 0;
    
    for (let i = 0; i < bikes.length; i++) {

        const bikeDetails = bikes[i];
        console.log(bikes[i])
        /* let {nome, peso} = bikeDetails;
        console.log(nome, peso); */
        let pesoBike = bikeDetails.peso
        /* console.log(pesoBike); */
        let nomeBike = bikeDetails.nome
        /* console.log(nomeBike); */
        if(pesoBike < weight || weight === 0){
            theLightestBike.nome = nomeBike;
            theLightestBike.peso = pesoBike;
            weight = pesoBike;
        }
        
        
    }
    console.log(theLightestBike);
    let{nome, peso} = theLightestBike;
    alert(`la bicicletta più leggera è ${nome} che pesa ${peso} kg`)
    return theLightestBike
}

getWeight(bikes)

