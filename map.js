const FullName = [

    {
        Name: 'Thirdy',
        Age: '20',
        favorite: 'bikers'
    },
    {
        Name: 'jonny',
        Age: '25',
        favorite: 'billiard'
    },
    {
        Name: 'renan',
        Age: '21',
        favorite: 'gym'
    },
];


    const FullNames = FullName.map(
        function(name){
            return name.favorite;
        }
    );

    console.log(FullNames);